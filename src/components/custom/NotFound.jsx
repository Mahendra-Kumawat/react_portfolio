import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
      className="grid md:grid-cols-2 content-center grid-cols-1 max-w-6xl mx-auto h-full  justify-center items-center
     gap-3 min-h-screen px-4 py-10"
    >
      <img src="/images/404.svg" alt="Error Image" />
      <Card className="w-full outline-none border-none shadow-none text-center">
        <CardContent>
          <h1 className="text-6xl font-extrabold  mb-4">404</h1>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            Page Not Found
          </CardTitle>
          <CardDescription className="mt-2">
            Oops! The page you are looking for doesn't exist or has been moved.
          </CardDescription>
          <Button className="mt-6 cursor-pointer" onClick={() => navigate("/")}>
            Go Back Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
