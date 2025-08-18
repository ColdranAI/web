import { Button } from "@/components/ui/button";

export const Support = () => {
  return (
    <div className="relative rounded-xl flex flex-col justify-between border component-outline bg-card p-6 h-full">
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="font-semibold text-xl tracking-tight leading-tight">
            Support After Sale + Free Updates & Feature Requests
          </h3>
          <p className="text-sm text-black leading-relaxed">
            Whenever you buy a product from us let it be a bundle or a single
            product,{" "}
            <span className="font-semibold bg-neutral-100 border border-neutral-300 px-0.5 text-black">
              you get free updates and you can request new features.
            </span>
            <br />
            <br />
            <span className="font-semibold text-black">
              Need any help with building your product?
            </span>{" "}
            We are here to build your mvp{" "}
            <span className="font-semibold bg-neutral-100 border border-neutral-300 px-0.5 text-black">
              sparingly without breaking your bank.
            </span>
          </p>
        </div>
        <a
          href="https://x.com/ArjunShips"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="sm">
            Say Hii! to Arjun 🍄
          </Button>
        </a>
      </div>
    </div>
  );
};
