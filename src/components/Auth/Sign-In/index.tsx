import { signInWithEmail } from "@/lib/server/signin";

const SignInPage = () => {
  return (
    <div className="max-w-sm mx-auto">
      <form action={signInWithEmail} className="w-full">
        <div className="flex flex-col space-y-4 item-center w-full">
          <input id="email" name="email" placeholder="Email" type="email" />
          <input
            id="password"
            name="password"
            placeholder="Password"
            minLength={8}
            type="password"
          />
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export { SignInPage };
