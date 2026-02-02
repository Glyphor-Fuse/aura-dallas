const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter mb-6">
              Aura<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm">
              The heartbeat of Dallas nightlife. Where sound, light, and energy converge to create the unforgettable.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Main Street</li>
              <li>Dallas, TX 75201</li>
              <li className="pt-2">info@auradallas.com</li>
              <li>(214) 555-0123</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-4">Social</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-primary cursor-pointer transition-colors">TikTok</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Resident Advisor</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
          <p>© 2024 Aura Nightclub. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
