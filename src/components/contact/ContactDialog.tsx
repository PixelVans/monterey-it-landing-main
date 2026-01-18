import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactDialog = ({ open, onOpenChange }) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <Dialog.Content
          className="
            fixed left-1/2 top-1/2 z-50
            w-[95vw] max-w-lg
            max-h-[90vh]
            -translate-x-1/2 -translate-y-1/2
            overflow-y-auto
            rounded-2xl
            bg-card
            p-6
            shadow-xl
            focus:outline-none
          "
        >
          <Dialog.Close className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </Dialog.Close>

          <Dialog.Title className="text-xl font-bold">
            Request IT Assistance
          </Dialog.Title>

          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Tell us what’s going on and an IT advisor will reach out shortly.
          </Dialog.Description>

          <div className="mt-6">
            <ContactForm />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ContactDialog;
