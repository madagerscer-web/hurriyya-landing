export function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-white mb-4">Hurriyya</h3>
            <p className="text-slate-400 text-sm">Patient engagement platform built for modern healthcare.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2024 Hurriyya. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
