export default function OfflinePage() {
  return (
    <div className="max-w-[1400px] mx-auto flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold">You&apos;re offline</h1>
        <p className="mt-2 text-(--muted-foreground,#888)">
          It looks like you don&apos;t have a connection, and this page
          hasn&apos;t been cached yet. Visit it once while online and it&apos;ll
          work offline after that.
        </p>
      </div>
    </div>
  );
}
