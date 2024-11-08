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
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1RwPX4ZDRz_nQWqBqh8ykGYzHZ5DGk_mJ8GkM7ZXJ2aWNlc0BrdXJlLmNvbS5icg?gv=true"
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