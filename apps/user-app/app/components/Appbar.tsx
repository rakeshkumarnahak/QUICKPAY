import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: any;
  onSignout: any;
}

export default function Appbar({ user, onSignin, onSignout }: AppbarProps) {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      {/* Mobile View */}
      <div className="flex w-full items-center justify-between md:hidden">
        <Link href="/" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-xl ml-2 font-semibold">Quick Pay</span>
        </Link>

        <Sheet>
          <SheetTrigger
            asChild
            className="bg-transparent transition-all duration-300 ease-in-out"
          >
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex items-center mb-6">
              <MountainIcon className="h-6 w-6" />
              <span className="text-xl ml-2 font-semibold">Quick Pay</span>
            </div>
            <div className="grid gap-2">
              <Link
                href="/dashboard"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Dashboard
              </Link>
              <Link
                href="/transfer"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Transfer
              </Link>
              <Link
                href="/transactions"
                className="flex w-full items-center py-2 text-lg font-semibold"
                prefetch={false}
              >
                Transactions
              </Link>

              <Button
                className="flex w-full items-center py-2 text-lg font-semibold"
                onClick={user ? onSignout : onSignin}
              >
                {user ? "Logout" : "Login"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop View */}
      <Link
        href="/"
        className="mr-6 hidden md:flex items-center"
        prefetch={false}
      >
        <MountainIcon className="h-6 w-6" />
        <span className="text-xl ml-2 font-semibold">Quick Pay</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6">
        {/* <Link
          href="/dashboard"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Dashboard
        </Link>
        <Link
          href="/transfer"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Transfer
        </Link>
        <Link
          href="/transactions"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Transactions
        </Link> */}
        <Button
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          onClick={user ? onSignout : onSignin}
        >
          {user ? "Logout" : "Login"}
        </Button>
      </nav>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
