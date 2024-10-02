"use client";
import { ReactNode, Suspense, use } from "react";
import { ErrorBoundary } from "react-error-boundary";

const Asyncable = ({
  work,
  children,
}: {
  children: ReactNode;
  work: Promise<any>;
}) => {
  use(work);
  return <>{children}</>;
};

const StepIcon = ({ status }: { status: "progress" | "done" | "error" }) => {
  if (status === "progress") {
    return (
      <svg
        aria-hidden="true"
        className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    );
  }
  if (status === "error") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 16C5.87833 16 3.84331 15.1571 2.34315 13.6568C0.842901 12.1565 0 10.1217 0 8C0 5.87833 0.842901 3.84332 2.34315 2.34315C3.84353 0.842902 5.87833 0 8 0C10.1217 0 12.1567 0.842902 13.6568 2.34315C15.1571 3.84353 16 5.87833 16 8C15.9974 10.121 15.1538 12.1545 13.654 13.654C12.1543 15.1538 10.1207 15.9974 8 16ZM11.0851 5.94242V5.9423C11.2254 5.80678 11.3053 5.62063 11.3071 5.42558C11.3088 5.23053 11.2321 5.04292 11.0941 4.90496C10.9562 4.76701 10.7685 4.69031 10.5735 4.69202C10.3784 4.69372 10.1923 4.77371 10.0568 4.91397L8 6.97149L5.94323 4.91397C5.75853 4.7356 5.49346 4.66779 5.2457 4.73572C4.99805 4.80366 4.8046 4.99713 4.73665 5.24477C4.66871 5.49254 4.73653 5.7576 4.9149 5.9423L6.97167 7.99983L4.9149 10.0573C4.77464 10.1929 4.69465 10.379 4.69294 10.5741C4.69124 10.7691 4.76794 10.9567 4.90589 11.0947C5.04383 11.2326 5.23145 11.3093 5.4265 11.3076C5.62155 11.3059 5.8077 11.2259 5.94322 11.0857L7.99999 9.02815L10.0568 11.0857C10.1923 11.2259 10.3784 11.3059 10.5735 11.3076C10.7685 11.3093 10.9561 11.2326 11.0941 11.0947C11.2321 10.9567 11.3088 10.7691 11.307 10.5741C11.3053 10.379 11.2253 10.1929 11.0851 10.0573L9.02832 7.99983L11.0851 5.94242Z"
          fill="#E41D1D"
        />
      </svg>
    );
  }
  return (
    <svg
      className="w-4 h-4"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
  );
};

const Title = ({
  disabled,
  children,
}: {
  disabled?: boolean;
  children: ReactNode;
}) => {
  return (
    <h3 className={`font-medium leading-tight ${disabled && "text-gray-500"}`}>
      {children}
    </h3>
  );
};

const Step = ({
  title,
  description,
  work,
}: {
  title: string;
  description: string;
  work: Promise<any>;
}) => {
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <ErrorBoundary fallback={<StepIcon status="error" />}>
          <Suspense fallback={<StepIcon status="progress" />}>
            <Asyncable work={work}>
              <StepIcon status="done" />
            </Asyncable>
          </Suspense>
        </ErrorBoundary>
      </span>
      <ErrorBoundary fallback={<Title disabled={true}>{title}</Title>}>
        <Suspense fallback={<Title disabled={true}>{title}</Title>}>
          <Asyncable work={work}>
            <Title>{title}</Title>
          </Asyncable>
        </Suspense>
      </ErrorBoundary>

      <p className="text-sm">{description}</p>
    </li>
  );
};

const VerticalStep = ({ children }: { children: ReactNode }) => {
  return (
    <ol className="relative text-gray-500  border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {children}
    </ol>
  );
};
const ProductPage = ({
  first,
  second,
  third,
}: {
  first: Promise<any>;
  second: Promise<any>;
  third: Promise<any>;
}) => {
  return (
    <div className="max-w-96 mx-auto my-10">
      <VerticalStep>
        <Step
          work={first}
          title="Newsletter Verification"
          description="Checking if user is subscribed for newsletter"
        />
        <Step
          work={second}
          title="Subscribe newsletter"
          description="Subscribing user to newsletter"
        />
        <Step
          work={third}
          title="Personal Info"
          description="Step Details here"
        />
      </VerticalStep>
    </div>
  );
};

export { ProductPage };
