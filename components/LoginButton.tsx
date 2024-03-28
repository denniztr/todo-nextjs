'use client';

import Link from 'next/link';
import { Button } from './ui/button';

const LoginButton = () => {
  return (
    <Link
      href="/signin"
      className="text-sm underline-offset-4 transition duration-500 hover:underline"
    >
      Войти
    </Link>
  );
};

export default LoginButton;
