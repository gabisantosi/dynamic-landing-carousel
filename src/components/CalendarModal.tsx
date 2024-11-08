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
            src="https://calendar.google.com/calendar/embed?src=c_f606d145c55fb14f2007f8561e01acd58517c8d80849f16e8974dc0d3324dd15%40group.calendar.google.com&ctz=Europe%2FStockholm"
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