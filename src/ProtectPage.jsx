import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const ProtectPage = ({ children }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

export default ProtectPage;
