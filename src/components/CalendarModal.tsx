import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarModal = ({ isOpen, onClose }: CalendarModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] h-[80vh]">
        <DialogHeader>
          <DialogTitle>{t('scheduleDemo')}</DialogTitle>
        </DialogHeader>
        <div className="h-full">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2KN-0Gt-sPYZ8aMwlViHH4otiHnINif0kG65Tjdsx2VD37amhnd8U7e8XZQajcRdJnmHuMcX2k?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;