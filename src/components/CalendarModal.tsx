import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Escolha um horário disponível</DialogTitle>
        </DialogHeader>
        <div className="w-full aspect-[4/3]">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KN-0Gt-sPYZ8aMwlViHH4otiHnINif0kG65Tjdsx2VD37amhnd8U7e8XZQajcRdJnmHuMcX2k?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;