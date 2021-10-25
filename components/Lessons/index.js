import React, { useEffect } from 'react';
import prism from 'prismjs';

export default function Lessons() {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return (
    <>
      <div id="lesson00" className="pt-20">
        <h3 className="text-2xl font-medium">เตรียมพร้อมก่อนลุย</h3>
        <p className="pt-5">สิ่งที่จำเป็นต้องมี</p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-texting">
              <span className="font-semibold">Node.js</span> เวอร์ชั่น 10.13
              หรือใหม่กว่า{' '}
              <a
                href="https://nodejs.org/en/"
                target="_blank"
                className="text-gray-400 hover:text-gray-700"
              >
                ดาวน์โหลดได้ที่นี่
              </a>
            </span>
          </li>
          <li>
            <span className="font-texting">Text Editor</span>
          </li>
        </ul>
        <p className="pt-5">ความรู้เบื้องต้นที่ควรมี</p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-texting">
              พื้นฐาน HTML, CSS, JavaScript เบื้องต้น
            </span>
          </li>
          <li>
            <span className="font-texting">พื้นฐาน React เบื้องต้น</span>
          </li>
        </ul>
      </div>
      <div id="lesson01" className="pt-20">
        <h3 className="text-2xl font-medium">สร้าง Next.js app</h3>
        <p className="pt-5">
          เปิด terminal ใน directory ที่ต้องการจะสร้าง Next.js app
          และพิมพ์คำสั่งตามด้านล่าง โดยจะใช้ผ่าน <code>npx</code> หากต้องการใช้{' '}
          <code>yarn</code>{' '}
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            className="text-gray-400 hover:text-gray-700"
          >
            อ่านเพิ่มเติมที่นี่
          </a>
        </p>
        <pre>
          <code className="language-shell">
            npx create-next-app next-tutorial
          </code>
        </pre>
        <p className="pt-5">
          จะได้ directory ที่มีชื่อว่า <code>next-tutorial</code>{' '}
          ให้ทำการเปลี่ยน path ไปที่ directory ดังกล่าวโดยพิมพ์คำสั่งตามด้านล่าง
        </p>
        <pre>
          <code className="language-shell">cd next-tutorial</code>
        </pre>
        <p className="pt-5">
          เมื่อเข้ามายัง directory ที่มีชื่อว่า <code>next-tutorial</code>{' '}
          และพิมพ์คำสั่งตามด้านล่างเพื่อทำงาน Next.js App ที่เราได้สร้างขึ้นมา
        </p>
        <pre>
          <code className="language-shell">npm run dev</code>
        </pre>
        <p className="pt-5">
          หากทุกอย่างเรียบร้อย เมื่อไปยัง{' '}
          <a
            href="http://localhost:3000/"
            target="_blank"
            className="text-gray-400 hover:text-gray-700"
          >
            http://localhost:3000/
          </a>{' '}
          บน web browser จะได้หน้าเว็บดังภาพด้านล่าง
        </p>
        <img
          src="/lessons/lesson01_01.png"
          className="mx-auto mt-3 border"
          alt="หน้า next-tutorial เริ่มต้น"
        />
        <p className="pt-5">
          โครงสร้างไฟล์ใน <code>next-tutorial</code> จะได้ดังภาพด้านล่าง
        </p>
        <img
          src="/lessons/lesson01_02.png"
          className="mx-auto mt-3"
          style={{ maxWidth: '220px' }}
          alt="โครงสร้าง next-tutorial"
        />
      </div>
      <div id="lesson02" className="pt-20">
        <h3 className="text-2xl font-medium">แก้ไขหน้า Home</h3>
        <p className="pt-5">
          ในไฟล์ <code>/pages/index.js </code> ส่วนที่ return ของ function
          คือส่วนที่จะนำไปแสดงผล ลักษณะการเขียนคล้ายกับภาษา HTML
          แต่มีข้อแตกต่างตรง attribute ของ element บางตัว
          จะใช้ชื่อที่ต่างออกไปบ้าง เช่น class จะใช้เป็น className เป็นต้น
        </p>
        <pre>
          <code className="language-js">
            {`import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        {/*ส่วน head*/}
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*ส่วน body*/}
      <h1>Hello World!</h1>
      <p>This is homepage. You can edit me at <code>/pages/index.js</code></p>
    </>
  );
}`}
          </code>
        </pre>
        <p className="pt-5">
          หากนำโค้ดข้างต้นไปแทนที่โค้ดเดิมในไฟล์ <code>/pages/index.js</code>{' '}
          จะได้หน้าเว็บตามรูปด้านล่าง ทั้งนี้สามารถเขียนโค้ดเพิ่มเติมได้ตามสะดวก
        </p>
        <img
          src="/lessons/lesson02_01.png"
          className="mx-auto mt-3 border"
          alt="next-tutorial home"
        />
      </div>
      <div id="lesson03" className="pt-20">
        <h3 className="text-2xl font-medium">แทรกไฟล์ static</h3>
        <p className="pt-5">
          ไฟล์ static เช่น รูปภาพ เสียง เป็นต้น ให้นำไปไว้ใน{' '}
          <code>/public</code> และสามารถ reference ไฟล์นั้นที่ path{' '}
          <code>/</code> ได้เลย ตัวอย่างเช่น มีไฟล์ <code>logo.svg</code> อยู่ใน{' '}
          <code>/public</code> สามารถแสดงภาพนั้นได้ตามโค้ดด้านล่าง
        </p>
        <pre className="font-uimono">
          <code className="language-js">{`<img src="/logo.svg" />`}</code>
        </pre>
        <p className="pt-5">
          สามารถสร้าง subfolder ใน <code>/public</code> เพื่อจัดระเบียบไฟล์
          และทำการ reference ไฟล์นั้นที่ path <code>/folderName/</code>{' '}
          ได้เช่นกัน
        </p>
      </div>
      <div id="lesson04" className="pt-20">
        <h3 className="text-2xl font-medium">หน้าและการทำ Routing</h3>
        <p className="mt-5">
          สร้างไฟล์ใหม่ใน <code>/pages</code> ตั้งชื่อไฟล์ว่า{' '}
          <code>about.js</code> และนำโค้ดด้านล่างไปวาง
        </p>
        <pre>
          <code className="language-js">
            {`import Head from 'next/head';
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
      <p>This is About page. You can edit me at <code>/pages/about.js</code></p>
    </>
  );
}`}
          </code>
        </pre>
        <p className="mt-5">
          เมื่อไปที่{' '}
          <a
            href="http://localhost:3000/about"
            target="_blank"
            className="text-gray-400 hover:text-gray-700"
          >
            http://localhost:3000/about
          </a>{' '}
          จะได้หน้าเว็บตามรูปด้านล่าง
        </p>
        <img
          src="/lessons/lesson04_01.png"
          className="mx-auto mt-3 border"
          alt="next-tutorial about"
        />
        <p className="mt-5">
          ขั้นตอนในการทำ Routing ระหว่าง Page เริ่มต้นด้วยการ{' '}
          <code>import Link</code> ไว้ในหน้าที่ต้องการใส่ Link เชื่อมไปหน้าอื่น
        </p>
        <pre>
          <code className="language-js">{`import Link from 'next/link';`}</code>
        </pre>
        <p>
          และใช้ <code>{'<Link href="/">...</Link>'}</code>{' '}
          ไปวางครอบส่วนที่ต้องการเชื่อมไปยังหน้าอื่น และใส่ path ของหน้านั้น
          ตัวอย่างสร้าง Link ไปยังหน้า About
        </p>
        <pre>
          <code className="language-js">
            {'<Link href="/about"><a>Go to About</a></Link>'}
          </code>
        </pre>
        <p className="mt-5">
          ตัวอย่างโค้ดใน <code>/pages/index.js</code> ที่มีปุ่ม Link จากหน้า
          Home ไปยังหน้า About
        </p>
        <pre>
          <code className="language-js">
            {`import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
      <p>This is homepage. You can edit me at <code>/pages/index.js</code></p>
      <Link href="/about"><a>Go to About</a></Link>
    </>
  );
}`}
          </code>
        </pre>
      </div>
      <div id="lesson05" className="pt-20">
        <h3 className="text-2xl font-medium">เพิ่ม Stylesheet</h3>
        <p className="mt-5">
          นำไฟล์ stylesheet ไปไว้ที่ <code>/styles</code> และ{' '}
          <code>import stylesheet</code> ที่ไฟล์ <code>/pages/_app.js</code>{' '}
          ตัวอย่างโค้ดใน <code>/pages/_app.js</code>
        </p>
        <pre>
          <code className="language-js">
            {`import '../styles/globals.css';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
`}
          </code>
        </pre>
      </div>
      <div id="lesson06" className="pt-20">
        <h3 className="text-2xl font-medium">Deploy บน Vercel</h3>
        <p className="mt-5">
          หลังจากสร้าง Next.js ของเราและทำการแก้ไขเสร็จเรียบร้อยแล้ว ให้สร้าง
          Git Repository ขั้นมาสำหรับแอพที่ได้สร้างไว้ และ push
          โค้ดทั้งหมดขั้นไป
        </p>
        <p className="mt-5">
          ไปที่{' '}
          <a
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            className="text-gray-400 hover:text-gray-700"
          >
            Vercel
          </a>{' '}
          และลงชื่อเข้าใช้งาน ไปที่หน้า Overview บน Vercel และกดปุ่ม{' '}
          <i>New Project</i>
        </p>
        <img
          src="/lessons/lesson06_01.png"
          className="mx-auto mt-3 border"
          alt="deploy-01"
        />
        <p className="mt-5">
          เลือก Git Provider ที่ได้ทำการสร้าง repo เอาไว้
          หากเป็นการเชื่อมบัญชีครั้งแรกจะมีการขอสิทธิ์การเข้าถึงของ Git Provider
          นั้นๆ
        </p>
        <img
          src="/lessons/lesson06_02.png"
          className="mx-auto mt-3 border"
          alt="deploy-02"
        />
        <p className="mt-5">กด import repo ที่ได้ทำการสร้างไว้ในขั้นตอนแรก</p>
        <img
          src="/lessons/lesson06_03.png"
          className="mx-auto mt-3 border"
          alt="deploy-03"
        />
        <p className="mt-5">
          จะมีหน้าให้ขึ้น Create a Team กด Skip ข้ามไป และไปที่ส่วน Configure
          Project ตั้งชื่อ project ใน Project Name (ชื่อที่ตั้งจะถูกนำไปเป็นชื่อ
          domain ด้วย สามารถกลับมาเปลี่ยนใหม่ได้) และเลือก "Next.js" ใน
          Framework Preset จากนั้นกด Deploy ได้เลย
        </p>
        <img
          src="/lessons/lesson06_04.png"
          className="mx-auto mt-3 border"
          alt="deploy-04"
        />
        <p className="mt-5">
          รอสักครู่ หากทุกอย่างเรียบร้อยและขึ้นหน้าดังภาพด้านล่าง ถือว่า deploy สำเร็จ
        </p>
        <img
          src="/lessons/lesson06_05.png"
          className="mx-auto mt-3 border"
          alt="deploy-05"
        />
      </div>
    </>
  );
}
