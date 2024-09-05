export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <main className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold text-red-800">Hello World</h1>
        <p className="text-2xl">Testing GH pages with some images</p>
        <img width={200} height={200} src="cam-lense.png" alt="Random Image" />
      </main>
    </div>
  );
}
