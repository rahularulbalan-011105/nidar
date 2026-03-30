from fastapi import FastAPI, HTTPException, Depends
from db import users
from auth import hash_password, verify_password, create_token
from dependencies import get_current_user, require_admin
from google.oauth2 import id_token
from google.auth.transport import requests

app = FastAPI()

GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"

# =========================
# SIGNUP (WITH OTP FLAG)
# =========================
@app.post("/signup")
def signup(data: dict):
    if users.find_one({"email": data["email"]}):
        raise HTTPException(400, "User exists")

    users.insert_one({
        "name": data["name"],
        "email": data["email"],
        "password": hash_password(data["password"]),
        "role": "User",
        "verified": False
    })

    return {"msg": "Signup success, verify OTP"}

# =========================
# LOGIN
# =========================
@app.post("/login")
def login(data: dict):
    user = users.find_one({"email": data["email"]})

    if not user or not verify_password(data["password"], user["password"]):
        raise HTTPException(401, "Invalid credentials")

    if not user.get("verified"):
        raise HTTPException(403, "Verify OTP first")

    token = create_token({"email": user["email"]})

    return {"token": token}

# =========================
# GOOGLE AUTH
# =========================
@app.post("/auth/google")
def google_auth(body: dict):
    try:
        idinfo = id_token.verify_oauth2_token(
            body["token"],
            requests.Request(),
            GOOGLE_CLIENT_ID
        )

        email = idinfo["email"]
        name = idinfo.get("name")

        user = users.find_one({"email": email})

        if not user:
            users.insert_one({
                "email": email,
                "name": name,
                "role": "User",
                "verified": False,
                "auth_type": "google"
            })

        token = create_token({"email": email})

        return {"token": token}

    except:
        raise HTTPException(400, "Invalid Google token")

# =========================
# VERIFY USER (AFTER OTP)
# =========================
@app.post("/verify")
def verify_user(data: dict):
    users.update_one(
        {"email": data["email"]},
        {"$set": {"verified": True}}
    )
    return {"msg": "User verified"}

# =========================
# PROTECTED ROUTE
# =========================
@app.get("/dashboard")
def dashboard(user=Depends(get_current_user)):
    return {
        "msg": "Welcome",
        "user": user["email"],
        "role": user["role"]
    }

# =========================
# ADMIN ONLY
# =========================
@app.get("/admin/users")
def get_users(user=Depends(require_admin)):
    all_users = list(users.find({}, {"password": 0}))
    for u in all_users:
        u["_id"] = str(u["_id"])
    return all_users

@app.put("/admin/role")
def update_role(data: dict, user=Depends(require_admin)):
    users.update_one(
        {"email": data["email"]},
        {"$set": {"role": data["role"]}}
    )
    return {"msg": "Role updated"}
