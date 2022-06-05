import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import UploadModal from "../components/UploadModal";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram Clone</title>
      </Head>
      <Header/>
      <Feed/>
      <UploadModal/>
    </div>
  )
}