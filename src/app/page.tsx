

export default function Home() {
  return (
    <>
      <div className=" p-70 flex flex-col items-center justify-center text-center px-6">
        <p className="text-3xl md:text-5xl font-bold text-white">
          Hello! I am <br />
          <span className="text-blue-600">Thillai Kavidhasu</span>, <br />
          <span className="text-white">Full Stack Developer</span>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="mailto:thillaikavidhasu@gmail.com" className="rounded-lg bg-blue-500 text-white px-6 py-2 hover:bg-blue-700 transition">
            Hire Me_
          </a>
          <a href="../Resume.pdf" className="rounded-lg bg-blue-500 text-white px-6 py-2 hover:bg-blue-700 transition">
            Download_CV_
          </a>
        </div>
      </div>
    </>
  );
}
