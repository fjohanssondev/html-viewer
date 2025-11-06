interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

function Box({ children, ...props }: BoxProps) {
  return (
    <div
      {...props}
      className="[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:list-item p-4 max-w-none dark:text-white border-primary placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content min-h-64 w-full rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm prose prose-sm dark:prose-strong:text-white prose-strong:font-bold prose-custom"
    >
      {children}
    </div>
  )
}

export { Box }