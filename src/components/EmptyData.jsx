function EmptyData({ info }) {
  return (
    <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
      There is no {info} available
    </div>
  );
}

export default EmptyData;
