import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/message.css";
export default function Message() {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [isProcessing,setIsProcessing]=useState(false);
  const history = useHistory();
  console.log(isProcessing);
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const res = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataRes = await res.json();
   
    if (dataRes.status === 201) {
      setIsProcessing(false);
      
      history.push("/");
    } else {
      console.log(dataRes);
    }
  };
  return (
    <div className="message__container">
      <div className="message__content">
        <div className="message__illustrator">
          <svg
            width="2953"
            height="1388"
            viewBox="0 0 2953 1388"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="chatIllus 1">
              <path
                id="Vector"
                d="M1066.32 456.353H0V846.645H40.3923V948.723L131.944 846.645H1066.32V456.353Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_2"
                d="M1036.7 494.361H29.6201V806.594H1036.7V494.361Z"
                fill="white"
              />
              <path
                id="Vector_3"
                d="M603.568 588.521H118.683V604.928H603.568V588.521Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_4"
                d="M963.797 645.276H118.683V661.683H963.797V645.276Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_5"
                d="M962.969 702.031H118.683V718.438H962.969V702.031Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_6"
                d="M1791.22 1337.94C1791.22 1337.94 1796.3 1219.19 1900.5 1232.99Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_7"
                d="M1761.78 1224.94C1790.58 1224.94 1813.93 1198.9 1813.93 1166.79C1813.93 1134.68 1790.58 1108.64 1761.78 1108.64C1732.97 1108.64 1709.63 1134.68 1709.63 1166.79C1709.63 1198.9 1732.97 1224.94 1761.78 1224.94Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_8"
                d="M1768.01 1264.7H1753.29V1379.6H1768.01V1264.7Z"
                fill="#F0F0F0"
              />
              <path
                id="Vector_9"
                d="M2279.67 1156.15C2512.42 1156.15 2701.11 945.778 2701.11 686.266C2701.11 426.754 2512.42 216.378 2279.67 216.378C2046.91 216.378 1858.22 426.754 1858.22 686.266C1858.22 945.778 2046.91 1156.15 2279.67 1156.15Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_10"
                d="M2014.34 723.986C2024.81 710.015 2037.9 698.776 2052.69 691.065C2067.48 683.353 2083.6 679.356 2099.93 679.356C2116.26 679.356 2132.39 683.353 2147.18 691.065C2161.97 698.776 2175.06 710.015 2185.52 723.986C2203.26 705.111 2215.57 680.798 2220.91 654.12C2226.25 627.443 2224.37 599.599 2215.52 574.11C2206.67 548.621 2191.23 526.631 2171.17 510.922C2151.11 495.213 2127.32 486.49 2102.81 485.856C2078.3 485.222 2054.17 492.705 2033.48 507.359C2012.78 522.014 1996.45 543.181 1986.54 568.185C1976.64 593.189 1973.61 620.906 1977.83 647.831C1982.05 674.756 1993.34 699.68 2010.27 719.451C2011.6 720.998 2012.95 722.509 2014.34 723.986Z"
                fill="white"
              />
              <path
                id="Vector_11"
                d="M2349.02 723.986C2359.48 710.015 2372.57 698.777 2387.36 691.065C2402.15 683.353 2418.28 679.356 2434.61 679.356C2450.94 679.356 2467.06 683.353 2481.85 691.065C2496.64 698.777 2509.73 710.015 2520.2 723.986C2537.93 705.111 2550.25 680.798 2555.59 654.12C2560.93 627.443 2559.05 599.599 2550.2 574.11C2541.34 548.621 2525.91 526.631 2505.85 510.922C2485.79 495.213 2461.99 486.49 2437.49 485.856C2412.98 485.222 2388.85 492.705 2368.15 507.359C2347.46 522.014 2331.13 543.181 2321.22 568.185C2311.32 593.189 2308.28 620.906 2312.51 647.831C2316.73 674.756 2328.02 699.68 2344.95 719.451C2346.27 720.998 2347.63 722.509 2349.02 723.986Z"
                fill="white"
              />
              <path
                id="eye1"
                d="M2057.65 624.501C2081.2 624.501 2100.29 603.217 2100.29 576.961C2100.29 550.705 2081.2 529.421 2057.65 529.421C2034.1 529.421 2015.01 550.705 2015.01 576.961C2015.01 603.217 2034.1 624.501 2057.65 624.501Z"
                fill="#3F3D56"
              />
              <path
                id="eye2"
                d="M2392.31 624.501C2415.86 624.501 2434.95 603.217 2434.95 576.961C2434.95 550.705 2415.86 529.421 2392.31 529.421C2368.76 529.421 2349.67 550.705 2349.67 576.961C2349.67 603.217 2368.76 624.501 2392.31 624.501Z"
                fill="#3F3D56"
              />
              <path
                id="dimple1"
                d="M1975.98 859.019C2003.36 859.019 2025.56 834.269 2025.56 803.738C2025.56 773.207 2003.36 748.457 1975.98 748.457C1948.59 748.457 1926.39 773.207 1926.39 803.738C1926.39 834.269 1948.59 859.019 1975.98 859.019Z"
                fill="#6C63FF"
              />
              <path
                id="dimple2"
                d="M2546.17 859.019C2573.55 859.019 2595.75 834.269 2595.75 803.738C2595.75 773.207 2573.55 748.457 2546.17 748.457C2518.79 748.457 2496.59 773.207 2496.59 803.738C2496.59 834.269 2518.79 859.019 2546.17 859.019Z"
                fill="#6C63FF"
              />
              <g id="mouth">
                <path
                  id="Vector_12"
                  d="M2365.93 964.627L2183.13 1008.97L2286.57 1049.97L2365.93 964.627Z"
                  fill="#6C63FF"
                />
              </g>
              <path
                id="Vector_13"
                d="M2452.15 1384.19L2409.93 1344.68L2410.91 1384.19H2397.8L2396.75 1342.41L2339.75 1384.19H2315.89L2396.33 1325.24L2393.21 1201.46L2390.88 1107.98L2403.96 1107.57L2406.32 1201.46L2409.43 1325.13L2472.53 1384.19H2452.15Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_14"
                d="M2253.8 1384.19L2211.58 1344.68L2212.57 1384.19H2199.49L2198.44 1342.41L2141.44 1384.19H2117.58L2197.98 1325.24L2194.87 1201.46L2192.54 1107.98L2205.65 1107.57L2208.01 1201.46L2211.09 1325.13L2274.19 1384.19H2253.8Z"
                fill="#3F3D56"
              />
              <path
                id="upperpart"
                d="M2285.86 181.828C2274.3 181.828 2264.1 191.843 2257.28 207.226C2251.27 184.094 2238.64 168.008 2223.89 168.008C2222.88 168.119 2221.89 168.305 2220.91 168.565C2215.24 143.868 2202.06 126.547 2186.7 126.547C2166.16 126.547 2149.51 157.485 2149.51 195.648C2149.51 233.811 2166.16 264.749 2186.7 264.749C2187.7 264.638 2188.7 264.452 2189.68 264.192C2195.35 288.889 2208.52 306.21 2223.89 306.21C2235.45 306.21 2245.65 296.195 2252.47 280.812C2258.48 303.943 2271.11 320.03 2285.86 320.03C2306.4 320.03 2323.05 289.092 2323.05 250.929C2323.05 212.766 2306.4 181.828 2285.86 181.828Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_15"
                d="M1882.31 700.887L1650.15 658.902C1638.45 656.786 1626.54 654.666 1614.8 656.508C1603.07 658.35 1591.32 664.792 1585.33 676.199C1582.46 681.681 1581.07 687.973 1581.32 694.317C1581.58 700.662 1583.47 706.789 1586.77 711.963C1590.07 717.136 1594.65 721.136 1599.94 723.481C1605.24 725.827 1611.02 726.417 1616.61 725.183C1603.94 724.724 1590.62 724.421 1579.37 730.951C1568.13 737.481 1560.17 753.343 1565.65 766.09C1567.29 769.608 1569.52 772.748 1572.21 775.346C1580.67 783.804 1591.11 789.417 1602.31 791.535C1613.52 793.654 1625.03 792.192 1635.52 787.318C1626.97 800.984 1610.02 803.013 1595.34 806.177C1580.67 809.342 1563.71 818.594 1563.17 835.243C1562.56 853.95 1582.52 863.893 1598.96 867.701C1686.74 887.838 1777.85 879.559 1861.55 843.839C1870.95 840.23 1879.86 835.162 1887.99 828.783C1897.12 821.061 1904.05 810.572 1907.96 798.571C1911.87 786.57 1912.6 773.567 1910.06 761.116C1907.51 748.666 1901.81 737.297 1893.62 728.37C1885.43 719.443 1875.1 713.336 1863.88 710.781"
                fill="#3F3D56"
              />
              <path
                id="Vector_16"
                d="M2884.4 913.055C2846.08 822.732 2785.39 746.515 2709.49 693.399C2701.25 687.186 2692.26 682.298 2682.8 678.881C2671.78 675.394 2660.1 675.52 2649.14 679.246C2638.19 682.971 2628.43 690.137 2621.03 699.887C2613.64 709.636 2608.92 721.555 2607.44 734.217C2605.96 746.879 2607.79 759.748 2612.7 771.284L2594.53 760.806C2631.01 838.179 2667.48 915.552 2703.96 992.925C2709.47 1004.62 2715.11 1016.51 2723.49 1025.86C2731.86 1035.22 2743.54 1041.81 2755.31 1040.29C2759.98 1039.7 2764.46 1037.88 2768.37 1034.96C2772.28 1032.05 2775.51 1028.13 2777.78 1023.54C2780.05 1018.95 2781.3 1013.81 2781.42 1008.57C2781.54 1003.33 2780.54 998.132 2778.48 993.414C2783.6 1001.46 2790.34 1008.06 2798.14 1012.7C2809.58 1018.79 2825.74 1016.36 2831.58 1003.81C2833.12 1000.23 2834.03 996.359 2834.28 992.401C2835.25 979.777 2833 967.103 2827.79 955.845C2822.57 944.587 2814.61 935.205 2804.81 928.786C2819.74 928.189 2831.39 942.083 2842.47 953.255C2853.56 964.427 2870.38 973.979 2882.65 964.459C2896.42 953.762 2891.55 929.993 2884.4 913.055Z"
                fill="#3F3D56"
              />
              <path
                id="chatbox"
                d="M190.586 0H1729.58V563.298H1671.29V710.617L1539.16 563.298H190.586V0Z"
                fill="#CACACA"
              />
              <path
                id="Vector_17"
                d="M1686.83 54.8536H233.336V505.492H1686.83V54.8536Z"
                fill="white"
              />
              <path
                id="Vector_18"
                d="M1050.04 186.42H350.22V210.099H1050.04V186.42Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_19"
                d="M1569.95 268.333H350.22V292.012H1569.95V268.333Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_20"
                d="M1568.76 350.246H350.22V373.925H1568.76V350.246Z"
                fill="#6C63FF"
              />
              <path
                id="Vector_21"
                d="M2949.58 1388H1647.27C1646.36 1388 1645.49 1387.6 1644.85 1386.88C1644.21 1386.17 1643.85 1385.2 1643.85 1384.19C1643.85 1383.18 1644.21 1382.21 1644.85 1381.49C1645.49 1380.78 1646.36 1380.38 1647.27 1380.38H2949.58C2950.49 1380.38 2951.36 1380.78 2952 1381.49C2952.64 1382.21 2953 1383.18 2953 1384.19C2953 1385.2 2952.64 1386.17 2952 1386.88C2951.36 1387.6 2950.49 1388 2949.58 1388Z"
                fill="#CACACA"
              />
              <g id="nose">
                <path
                  id="Vector_22"
                  d="M2247.3 712.285L2265.85 876.198L2312.27 790.704L2247.3 712.285Z"
                  fill="#6C63FF"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="message__form">
          <form onSubmit={submitHandler} >
            <h3>
              <b>Let's Talk</b>
            </h3>
            <fieldset>
              <label>Name</label>
              <input
                className="message__input"
                type="text"
                value={data.name}
                onChange={inputHandler}
                name="name"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset>
              <label>Email</label>
              <input
                className="message__input"
                type="email"
                value={data.email}
                onChange={inputHandler}
                name="email"
                placeholder="Your email"
              />
            </fieldset>
            <fieldset className="message__textfield">
              <label>Message</label>
              <textarea
                className="message__input"
                type="text"
                value={data.message}
                onChange={inputHandler}
                name="message"
                placeholder="enter your message"
              />
            </fieldset>
            <button type="submit"   disabled={isProcessing} >{isProcessing?"processing":"submit"}</button>
          </form>
        </div>
      </div>
    </div>
  );
}
