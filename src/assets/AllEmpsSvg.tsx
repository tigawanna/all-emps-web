import React from "react";

interface AllEmpsSvgProps {}

export const AllEmpsSvg: React.FC<
  AllEmpsSvgProps
> = ({}) => {
  return (
    <div>
      <svg
        width="148"
        height="39"
        viewBox="0 0 148 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.92045 30.4403C6.53788 30.4403 5.29261 30.1941 4.18466 29.7017C3.08617 29.1998 2.21496 28.4612 1.57102 27.4858C0.936553 26.5104 0.619318 25.3078 0.619318 23.8778C0.619318 22.6468 0.846591 21.6288 1.30114 20.8239C1.75568 20.0189 2.37595 19.375 3.16193 18.892C3.94792 18.4091 4.83333 18.0445 5.81818 17.7983C6.8125 17.5426 7.83996 17.358 8.90057 17.2443C10.179 17.1117 11.2159 16.9934 12.0114 16.8892C12.8068 16.7756 13.3845 16.6051 13.7443 16.3778C14.1136 16.1411 14.2983 15.7765 14.2983 15.2841V15.1989C14.2983 14.1288 13.9811 13.3002 13.3466 12.7131C12.7121 12.1259 11.7983 11.8324 10.6051 11.8324C9.34564 11.8324 8.34659 12.107 7.60795 12.6562C6.87879 13.2055 6.38636 13.8542 6.13068 14.6023L1.32955 13.9205C1.70833 12.5947 2.33333 11.4867 3.20455 10.5966C4.07576 9.69697 5.1411 9.02462 6.40057 8.57955C7.66004 8.125 9.05208 7.89773 10.5767 7.89773C11.6278 7.89773 12.6742 8.02083 13.7159 8.26705C14.7576 8.51326 15.7093 8.92045 16.571 9.48864C17.4328 10.0473 18.1241 10.8097 18.6449 11.7756C19.1752 12.7415 19.4403 13.9489 19.4403 15.3977V30H14.4972V27.0028H14.3267C14.0142 27.6089 13.5739 28.1771 13.0057 28.7074C12.447 29.2282 11.7415 29.6496 10.8892 29.9716C10.0464 30.2841 9.05682 30.4403 7.92045 30.4403ZM9.25568 26.6619C10.2879 26.6619 11.1828 26.4583 11.9403 26.0511C12.6979 25.6345 13.2803 25.0852 13.6875 24.4034C14.1042 23.7216 14.3125 22.9782 14.3125 22.1733V19.6023C14.1515 19.7348 13.8769 19.858 13.4886 19.9716C13.1098 20.0852 12.6837 20.1847 12.2102 20.2699C11.7367 20.3551 11.268 20.4309 10.804 20.4972C10.34 20.5634 9.9375 20.6203 9.59659 20.6676C8.82955 20.7718 8.14299 20.9422 7.53693 21.179C6.93087 21.4157 6.45265 21.7472 6.10227 22.1733C5.75189 22.59 5.5767 23.1297 5.5767 23.7926C5.5767 24.7396 5.92235 25.4545 6.61364 25.9375C7.30492 26.4205 8.18561 26.6619 9.25568 26.6619ZM29.7528 0.90909V30H24.6108V0.90909H29.7528ZM40.1825 0.90909V30H35.0405V0.90909H40.1825ZM55.1293 30.4261C52.9418 30.4261 51.0526 29.9716 49.4616 29.0625C47.8802 28.1439 46.6634 26.8466 45.8111 25.1705C44.9588 23.4848 44.5327 21.5009 44.5327 19.2188C44.5327 16.9744 44.9588 15.0047 45.8111 13.3097C46.6728 11.6051 47.8755 10.2794 49.419 9.33239C50.9626 8.37595 52.776 7.89773 54.8594 7.89773C56.2041 7.89773 57.473 8.11553 58.6662 8.55114C59.8688 8.97727 60.9295 9.64015 61.848 10.5398C62.776 11.4394 63.5052 12.5852 64.0355 13.9773C64.5658 15.3598 64.831 17.0076 64.831 18.9205V20.4972H46.9474V17.0312H59.902C59.8925 16.0464 59.6795 15.1705 59.2628 14.4034C58.8461 13.6269 58.2637 13.0161 57.5156 12.571C56.777 12.1259 55.9152 11.9034 54.9304 11.9034C53.8793 11.9034 52.956 12.1591 52.1605 12.6705C51.3651 13.1723 50.7448 13.8352 50.2997 14.6591C49.8641 15.4735 49.6416 16.3684 49.6321 17.3438V20.3693C49.6321 21.6383 49.8641 22.7273 50.3281 23.6364C50.7921 24.536 51.4408 25.2273 52.2741 25.7102C53.1075 26.1837 54.0829 26.4205 55.2003 26.4205C55.9484 26.4205 56.6255 26.3163 57.2315 26.108C57.8376 25.8902 58.3632 25.5729 58.8082 25.1562C59.2533 24.7396 59.5895 24.2235 59.8168 23.608L64.6179 24.1477C64.3149 25.4167 63.7372 26.5246 62.8849 27.4716C62.0421 28.4091 60.9626 29.1383 59.6463 29.6591C58.33 30.1705 56.8243 30.4261 55.1293 30.4261ZM69.1811 30V8.18182H74.0959V11.8892H74.3516C74.8061 10.6392 75.5589 9.66383 76.6101 8.96307C77.6612 8.25284 78.916 7.89773 80.3743 7.89773C81.8516 7.89773 83.0968 8.25758 84.1101 8.97727C85.1328 9.6875 85.8525 10.6581 86.2692 11.8892H86.4964C86.9794 10.6771 87.7938 9.71117 88.9396 8.99148C90.0949 8.26231 91.4633 7.89773 93.0447 7.89773C95.0523 7.89773 96.6906 8.5322 97.9595 9.80114C99.2285 11.0701 99.8629 12.9214 99.8629 15.3551V30H94.7067V16.1506C94.7067 14.7964 94.3468 13.8068 93.6271 13.1818C92.9074 12.5473 92.0268 12.2301 90.9851 12.2301C89.7446 12.2301 88.7739 12.6184 88.0732 13.3949C87.3819 14.1619 87.0362 15.161 87.0362 16.392V30H81.9936V15.9375C81.9936 14.8106 81.6527 13.911 80.9709 13.2386C80.2985 12.5663 79.4179 12.2301 78.3288 12.2301C77.5902 12.2301 76.9179 12.4195 76.3118 12.7983C75.7057 13.1676 75.2228 13.6932 74.8629 14.375C74.5031 15.0473 74.3232 15.8333 74.3232 16.733V30H69.1811ZM105.08 38.1818V8.18182H110.136V11.7898H110.435C110.7 11.2595 111.074 10.696 111.557 10.0994C112.04 9.49337 112.693 8.97727 113.517 8.55114C114.341 8.11553 115.392 7.89773 116.67 7.89773C118.356 7.89773 119.876 8.3286 121.23 9.19034C122.594 10.0426 123.673 11.3068 124.469 12.983C125.274 14.6496 125.676 16.6951 125.676 19.1193C125.676 21.5152 125.283 23.5511 124.497 25.2273C123.711 26.9034 122.641 28.1818 121.287 29.0625C119.933 29.9432 118.399 30.3835 116.685 30.3835C115.435 30.3835 114.398 30.1752 113.574 29.7585C112.75 29.3419 112.087 28.84 111.585 28.2528C111.093 27.6562 110.709 27.0928 110.435 26.5625H110.222V38.1818H105.08ZM110.122 19.0909C110.122 20.5019 110.321 21.7377 110.719 22.7983C111.126 23.8589 111.708 24.6875 112.466 25.2841C113.233 25.8712 114.161 26.1648 115.25 26.1648C116.386 26.1648 117.338 25.8617 118.105 25.2557C118.872 24.6402 119.45 23.8021 119.838 22.7415C120.236 21.6714 120.435 20.4545 120.435 19.0909C120.435 17.7367 120.241 16.5341 119.852 15.483C119.464 14.4318 118.886 13.608 118.119 13.0114C117.352 12.4148 116.396 12.1165 115.25 12.1165C114.152 12.1165 113.219 12.4053 112.452 12.983C111.685 13.5606 111.102 14.3703 110.705 15.4119C110.316 16.4536 110.122 17.6799 110.122 19.0909ZM147.324 13.9489L142.636 14.4602C142.504 13.9867 142.272 13.5417 141.94 13.125C141.618 12.7083 141.183 12.3722 140.634 12.1165C140.084 11.8608 139.412 11.733 138.616 11.733C137.546 11.733 136.647 11.965 135.918 12.429C135.198 12.893 134.843 13.4943 134.852 14.233C134.843 14.8674 135.075 15.3835 135.548 15.7812C136.031 16.179 136.827 16.5057 137.935 16.7614L141.656 17.5568C143.721 18.0019 145.255 18.7074 146.259 19.6733C147.272 20.6392 147.783 21.9034 147.793 23.4659C147.783 24.839 147.381 26.0511 146.585 27.1023C145.799 28.1439 144.705 28.9583 143.304 29.5455C141.902 30.1326 140.293 30.4261 138.474 30.4261C135.804 30.4261 133.654 29.8674 132.026 28.75C130.397 27.6231 129.426 26.0559 129.114 24.0483L134.128 23.5653C134.355 24.5502 134.838 25.2936 135.577 25.7955C136.315 26.2973 137.277 26.5483 138.46 26.5483C139.682 26.5483 140.662 26.2973 141.401 25.7955C142.149 25.2936 142.523 24.6733 142.523 23.9347C142.523 23.3097 142.281 22.7936 141.798 22.3864C141.325 21.9792 140.586 21.6667 139.582 21.4489L135.861 20.6676C133.768 20.232 132.22 19.4981 131.216 18.4659C130.212 17.4242 129.715 16.108 129.724 14.517C129.715 13.1723 130.08 12.0076 130.818 11.0227C131.566 10.0284 132.603 9.26136 133.929 8.72159C135.264 8.17235 136.803 7.89773 138.545 7.89773C141.102 7.89773 143.115 8.44223 144.582 9.53125C146.06 10.6203 146.973 12.0928 147.324 13.9489Z"
        //   fill="#c78002"
          id="allemps-1"
        //   fillOpacity="0.01"
        //   stroke="#C780D2"
        //   strokeWidth="1"
        />
        <path
          d="M4.18466 29.7017L3.76906 30.6113L3.77852 30.6155L4.18466 29.7017ZM1.57102 27.4858L0.732746 28.0311L0.736488 28.0368L1.57102 27.4858ZM1.30114 20.8239L0.430383 20.3321L0.430383 20.3321L1.30114 20.8239ZM3.16193 18.892L2.63841 18.04L2.63841 18.04L3.16193 18.892ZM5.81818 17.7983L6.06072 18.7685L6.06722 18.7668L5.81818 17.7983ZM8.90057 17.2443L8.79742 16.2496L8.79404 16.25L8.90057 17.2443ZM12.0114 16.8892L12.1412 17.8808L12.1528 17.8792L12.0114 16.8892ZM13.7443 16.3778L14.2783 17.2233L14.284 17.2197L13.7443 16.3778ZM13.3466 12.7131L14.0258 11.9791L14.0258 11.9791L13.3466 12.7131ZM7.60795 12.6562L7.01124 11.8538L7.0063 11.8575L7.60795 12.6562ZM6.13068 14.6023L5.99008 15.5923L6.80933 15.7087L7.07694 14.9257L6.13068 14.6023ZM1.32955 13.9205L0.368022 13.6457L0.0527543 14.7492L1.18894 14.9105L1.32955 13.9205ZM3.20455 10.5966L3.91922 11.2961L3.9229 11.2923L3.20455 10.5966ZM6.40057 8.57955L6.73377 9.52243L6.74004 9.52016L6.40057 8.57955ZM16.571 9.48864L16.0205 10.3235L16.027 10.3277L16.571 9.48864ZM18.6449 11.7756L17.7647 12.2502L17.7683 12.2568L18.6449 11.7756ZM19.4403 30V31H20.4403V30H19.4403ZM14.4972 30H13.4972V31H14.4972V30ZM14.4972 27.0028H15.4972V26.0028H14.4972V27.0028ZM14.3267 27.0028V26.0028H13.7172L13.4379 26.5446L14.3267 27.0028ZM13.0057 28.7074L13.6876 29.4389L13.688 29.4384L13.0057 28.7074ZM10.8892 29.9716L11.2369 30.9092L11.2426 30.9071L10.8892 29.9716ZM11.9403 26.0511L12.4138 26.932L12.4223 26.9274L11.9403 26.0511ZM13.6875 24.4034L12.8342 23.8819L12.829 23.8907L13.6875 24.4034ZM14.3125 19.6023H15.3125V17.4833L13.6768 18.8303L14.3125 19.6023ZM13.4886 19.9716L13.2077 19.0118L13.2013 19.0138L13.4886 19.9716ZM12.2102 20.2699L12.3874 21.2541L12.3874 21.2541L12.2102 20.2699ZM9.59659 20.6676L9.73116 21.6585L9.73416 21.6581L9.59659 20.6676ZM7.53693 21.179L7.17308 20.2475L7.17308 20.2475L7.53693 21.179ZM6.10227 22.1733L6.86768 22.8169L6.8747 22.8084L6.10227 22.1733ZM6.61364 25.9375L6.04093 26.7573L6.04093 26.7573L6.61364 25.9375ZM7.92045 29.4403C6.65822 29.4403 5.55413 29.216 4.5908 28.7879L3.77852 30.6155C5.03109 31.1722 6.41754 31.4403 7.92045 31.4403V29.4403ZM4.60023 28.7921C3.66627 28.3654 2.94265 27.7484 2.40556 26.9348L0.736488 28.0368C1.48727 29.174 2.50607 30.0342 3.76908 30.6113L4.60023 28.7921ZM2.40928 26.9405C1.90227 26.1611 1.61932 25.1587 1.61932 23.8778H-0.380682C-0.380682 25.4568 -0.0291649 26.8597 0.732765 28.0311L2.40928 26.9405ZM1.61932 23.8778C1.61932 22.7639 1.8256 21.9288 2.17189 21.3156L0.430383 20.3321C-0.132419 21.3288 -0.380682 22.5297 -0.380682 23.8778H1.61932ZM2.17189 21.3156C2.54327 20.6579 3.04419 20.1381 3.68546 19.7441L2.63841 18.04C1.70771 18.6119 0.968089 19.38 0.430383 20.3321L2.17189 21.3156ZM3.68546 19.7441C4.37609 19.3197 5.16514 18.9923 6.06072 18.7684L5.57565 16.8282C4.50153 17.0967 3.51974 17.4985 2.63841 18.04L3.68546 19.7441ZM6.06722 18.7668C7.01295 18.5236 7.9927 18.3473 9.0071 18.2386L8.79404 16.25C7.68723 16.3686 6.61205 16.5616 5.56914 16.8298L6.06722 18.7668ZM9.00372 18.239C10.2864 18.106 11.3332 17.9865 12.1412 17.8807L11.8815 15.8977C11.0986 16.0002 10.0715 16.1175 8.79742 16.2497L9.00372 18.239ZM12.1528 17.8792C12.9856 17.7602 13.7352 17.5663 14.2783 17.2233L13.2103 15.5324C13.0337 15.6439 12.628 15.791 11.8699 15.8993L12.1528 17.8792ZM14.284 17.2197C14.9793 16.774 15.2983 16.0679 15.2983 15.2841H13.2983C13.2983 15.4051 13.276 15.4586 13.2677 15.475C13.2619 15.4865 13.2506 15.5065 13.2047 15.536L14.284 17.2197ZM15.2983 15.2841V15.1989H13.2983V15.2841H15.2983ZM15.2983 15.1989C15.2983 13.9212 14.9117 12.7989 14.0258 11.9791L12.6674 13.447C13.0504 13.8015 13.2983 14.3363 13.2983 15.1989H15.2983ZM14.0258 11.9791C13.1461 11.1651 11.9535 10.8324 10.6051 10.8324V12.8324C11.6431 12.8324 12.2782 13.0868 12.6674 13.447L14.0258 11.9791ZM10.6051 10.8324C9.2085 10.8324 7.97583 11.1365 7.01125 11.8538L8.20466 13.4587C8.71735 13.0775 9.48278 12.8324 10.6051 12.8324V10.8324ZM7.0063 11.8575C6.14272 12.508 5.51441 13.3134 5.18442 14.2789L7.07694 14.9257C7.25832 14.395 7.61485 13.903 8.20961 13.455L7.0063 11.8575ZM6.27128 13.6122L1.47015 12.9304L1.18894 14.9105L5.99008 15.5923L6.27128 13.6122ZM2.29107 14.1952C2.62916 13.0119 3.17639 12.055 3.91921 11.2961L2.48988 9.89713C1.49028 10.9185 0.787511 12.1775 0.368022 13.6457L2.29107 14.1952ZM3.9229 11.2923C4.67945 10.511 5.61011 9.91948 6.73376 9.5224L6.06738 7.63669C4.67208 8.12976 3.47206 8.88289 2.48619 9.90092L3.9229 11.2923ZM6.74004 9.52016C7.87667 9.10995 9.15198 8.89773 10.5767 8.89773V6.89773C8.95219 6.89773 7.4434 7.14005 6.0611 7.63893L6.74004 9.52016ZM10.5767 8.89773C11.549 8.89773 12.5182 9.01151 13.4859 9.24023L13.9459 7.29386C12.8303 7.03016 11.7067 6.89773 10.5767 6.89773V8.89773ZM13.4859 9.24023C14.4177 9.46049 15.2603 9.82223 16.0206 10.3235L17.1215 8.65377C16.1583 8.01868 15.0974 7.56603 13.9459 7.29386L13.4859 9.24023ZM16.027 10.3277C16.7382 10.7888 17.3179 11.4216 17.7647 12.2502L19.5251 11.301C18.9302 10.1977 18.1273 9.30585 17.115 8.64956L16.027 10.3277ZM17.7683 12.2568C18.1961 13.036 18.4403 14.0659 18.4403 15.3977H20.4403C20.4403 13.8319 20.1543 12.4469 19.5215 11.2943L17.7683 12.2568ZM18.4403 15.3977V30H20.4403V15.3977H18.4403ZM19.4403 29H14.4972V31H19.4403V29ZM15.4972 30V27.0028H13.4972V30H15.4972ZM14.4972 26.0028H14.3267V28.0028H14.4972V26.0028ZM13.4379 26.5446C13.1849 27.0353 12.8191 27.5136 12.3234 27.9763L13.688 29.4384C14.3286 28.8406 14.8436 28.1825 15.2155 27.4611L13.4379 26.5446ZM12.3238 27.9759C11.8767 28.3927 11.2893 28.7514 10.5358 29.0361L11.2426 30.9071C12.1936 30.5478 13.0172 30.0638 13.6876 29.4389L12.3238 27.9759ZM10.5415 29.034C9.83505 29.2959 8.96816 29.4403 7.92045 29.4403V31.4403C9.14548 31.4403 10.2578 31.2723 11.2369 30.9092L10.5415 29.034ZM9.25568 27.6619C10.4202 27.6619 11.4842 27.4316 12.4138 26.932L11.4669 25.1703C10.8813 25.4851 10.1555 25.6619 9.25568 25.6619V27.6619ZM12.4223 26.9274C13.3212 26.4329 14.0398 25.7638 14.546 24.9161L12.829 23.8907C12.5208 24.4067 12.0746 24.836 11.4584 25.1749L12.4223 26.9274ZM14.5408 24.9249C15.0541 24.0848 15.3125 23.1608 15.3125 22.1733H13.3125C13.3125 22.7956 13.1542 23.3584 12.8342 23.882L14.5408 24.9249ZM15.3125 22.1733V19.6023H13.3125V22.1733H15.3125ZM13.6768 18.8303C13.6883 18.8209 13.6652 18.8419 13.5767 18.8815C13.4924 18.9193 13.372 18.9638 13.2077 19.0119L13.7695 20.9313C14.1885 20.8087 14.6252 20.6402 14.9482 20.3742L13.6768 18.8303ZM13.2013 19.0138C12.8654 19.1145 12.477 19.2058 12.0331 19.2857L12.3874 21.2541C12.8904 21.1635 13.3542 21.0559 13.776 20.9294L13.2013 19.0138ZM12.0331 19.2857C11.5712 19.3688 11.1143 19.4427 10.6626 19.5072L10.9454 21.4871C11.4217 21.4191 11.9023 21.3414 12.3874 21.2541L12.0331 19.2857ZM10.6626 19.5072C10.1994 19.5734 9.79828 19.63 9.45902 19.6771L9.73416 21.6581C10.0767 21.6105 10.4805 21.5535 10.9454 21.4871L10.6626 19.5072ZM9.46202 19.6767C8.63081 19.7896 7.86531 19.9771 7.17308 20.2475L7.90078 22.1104C8.42068 21.9074 9.02828 21.754 9.73116 21.6585L9.46202 19.6767ZM7.17308 20.2475C6.43641 20.5353 5.80685 20.9581 5.32985 21.5382L6.8747 22.8084C7.09846 22.5363 7.42533 22.2962 7.90078 22.1104L7.17308 20.2475ZM5.33691 21.5297C4.80393 22.1635 4.5767 22.9475 4.5767 23.7926H6.5767C6.5767 23.312 6.69986 23.0164 6.86764 22.8169L5.33691 21.5297ZM4.5767 23.7926C4.5767 25.0195 5.04576 26.062 6.04093 26.7573L7.18635 25.1177C6.79894 24.8471 6.5767 24.4596 6.5767 23.7926H4.5767ZM6.04093 26.7573C6.94034 27.3856 8.03594 27.6619 9.25568 27.6619V25.6619C8.33527 25.6619 7.66951 25.4553 7.18635 25.1177L6.04093 26.7573ZM29.7528 0.90909H30.7528V-0.09091H29.7528V0.90909ZM29.7528 30V31H30.7528V30H29.7528ZM24.6108 30H23.6108V31H24.6108V30ZM24.6108 0.90909V-0.09091H23.6108V0.90909H24.6108ZM28.7528 0.90909V30H30.7528V0.90909H28.7528ZM29.7528 29H24.6108V31H29.7528V29ZM25.6108 30V0.90909H23.6108V30H25.6108ZM24.6108 1.90909H29.7528V-0.09091H24.6108V1.90909ZM40.1825 0.90909H41.1825V-0.09091H40.1825V0.90909ZM40.1825 30V31H41.1825V30H40.1825ZM35.0405 30H34.0405V31H35.0405V30ZM35.0405 0.90909V-0.09091H34.0405V0.90909H35.0405ZM39.1825 0.90909V30H41.1825V0.90909H39.1825ZM40.1825 29H35.0405V31H40.1825V29ZM36.0405 30V0.90909H34.0405V30H36.0405ZM35.0405 1.90909H40.1825V-0.09091H35.0405V1.90909ZM49.4616 29.0625L48.9594 29.9272L48.9655 29.9307L49.4616 29.0625ZM45.8111 25.1705L44.9187 25.6217L44.9197 25.6237L45.8111 25.1705ZM45.8111 13.3097L44.9186 12.8585L44.9177 12.8604L45.8111 13.3097ZM49.419 9.33239L49.942 10.1848L49.9457 10.1824L49.419 9.33239ZM58.6662 8.55114L58.3232 9.49054L58.3322 9.49371L58.6662 8.55114ZM61.848 10.5398L61.1483 11.2542L61.152 11.2578L61.848 10.5398ZM64.0355 13.9773L63.101 14.3333L63.1018 14.3354L64.0355 13.9773ZM64.831 20.4972V21.4972H65.831V20.4972H64.831ZM46.9474 20.4972H45.9474V21.4972H46.9474V20.4972ZM46.9474 17.0312V16.0312H45.9474V17.0312H46.9474ZM59.902 17.0312V18.0312H60.9116L60.9019 17.0216L59.902 17.0312ZM59.2628 14.4034L58.3816 14.8762L58.3841 14.8807L59.2628 14.4034ZM57.5156 12.571L56.9995 13.4276L57.0043 13.4304L57.5156 12.571ZM52.1605 12.6705L52.6941 13.5162L52.7013 13.5116L52.1605 12.6705ZM50.2997 14.6591L49.4199 14.1838L49.4179 14.1874L50.2997 14.6591ZM49.6321 17.3438L48.6321 17.334V17.3438H49.6321ZM50.3281 23.6364L49.4374 24.091L49.4394 24.0948L50.3281 23.6364ZM52.2741 25.7102L51.7727 26.5755L51.7801 26.5797L52.2741 25.7102ZM57.2315 26.108L57.5566 27.0537L57.5697 27.049L57.2315 26.108ZM58.8082 25.1562L58.1248 24.4262L58.8082 25.1562ZM59.8168 23.608L59.9285 22.6142L59.15 22.5267L58.8787 23.2616L59.8168 23.608ZM64.6179 24.1477L65.5905 24.38L65.8532 23.2803L64.7296 23.154L64.6179 24.1477ZM62.8849 27.4716L62.1417 26.8026L62.1413 26.803L62.8849 27.4716ZM59.6463 29.6591L60.0084 30.5912L60.0142 30.5889L59.6463 29.6591ZM55.1293 29.4261C53.082 29.4261 51.3707 29.0017 49.9578 28.1943L48.9655 29.9307C50.7344 30.9415 52.8015 31.4261 55.1293 31.4261V29.4261ZM49.9639 28.1978C48.554 27.3789 47.47 26.2267 46.7025 24.7172L44.9197 25.6237C45.8567 27.4665 47.2064 28.909 48.9594 29.9272L49.9639 28.1978ZM46.7035 24.7192C45.9352 23.1997 45.5327 21.3765 45.5327 19.2188H43.5327C43.5327 21.6254 43.9824 23.77 44.9187 25.6217L46.7035 24.7192ZM45.5327 19.2188C45.5327 17.1021 45.934 15.2913 46.7045 13.7589L44.9177 12.8604C43.9836 14.7182 43.5327 16.8468 43.5327 19.2188H45.5327ZM46.7035 13.7608C47.4864 12.2122 48.5652 11.0294 49.942 10.1848L48.8961 8.48001C47.1858 9.52929 45.8592 10.998 44.9186 12.8585L46.7035 13.7608ZM49.9457 10.1824C51.3089 9.33778 52.9341 8.89773 54.8594 8.89773V6.89773C52.6179 6.89773 50.6163 7.41411 48.8923 8.48234L49.9457 10.1824ZM54.8594 8.89773C56.094 8.89773 57.2463 9.09731 58.3233 9.49049L59.0091 7.61178C57.6997 7.13375 56.3141 6.89773 54.8594 6.89773V8.89773ZM58.3322 9.49371C59.3967 9.87091 60.3328 10.4555 61.1483 11.2542L62.5477 9.82534C61.5261 8.8248 60.341 8.08364 59.0002 7.60856L58.3322 9.49371ZM61.152 11.2578C61.9601 12.0412 62.6149 13.0571 63.101 14.3333L64.97 13.6213C64.3956 12.1134 63.592 10.8376 62.544 9.82176L61.152 11.2578ZM63.1018 14.3354C63.5776 15.5757 63.831 17.096 63.831 18.9205H65.831C65.831 16.9191 65.5541 15.144 64.9692 13.6192L63.1018 14.3354ZM63.831 18.9205V20.4972H65.831V18.9205H63.831ZM64.831 19.4972H46.9474V21.4972H64.831V19.4972ZM47.9474 20.4972V17.0312H45.9474V20.4972H47.9474ZM46.9474 18.0312H59.902V16.0312H46.9474V18.0312ZM60.9019 17.0216C60.8911 15.8946 60.6458 14.8543 60.1415 13.9261L58.3841 14.8807C58.7131 15.4866 58.8939 16.1982 58.902 17.0409L60.9019 17.0216ZM60.1439 13.9306C59.6425 12.9961 58.9332 12.2508 58.0269 11.7116L57.0043 13.4304C57.5943 13.7814 58.0497 14.2577 58.3816 14.8762L60.1439 13.9306ZM58.0317 11.7145C57.1162 11.1628 56.0708 10.9034 54.9304 10.9034V12.9034C55.7597 12.9034 56.4378 13.0891 56.9995 13.4275L58.0317 11.7145ZM54.9304 10.9034C53.7096 10.9034 52.5942 11.2029 51.6198 11.8293L52.7013 13.5116C53.3178 13.1153 54.0489 12.9034 54.9304 12.9034V10.9034ZM51.6269 11.8247C50.6868 12.4179 49.947 13.2081 49.4199 14.1838L51.1795 15.1344C51.5426 14.4624 52.0433 13.9268 52.6941 13.5162L51.6269 11.8247ZM49.4179 14.1874C48.902 15.152 48.6431 16.2067 48.6321 17.334L50.6321 17.3535C50.64 16.53 50.8262 15.7949 51.1815 15.1307L49.4179 14.1874ZM48.6321 17.3438V20.3693H50.6321V17.3438H48.6321ZM48.6321 20.3693C48.6321 21.7586 48.8862 23.011 49.4374 24.091L51.2188 23.1817C50.842 22.4435 50.6321 21.5179 50.6321 20.3693H48.6321ZM49.4394 24.0948C49.9863 25.1551 50.7654 25.9917 51.7727 26.5754L52.7756 24.845C52.1162 24.4629 51.598 23.9168 51.2169 23.178L49.4394 24.0948ZM51.7801 26.5797C52.7874 27.152 53.9386 27.4205 55.2003 27.4205V25.4205C54.2271 25.4205 53.4276 25.2154 52.7682 24.8408L51.7801 26.5797ZM55.2003 27.4205C56.0409 27.4205 56.8301 27.3034 57.5566 27.0536L56.9065 25.1623C56.4209 25.3292 55.8559 25.4205 55.2003 25.4205V27.4205ZM57.5697 27.049C58.2967 26.7878 58.9415 26.4013 59.4917 25.8863L58.1248 24.4262C57.7848 24.7446 57.3785 24.9925 56.8933 25.1669L57.5697 27.049ZM59.4917 25.8863C60.0588 25.3553 60.4779 24.7044 60.7549 23.9543L58.8787 23.2616C58.7011 23.7425 58.4478 24.1239 58.1248 24.4262L59.4917 25.8863ZM59.705 24.6017L64.5062 25.1415L64.7296 23.154L59.9285 22.6142L59.705 24.6017ZM63.6452 23.9155C63.38 25.026 62.8794 25.9829 62.1417 26.8026L63.6282 28.1406C64.595 27.0664 65.2497 25.8073 65.5905 24.38L63.6452 23.9155ZM62.1413 26.803C61.4139 27.6121 60.4687 28.2582 59.2784 28.7292L60.0142 30.5889C61.4565 30.0183 62.6703 29.2061 63.6286 28.1401L62.1413 26.803ZM59.2842 28.727C58.104 29.1855 56.7247 29.4261 55.1293 29.4261V31.4261C56.924 31.4261 58.5561 31.1554 60.0084 30.5912L59.2842 28.727ZM69.1811 30H68.1811V31H69.1811V30ZM69.1811 8.18182V7.18182H68.1811V8.18182H69.1811ZM74.0959 8.18182H75.0959V7.18182H74.0959V8.18182ZM74.0959 11.8892H73.0959V12.8892H74.0959V11.8892ZM74.3516 11.8892V12.8892H75.052L75.2914 12.2309L74.3516 11.8892ZM76.6101 8.96307L77.1648 9.79513L77.1699 9.79166L76.6101 8.96307ZM84.1101 8.97727L83.531 9.79259L83.5397 9.79864L84.1101 8.97727ZM86.2692 11.8892L85.322 12.2098L85.5519 12.8892H86.2692V11.8892ZM86.4964 11.8892V12.8892H87.1745L87.4254 12.2593L86.4964 11.8892ZM88.9396 8.99148L89.4715 9.8383L89.4734 9.83713L88.9396 8.99148ZM99.8629 30V31H100.863V30H99.8629ZM94.7067 30H93.7067V31H94.7067V30ZM93.6271 13.1818L92.9658 13.932L92.9714 13.9369L93.6271 13.1818ZM88.0732 13.3949L87.3308 12.7249L87.3303 12.7254L88.0732 13.3949ZM87.0362 30V31H88.0362V30H87.0362ZM81.9936 30H80.9936V31H81.9936V30ZM80.9709 13.2386L80.2638 13.9458L80.2687 13.9507L80.9709 13.2386ZM76.3118 12.7983L76.8322 13.6523L76.8418 13.6463L76.3118 12.7983ZM74.8629 14.375L75.7446 14.8469L75.7473 14.8418L74.8629 14.375ZM74.3232 30V31H75.3232V30H74.3232ZM70.1811 30V8.18182H68.1811V30H70.1811ZM69.1811 9.18182H74.0959V7.18182H69.1811V9.18182ZM73.0959 8.18182V11.8892H75.0959V8.18182H73.0959ZM74.0959 12.8892H74.3516V10.8892H74.0959V12.8892ZM75.2914 12.2309C75.6772 11.17 76.3007 10.3712 77.1648 9.79512L76.0554 8.13102C74.8172 8.95649 73.935 10.1084 73.4118 11.5475L75.2914 12.2309ZM77.1699 9.79166C78.032 9.20919 79.0848 8.89773 80.3743 8.89773V6.89773C78.7471 6.89773 77.2905 7.29649 76.0502 8.13448L77.1699 9.79166ZM80.3743 8.89773C81.6842 8.89773 82.7169 9.21433 83.531 9.79255L84.6892 8.162C83.4767 7.30082 82.019 6.89773 80.3743 6.89773V8.89773ZM83.5397 9.79864C84.3783 10.381 84.9708 11.1722 85.322 12.2098L87.2164 11.5686C86.7342 10.1441 85.8873 8.99397 84.6805 8.1559L83.5397 9.79864ZM86.2692 12.8892H86.4964V10.8892H86.2692V12.8892ZM87.4254 12.2593C87.8268 11.2519 88.4981 10.4497 89.4715 9.83829L88.4077 8.14466C87.0895 8.97267 86.132 10.1023 85.5675 11.5191L87.4254 12.2593ZM89.4734 9.83713C90.445 9.22387 91.6218 8.89773 93.0447 8.89773V6.89773C91.3048 6.89773 89.7448 7.30075 88.4059 8.14582L89.4734 9.83713ZM93.0447 8.89773C94.8215 8.89773 96.194 9.44985 97.2524 10.5082L98.6666 9.09403C97.1871 7.61454 95.2831 6.89773 93.0447 6.89773V8.89773ZM97.2524 10.5082C98.2749 11.5307 98.8629 13.0896 98.8629 15.3551H100.863C100.863 12.7532 100.182 10.6095 98.6666 9.09403L97.2524 10.5082ZM98.8629 15.3551V30H100.863V15.3551H98.8629ZM99.8629 29H94.7067V31H99.8629V29ZM95.7067 30V16.1506H93.7067V30H95.7067ZM95.7067 16.1506C95.7067 14.6325 95.301 13.311 94.2828 12.4268L92.9714 13.9369C93.3926 14.3026 93.7067 14.9603 93.7067 16.1506H95.7067ZM94.2884 12.4317C93.3698 11.6219 92.2477 11.2301 90.9851 11.2301V13.2301C91.8058 13.2301 92.4451 13.4728 92.9658 13.9319L94.2884 12.4317ZM90.9851 11.2301C89.519 11.2301 88.2565 11.6991 87.3308 12.7249L88.8155 14.0649C89.2913 13.5377 89.9701 13.2301 90.9851 13.2301V11.2301ZM87.3303 12.7254C86.4427 13.7103 86.0362 14.9639 86.0362 16.392H88.0362C88.0362 15.3581 88.321 14.6136 88.816 14.0644L87.3303 12.7254ZM86.0362 16.392V30H88.0362V16.392H86.0362ZM87.0362 29H81.9936V31H87.0362V29ZM82.9936 30V15.9375H80.9936V30H82.9936ZM82.9936 15.9375C82.9936 14.594 82.5789 13.4199 81.673 12.5266L80.2687 13.9507C80.7265 14.402 80.9936 15.0272 80.9936 15.9375H82.9936ZM81.678 12.5315C80.7905 11.644 79.6412 11.2301 78.3288 11.2301V13.2301C79.1945 13.2301 79.8066 13.4886 80.2638 13.9457L81.678 12.5315ZM78.3288 11.2301C77.4094 11.2301 76.5523 11.4687 75.7818 11.9503L76.8418 13.6463C77.2834 13.3703 77.771 13.2301 78.3288 13.2301V11.2301ZM75.7914 11.9444C75.0181 12.4156 74.4151 13.0811 73.9785 13.9082L75.7473 14.8418C76.0305 14.3052 76.3933 13.9197 76.8322 13.6522L75.7914 11.9444ZM73.9813 13.9031C73.5309 14.7446 73.3232 15.6983 73.3232 16.733H75.3232C75.3232 15.9684 75.4753 15.3501 75.7446 14.8469L73.9813 13.9031ZM73.3232 16.733V30H75.3232V16.733H73.3232ZM74.3232 29H69.1811V31H74.3232V29ZM105.08 38.1818H104.08V39.1818H105.08V38.1818ZM105.08 8.18182V7.18182H104.08V8.18182H105.08ZM110.136 8.18182H111.136V7.18182H110.136V8.18182ZM110.136 11.7898H109.136V12.7898H110.136V11.7898ZM110.435 11.7898V12.7898H111.053L111.329 12.237L110.435 11.7898ZM111.557 10.0994L112.334 10.7286L112.339 10.7226L111.557 10.0994ZM113.517 8.55114L113.976 9.43939L113.984 9.43517L113.517 8.55114ZM121.23 9.19034L120.693 10.034L120.7 10.0383L121.23 9.19034ZM124.469 12.983L123.565 13.4117L123.568 13.4178L124.469 12.983ZM124.497 25.2273L123.592 24.8027L123.592 24.8027L124.497 25.2273ZM121.287 29.0625L121.832 29.9008L121.832 29.9008L121.287 29.0625ZM113.574 29.7585L113.123 30.6509L113.123 30.6509L113.574 29.7585ZM111.585 28.2528L110.814 28.8894L110.819 28.8961L110.825 28.9026L111.585 28.2528ZM110.435 26.5625L111.323 26.1026L111.043 25.5625H110.435V26.5625ZM110.222 26.5625V25.5625H109.222V26.5625H110.222ZM110.222 38.1818V39.1818H111.222V38.1818H110.222ZM110.719 22.7983L109.782 23.1494L109.785 23.1567L110.719 22.7983ZM112.466 25.2841L111.847 26.0698L111.858 26.0782L112.466 25.2841ZM118.105 25.2557L118.725 26.0403L118.731 26.0356L118.105 25.2557ZM119.838 22.7415L118.901 22.3931L118.899 22.3977L119.838 22.7415ZM119.852 15.483L120.79 15.1365L120.79 15.1365L119.852 15.483ZM118.119 13.0114L118.733 12.222L118.733 12.222L118.119 13.0114ZM112.452 12.983L113.053 13.7818L113.053 13.7818L112.452 12.983ZM110.705 15.4119L109.77 15.0552L109.768 15.0627L110.705 15.4119ZM106.08 38.1818V8.18182H104.08V38.1818H106.08ZM105.08 9.18182H110.136V7.18182H105.08V9.18182ZM109.136 8.18182V11.7898H111.136V8.18182H109.136ZM110.136 12.7898H110.435V10.7898H110.136V12.7898ZM111.329 12.237C111.554 11.7871 111.884 11.2845 112.334 10.7286L110.78 9.47023C110.264 10.1076 109.846 10.7318 109.54 11.3426L111.329 12.237ZM112.339 10.7226C112.719 10.2461 113.253 9.81336 113.976 9.43935L113.058 7.66292C112.133 8.14119 111.361 8.74063 110.775 9.47623L112.339 10.7226ZM113.984 9.43517C114.621 9.09872 115.497 8.89773 116.67 8.89773V6.89773C115.287 6.89773 114.061 7.13234 113.05 7.6671L113.984 9.43517ZM116.67 8.89773C118.176 8.89773 119.508 9.27961 120.693 10.034L121.767 8.34668C120.244 7.37759 118.536 6.89773 116.67 6.89773V8.89773ZM120.7 10.0383C121.878 10.7746 122.839 11.881 123.565 13.4117L125.372 12.5542C124.508 10.7327 123.309 9.31066 121.76 8.34234L120.7 10.0383ZM123.568 13.4178C124.291 14.9136 124.676 16.8009 124.676 19.1193H126.676C126.676 16.5892 126.257 14.3856 125.369 12.5481L123.568 13.4178ZM124.676 19.1193C124.676 21.4099 124.3 23.2925 123.592 24.8027L125.403 25.6518C126.266 23.8098 126.676 21.6204 126.676 19.1193H124.676ZM123.592 24.8027C122.873 26.3352 121.918 27.4593 120.742 28.2242L121.832 29.9008C123.364 28.9043 124.549 27.4716 125.403 25.6518L123.592 24.8027ZM120.742 28.2242C119.56 28.9928 118.218 29.3835 116.685 29.3835V31.3835C118.58 31.3835 120.306 30.8936 121.832 29.9008L120.742 28.2242ZM116.685 29.3835C115.539 29.3835 114.669 29.1916 114.025 28.8662L113.123 30.6509C114.127 31.1588 115.331 31.3835 116.685 31.3835V29.3835ZM114.025 28.8662C113.297 28.4977 112.746 28.0721 112.345 27.6031L110.825 28.9026C111.428 29.6078 112.203 30.186 113.123 30.6509L114.025 28.8662ZM112.356 27.6163C111.897 27.0592 111.557 26.5548 111.323 26.1026L109.547 27.0224C109.862 27.6308 110.289 28.2533 110.814 28.8894L112.356 27.6163ZM110.435 25.5625H110.222V27.5625H110.435V25.5625ZM109.222 26.5625V38.1818H111.222V26.5625H109.222ZM110.222 37.1818H105.08V39.1818H110.222V37.1818ZM109.122 19.0909C109.122 20.5935 109.334 21.9527 109.782 23.1494L111.655 22.4472C111.308 21.5226 111.122 20.4103 111.122 19.0909H109.122ZM109.785 23.1567C110.245 24.3552 110.925 25.3432 111.847 26.0697L113.085 24.4985C112.492 24.0318 112.007 23.3626 111.652 22.4399L109.785 23.1567ZM111.858 26.0782C112.822 26.8157 113.971 27.1648 115.25 27.1648V25.1648C114.351 25.1648 113.644 24.9267 113.074 24.49L111.858 26.0782ZM115.25 27.1648C116.573 27.1648 117.754 26.8078 118.725 26.0403L117.485 24.471C116.922 24.9157 116.2 25.1648 115.25 25.1648V27.1648ZM118.731 26.0356C119.66 25.2899 120.336 24.2912 120.777 23.0852L118.899 22.3977C118.564 23.313 118.084 23.9904 117.479 24.4758L118.731 26.0356ZM120.775 23.0899C121.222 21.889 121.435 20.5509 121.435 19.0909H119.435C119.435 20.3582 119.25 21.4538 118.901 22.3931L120.775 23.0899ZM121.435 19.0909C121.435 17.6424 121.227 16.319 120.79 15.1365L118.914 15.8294C119.254 16.7492 119.435 17.8311 119.435 19.0909H121.435ZM120.79 15.1365C120.348 13.9377 119.669 12.9498 118.733 12.222L117.505 13.8007C118.104 14.2661 118.58 14.9259 118.914 15.8294L120.79 15.1365ZM118.733 12.222C117.761 11.4655 116.577 11.1165 115.25 11.1165V13.1165C116.215 13.1165 116.944 13.364 117.505 13.8007L118.733 12.222ZM115.25 11.1165C113.967 11.1165 112.815 11.4576 111.85 12.1841L113.053 13.7818C113.623 13.353 114.336 13.1165 115.25 13.1165V11.1165ZM111.85 12.1841C110.91 12.8922 110.224 13.8667 109.77 15.0552L111.639 15.7686C111.98 14.8738 112.459 14.229 113.053 13.7818L111.85 12.1841ZM109.768 15.0627C109.328 16.2416 109.122 17.5914 109.122 19.0909H111.122C111.122 17.7685 111.304 16.6656 111.642 15.7612L109.768 15.0627ZM147.324 13.9489L147.432 14.943L148.507 14.8257L148.307 13.7634L147.324 13.9489ZM142.636 14.4602L141.673 14.7299L141.902 15.5463L142.745 15.4543L142.636 14.4602ZM141.94 13.125L141.149 13.7365L141.158 13.7475L141.94 13.125ZM140.634 12.1165L141.056 11.2099L141.056 11.2099L140.634 12.1165ZM135.918 12.429L135.381 11.5853L135.376 11.5885L135.918 12.429ZM134.852 14.233L135.852 14.2479L135.852 14.234L135.852 14.2201L134.852 14.233ZM135.548 15.7812L134.905 16.547L134.913 16.5532L135.548 15.7812ZM137.935 16.7614L137.71 17.7358L137.718 17.7376L137.726 17.7393L137.935 16.7614ZM141.656 17.5568L141.867 16.5793L141.865 16.5789L141.656 17.5568ZM146.259 19.6733L145.565 20.3939L145.569 20.3971L146.259 19.6733ZM147.793 23.4659L148.793 23.4728L148.793 23.4598L147.793 23.4659ZM146.585 27.1023L145.788 26.4988L145.787 26.5L146.585 27.1023ZM143.304 29.5455L143.69 30.4678L143.69 30.4678L143.304 29.5455ZM132.026 28.75L131.457 29.5724L131.46 29.5746L132.026 28.75ZM129.114 24.0483L129.018 23.0529L127.962 23.1545L128.126 24.2021L129.114 24.0483ZM134.128 23.5653L135.102 23.3405L134.905 22.4859L134.032 22.5699L134.128 23.5653ZM135.577 25.7955L136.139 24.9683L136.139 24.9683L135.577 25.7955ZM141.401 25.7955L140.843 24.965L140.839 24.9683L141.401 25.7955ZM141.798 22.3864L141.146 23.1446L141.154 23.1509L141.798 22.3864ZM139.582 21.4489L139.794 20.4716L139.788 20.4702L139.582 21.4489ZM135.861 20.6676L136.066 19.6889L136.065 19.6886L135.861 20.6676ZM131.216 18.4659L130.496 19.1598L130.499 19.1631L131.216 18.4659ZM129.724 14.517L130.724 14.523L130.724 14.51L129.724 14.517ZM130.818 11.0227L130.019 10.4215L130.018 10.4227L130.818 11.0227ZM133.929 8.72159L134.306 9.64777L134.309 9.6464L133.929 8.72159ZM144.582 9.53125L143.987 10.3344L143.989 10.3362L144.582 9.53125ZM147.215 12.9548L142.528 13.4661L142.745 15.4543L147.432 14.943L147.215 12.9548ZM143.599 14.1906C143.428 13.5783 143.131 13.0148 142.723 12.5025L141.158 13.7475C141.413 14.0685 141.58 14.3952 141.673 14.7299L143.599 14.1906ZM142.732 12.5136C142.298 11.9526 141.728 11.5228 141.056 11.2099L140.211 13.0231C140.638 13.2215 140.939 13.4641 141.149 13.7364L142.732 12.5136ZM141.056 11.2099C140.34 10.8766 139.514 10.733 138.616 10.733V12.733C139.31 12.733 139.829 12.845 140.211 13.0231L141.056 11.2099ZM138.616 10.733C137.402 10.733 136.305 10.9973 135.381 11.5853L136.454 13.2726C136.989 12.9326 137.691 12.733 138.616 12.733V10.733ZM135.376 11.5885C134.421 12.2042 133.838 13.103 133.852 14.2458L135.852 14.2201C135.848 13.8857 135.975 13.5818 136.459 13.2694L135.376 11.5885ZM133.852 14.218C133.839 15.144 134.195 15.9501 134.905 16.547L136.191 15.0155C135.955 14.817 135.847 14.5909 135.852 14.2479L133.852 14.218ZM134.913 16.5532C135.577 17.1 136.555 17.4693 137.71 17.7358L138.16 15.787C137.098 15.5421 136.486 15.258 136.184 15.0093L134.913 16.5532ZM137.726 17.7393L141.447 18.5347L141.865 16.5789L138.144 15.7835L137.726 17.7393ZM141.445 18.5344C143.415 18.959 144.747 19.607 145.565 20.3939L146.952 18.9527C145.762 17.8078 144.026 17.0448 141.867 16.5793L141.445 18.5344ZM145.569 20.3971C146.362 21.1531 146.785 22.1462 146.793 23.472L148.793 23.4598C148.782 21.6606 148.182 20.1253 146.949 18.9495L145.569 20.3971ZM146.793 23.459C146.785 24.6263 146.448 25.627 145.788 26.4988L147.383 27.7057C148.314 26.4752 148.782 25.0518 148.793 23.4728L146.793 23.459ZM145.787 26.5C145.124 27.3786 144.183 28.093 142.918 28.6231L143.69 30.4678C145.228 29.8237 146.475 28.9093 147.383 27.7046L145.787 26.5ZM142.918 28.6231C141.66 29.1499 140.185 29.4261 138.474 29.4261V31.4261C140.4 31.4261 142.145 31.1152 143.69 30.4678L142.918 28.6231ZM138.474 29.4261C135.936 29.4261 134.004 28.8947 132.591 27.9254L131.46 29.5746C133.305 30.8401 135.672 31.4261 138.474 31.4261V29.4261ZM132.595 27.9276C131.198 26.9612 130.373 25.6391 130.102 23.8945L128.126 24.2021C128.479 26.4727 129.596 28.285 131.457 29.5724L132.595 27.9276ZM129.21 25.0437L134.224 24.5607L134.032 22.5699L129.018 23.0529L129.21 25.0437ZM133.153 23.7902C133.429 24.9857 134.04 25.9602 135.015 26.6226L136.139 24.9683C135.636 24.627 135.281 24.1146 135.102 23.3405L133.153 23.7902ZM135.015 26.6226C135.965 27.2685 137.14 27.5483 138.46 27.5483V25.5483C137.413 25.5483 136.665 25.3262 136.139 24.9683L135.015 26.6226ZM138.46 27.5483C139.81 27.5483 141.007 27.2716 141.963 26.6226L140.839 24.9683C140.317 25.3231 139.553 25.5483 138.46 25.5483V27.5483ZM141.958 26.6259C142.913 25.9848 143.523 25.0823 143.523 23.9347H141.523C141.523 24.2643 141.384 24.6023 140.843 24.965L141.958 26.6259ZM143.523 23.9347C143.523 23.0113 143.148 22.2167 142.443 21.6218L141.154 23.1509C141.414 23.3704 141.523 23.6081 141.523 23.9347H143.523ZM142.45 21.6282C141.794 21.0639 140.868 20.7045 139.794 20.4716L139.37 22.4261C140.305 22.6288 140.855 22.8944 141.146 23.1445L142.45 21.6282ZM139.788 20.4702L136.066 19.6889L135.655 21.6463L139.377 22.4275L139.788 20.4702ZM136.065 19.6886C134.078 19.2751 132.745 18.6041 131.933 17.7687L130.499 19.1631C131.694 20.3921 133.458 21.189 135.657 21.6466L136.065 19.6886ZM131.936 17.772C131.132 16.9378 130.716 15.8815 130.724 14.523L128.724 14.5111C128.714 16.3344 129.292 17.9107 130.496 19.1598L131.936 17.772ZM130.724 14.51C130.716 13.3627 131.023 12.4162 131.618 11.6227L130.018 10.4227C129.136 11.599 128.714 12.982 128.724 14.5241L130.724 14.51ZM131.617 11.6239C132.241 10.7947 133.122 10.1298 134.306 9.64777L133.552 7.79541C132.084 8.39294 130.891 9.26211 130.019 10.4215L131.617 11.6239ZM134.309 9.6464C135.502 9.15593 136.907 8.89773 138.545 8.89773V6.89773C136.699 6.89773 135.027 7.18876 133.549 7.79678L134.309 9.6464ZM138.545 8.89773C140.971 8.89773 142.748 9.4153 143.987 10.3343L145.178 8.72815C143.481 7.46917 141.233 6.89773 138.545 6.89773V8.89773ZM143.989 10.3362C145.256 11.2705 146.036 12.5185 146.341 14.1344L148.307 13.7634C147.911 11.6671 146.863 9.97 145.176 8.72632L143.989 10.3362Z"
        //   stroke="#C780D2"
        //   strokeWidth={2}
          id="allemps-2"
        //   fillOpacity="0.01"
        //   stroke="#C780D2"
        //   strokeWidth="5"
        />
      </svg>
    </div>
  );
};