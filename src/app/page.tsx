import { redirect } from 'next/navigation';

export default function RootPage() {
  // 重定向到默认语言页面（英文）
  redirect('/en');
}
