import { Input } from '@/components/ui/input';

export function DateRangePicker() {
  return (
    <div className="flex gap-4">
      <Input type="date" placeholder="Start date" />
      <Input type="date" placeholder="End date" />
    </div>
  );
}
