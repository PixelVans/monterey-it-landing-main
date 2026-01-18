import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ContactSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />

        <h1 className="text-3xl font-bold mb-3">
          You’re all set 
        </h1>

        <p className="text-muted-foreground mb-6 leading-relaxed">
          Thanks for reaching out.  We’ve got your message and will reach out shortly.
        </p>

        <Button asChild size="lg">
          <Link to="/">Back to homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactSuccess;
