import CardNav from './CardNav';
import UserMenu from './UserMenu';


export default function Header() {
  const headerItems = [
  {
    label: 'Ordenar PDF',
    bgColor: '#f5f5f5',
    textColor: '#333',
    links: [
      { label: 'Unir PDF', href: '/unir', ariaLabel: 'Unir PDF' },
      { label: 'Dividir PDF', href: '/dividir', ariaLabel: 'Dividir PDF' },
      { label: 'Eliminar páginas', href: '/eliminar', ariaLabel: 'Eliminar páginas PDF' },
    ],
  },
  {
    label: 'Optimizar PDF',
    bgColor: '#e0f7fa',
    textColor: '#006064',
    links: [
      { label: 'Comprimir PDF', href: '/comprimir', ariaLabel: 'Comprimir PDF' },
      { label: 'Reparar PDF', href: '/reparar', ariaLabel: 'Reparar PDF' },
      { label: 'OCR PDF', href: '/ocr', ariaLabel: 'OCR PDF' },
    ],
  },
  {
    label: 'Convertir a PDF',
    bgColor: '#fff3e0',
    textColor: '#e65100',
    links: [
      { label: 'JPG a PDF', href: '/jpg-a-pdf', ariaLabel: 'Convertir JPG a PDF' },
      { label: 'WORD a PDF', href: '/word-a-pdf', ariaLabel: 'Convertir Word a PDF' },
      { label: 'HTML a PDF', href: '/html-a-pdf', ariaLabel: 'Convertir HTML a PDF' },
    ],
  },
];
  return (
    <header className="h-[100px] bg-neutral-light dark:bg-neutral-dark relative flex items-center ">
      <img src="../public/Logo.png" alt="" className='w-auto h-32 mt-5' />
      <CardNav
        logoAlt="PDF Tools"
      items={headerItems}
      baseColor="#ffffff"
      menuColor="#FF6B35"
      buttonBgColor="#FF6B35"
      buttonTextColor="#fff"
    />
    <div className="absolute top-2 right-4 z-[100]">
  <UserMenu />
</div>

  </header>
);
}
