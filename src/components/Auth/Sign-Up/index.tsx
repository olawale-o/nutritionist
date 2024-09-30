import { signUpWithEmail } from "@/lib/server/signup";

const SignUpPage = () => {
  return (
    <div className="max-w-sm mx-auto">
      <form action={signUpWithEmail} className="w-full">
        <div className="flex flex-col space-y-4 item-center w-full">
          <input id="email" name="email" placeholder="Email" type="email" />
          <input
            id="password"
            name="password"
            placeholder="Password"
            minLength={8}
            type="password"
          />
          <input id="name" name="name" placeholder="Name" type="text" />
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export { SignUpPage };
