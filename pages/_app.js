import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* embedding css here because of a weird Next.js bug */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css"
        />
        <style>
          {`
              *,
              *::before,
              *::after {
                box-sizing: border-box;
                margin: 0px;
                padding: 0px;
              }
              :root{
                --main-dark: #17151d;
                --light-dark: #241f2a;
                --blue: #2c64bc;
              }
              input,
              button,
              select {
                font: inherit;
              }
              a {
                text-decoration : none;
                color : inherit;
              }
              input[type="search"] {
                border: none;
                outline: none;
                background-color: inherit;
                padding-left: 1rem;
                width: 100%;
                color: #eee;
              }
              input[type="search"]::placeholder {
                color: #eee;
              }

              .container {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                display: grid;
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: minmax(100vh, auto);
                align-items: flex-start;
                padding: 1rem;
                background-color: var(--main-dark);
                color: #fff;
                
                margin: "0px";
              }
              .box {
                background-color: var(--light-dark);
                border-radius: 1rem;
                padding: 1rem 0.5rem;
                color: #fff;
              }
              .primary-box {
                background-color: var(--blue);
                color: #fff;
                padding: 1rem 0.5rem;
                border-radius: 1rem;
              }
              .info {
                padding: 1rem;
              }
              .panel {
                margin-top: 2rem;
              }
              .container-main {
                margin: 0px 1rem;
                display: flex;
                flex-wrap: wrap;
                grid-column: 2 / span 15;
              }
              .main-article {
                flex-basis: 70%;
                flex-shrink: 1;
                flex-grow: 1;
                margin: 0 1rem;
              }
              .main-aside {
                flex-basis: 20%;
                flex-shrink: 0;
                flex-grow: 1;
              }
              @media only screen and (max-width: 800px) {
                .main-aside {
                  display: none;
                }
                .main-aside .box {
                  width: 100%;
                }
              }
              .search {
                display: flex;
                align-items: center;
                border: 1px solid rgba(255, 255, 255, 0.349);
                padding: 0.5rem;
                border-radius: 5px;
              }
              .box-split {
                margin: 1rem 0px;
              }
              .burger {
                text-align: center;
                cursor: pointer;
              }

              .main-article .header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
              }
              .main-article .header .search {
                flex-grow: 1;
              }
              .window {
                overflow-y : scroll;
                height : 40vh;
              }
              .box-crypto{
                display : flex;
                justify-content : space-between;
                align-items : center;
                padding : 1rem;
              }
              .title{
                text-transform : uppercase;
                font-weight : bold;
              }
              .grow-crypto{
                flex-grow : 1;
                max-wdith : 100%;
                max-height : 20vh;
              }
              .dateRange {
                background: var(--light-dark); 
                cursor: pointer;
                 padding: 5px 10px; 
                 border: 1px solid #fff;
                 width: 100%;
                 color : #fff;
              }
            `}
        </style>
        <title>Crypto App</title>
        <script src="https://cdn.plot.ly/plotly-latest.min.js" defer></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
