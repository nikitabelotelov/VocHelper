import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Layout from "../../components/layout";

export default function FirstPost() {
  const [file, setFile] = useState<File>()
  return (
    <Layout>
      <Head>
        <title>Excel parser</title>
      </Head>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>Upload excel</h1>
      <div>
        <input type="file" onChange={(e: any) => {setFile(e.target.files)}}/>
      </div>
      {/* test */}
    </Layout>
  );
}
