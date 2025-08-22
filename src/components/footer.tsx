import ColdranLogo from "./ColdranLogo";
import Link from "next/link";

export default function Footer() {
  return (
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <ColdranLogo className="w-12 h-12 animate-fadeIn delay-0"/>
              <h3 className="font-semibold text-lg mb-1.5 mt-4">
                Coldran
              </h3>
              <p className="text-muted-foreground text-sm">
                Perfect Combination of Scanning, Customer Experience and Knowledge Base.
                <br />
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-md">
                <li>
                  <Link
                    href="https://discord.gg/RHj9pcy2Pp"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Links</h4>
              <ul className="space-y-2 text-md">
                <li>
                  <Link
                    href="https://x.com/ColdranAI"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/ColdranAI"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://cal.com/arjunaditya/30min?user=arjunaditya"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Call me
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-medium mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy & Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Coldran. All rights reserved.
            </p>
          </div>
        </div>
      </footer>     
  );
}
