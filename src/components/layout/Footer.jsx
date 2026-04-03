function Footer() {
  return (
    <footer className="w-full py-12 border-t bg-[#111318] flex flex-col md:flex-row justify-between items-center px-12 text-xs uppercase">
      
      <div className="mb-6 md:mb-0 text-gray-400">
        <p className="text-[#C3F5FF] font-bold">PSG iTech Drone Ecosystem</p>
        <p>Email: drones@psgitech.ac.in</p>
        <p>Instagram: @psgitech_drones</p>
        <p>Website: https://www.psgitech.ac.in</p>
      </div>

      <div className="flex gap-6 text-gray-400">
        <span>Privacy Policy</span>
        <span>Terms</span>
      </div>
    </footer>
  );
}

export default Footer;