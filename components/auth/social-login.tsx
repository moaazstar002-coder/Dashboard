'use client';

import { Button } from '@/components/ui/button';

export function SocialLogin() {
  return (
    <div className="space-y-3">
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
      <Button variant="outline" className="w-full">
        Login with GitHub
      </Button>
    </div>
  );
}
