import React from "react";

const settingsIcon = ({ fill, viewBox }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="44px"
    height="44px"
    viewBox={viewBox}
  >
    <path
      fillRule="evenodd"
      fill={fill}
      d="M42.038,26.249
                                        C41.211,26.373 40.361,26.491
                                        39.514,26.602 C39.411,26.615
                                        39.328,26.685 39.302,26.780
                                        C38.910,28.199 38.343,29.569
                                        37.614,30.852 C37.565,30.938
                                        37.574,31.047 37.638,31.129
                                        C38.159,31.807 38.676,32.492
                                        39.174,33.165 C39.846,34.074
                                        39.749,35.364 38.947,36.166
                                        L36.166,38.947
                                        C35.364,39.749 34.074,39.846
                                        33.165,39.174 C32.493,38.677
                                        31.808,38.160 31.129,37.638
                                        C31.047,37.575 30.938,37.565
                                        30.852,37.614 C29.570,38.342
                                        28.200,38.910 26.780,39.302
                                        C26.685,39.328 26.615,39.411
                                        26.602,39.514 C26.491,40.362
                                        26.373,41.211 26.249,42.038
                                        C26.082,43.157 25.101,44.000
                                        23.967,44.000 L20.033,44.000
                                        C18.899,44.000 17.918,43.157
                                        17.751,42.038 C17.627,41.212
                                        17.509,40.363 17.398,39.514
                                        C17.384,39.411 17.315,39.328
                                        17.220,39.302 C15.800,38.910
                                        14.430,38.343 13.148,37.614
                                        C13.062,37.565 12.953,37.575
                                        12.871,37.638 C12.192,38.160
                                        11.507,38.677 10.835,39.174
                                        C9.926,39.847 8.636,39.749
                                        7.834,38.947 L5.053,36.166
                                        C4.251,35.364 4.154,34.074
                                        4.826,33.165 C5.324,32.492
                                        5.840,31.808 6.362,31.129
                                        C6.425,31.047 6.435,30.939
                                        6.386,30.852 C5.657,29.570
                                        5.089,28.200 4.698,26.780
                                        C4.672,26.685 4.589,26.616
                                        4.486,26.602 C3.639,26.492
                                        2.789,26.373 1.961,26.249
                                        C0.843,26.082 -0.000,25.101
                                        -0.000,23.967 L-0.000,20.033
                                        C-0.000,18.899 0.843,17.918
                                        1.962,17.751 C2.790,17.627
                                        3.639,17.508 4.486,17.398
                                        C4.589,17.384 4.672,17.315
                                        4.698,17.220 C5.090,15.801
                                        5.657,14.430 6.386,13.148
                                        C6.435,13.062 6.425,12.953
                                        6.362,12.871 C5.842,12.194
                                        5.325,11.509 4.826,10.835
                                        C4.154,9.926 4.251,8.636
                                        5.053,7.834 L7.834,5.053
                                        C8.636,4.251 9.926,4.154
                                        10.835,4.826 C11.507,5.323
                                        12.192,5.840 12.871,6.362
                                        C12.953,6.425 13.062,6.435
                                        13.148,6.386 C14.430,5.657
                                        15.800,5.090 17.220,4.698
                                        C17.315,4.672 17.384,4.589
                                        17.398,4.486 C17.509,3.637
                                        17.627,2.788 17.751,1.961
                                        C17.918,0.843 18.899,-0.000
                                        20.033,-0.000 L23.967,-0.000
                                        C25.101,-0.000 26.082,0.843
                                        26.249,1.961 C26.373,2.788
                                        26.491,3.637 26.602,4.486
                                        C26.615,4.589 26.685,4.672
                                        26.780,4.698 C28.200,5.090
                                        29.570,5.657 30.852,6.386
                                        C30.938,6.435 31.047,6.425
                                        31.129,6.362 C31.808,5.840
                                        32.493,5.323 33.165,4.826
                                        C34.074,4.154 35.364,4.251
                                        36.166,5.053 L38.947,7.834
                                        C39.749,8.636 39.846,9.926
                                        39.174,10.835 C38.676,11.508
                                        38.159,12.193 37.638,12.871
                                        C37.574,12.953 37.565,13.062
                                        37.614,13.148 C38.343,14.430
                                        38.911,15.800 39.302,17.220
                                        C39.328,17.315 39.411,17.384
                                        39.514,17.398 C40.362,17.508
                                        41.211,17.627 42.039,17.751
                                        C43.157,17.918 44.000,18.899
                                        44.000,20.033 L44.000,23.967
                                        C44.000,25.100 43.157,26.082
                                        42.038,26.249
                                        ZM41.946,20.033
                                        C41.946,19.909 41.855,19.801
                                        41.735,19.783 C40.920,19.661
                                        40.083,19.544 39.248,19.435
                                        C38.324,19.315 37.567,18.660
                                        37.321,17.767 C36.975,16.510
                                        36.473,15.298 35.828,14.163
                                        C35.370,13.356 35.441,12.357
                                        36.009,11.618 C36.523,10.951
                                        37.032,10.276 37.522,9.613
                                        C37.594,9.516 37.583,9.375
                                        37.494,9.287 L34.713,6.506
                                        C34.625,6.418 34.485,6.406
                                        34.387,6.478 C33.726,6.967
                                        33.051,7.476 32.382,7.991
                                        C31.643,8.559 30.644,8.631
                                        29.838,8.172 C28.703,7.528
                                        27.490,7.025 26.234,6.679
                                        C25.341,6.433 24.685,5.676
                                        24.565,4.752 C24.456,3.915
                                        24.339,3.079 24.217,2.266
                                        C24.199,2.145 24.091,2.055
                                        23.967,2.055 L20.033,2.055
                                        C19.909,2.055 19.801,2.145
                                        19.783,2.265 C19.661,3.079
                                        19.544,3.916 19.435,4.752
                                        C19.315,5.676 18.659,6.433
                                        17.766,6.679 C16.510,7.025
                                        15.297,7.528 14.163,8.172
                                        C13.356,8.631 12.357,8.559
                                        11.618,7.991 C10.949,7.476
                                        10.274,6.967 9.613,6.478
                                        C9.515,6.406 9.375,6.418
                                        9.287,6.506 L6.506,9.287
                                        C6.418,9.375 6.406,9.516
                                        6.478,9.613 C6.969,10.277
                                        7.478,10.952 7.991,11.618
                                        C8.559,12.357 8.631,13.356
                                        8.172,14.163 C7.527,15.298
                                        7.025,16.511 6.679,17.767
                                        C6.433,18.660 5.676,19.315
                                        4.752,19.436 C3.917,19.544
                                        3.081,19.661 2.265,19.783
                                        C2.145,19.801 2.055,19.909
                                        2.055,20.034 L2.055,23.967
                                        C2.055,24.092 2.145,24.199
                                        2.265,24.217 C3.081,24.339
                                        3.917,24.456 4.752,24.565
                                        C5.676,24.686 6.433,25.341
                                        6.679,26.234 C7.025,27.490
                                        7.528,28.703 8.172,29.838
                                        C8.631,30.645 8.559,31.643
                                        7.991,32.383 C7.477,33.051
                                        6.968,33.725 6.478,34.387
                                        C6.406,34.485 6.418,34.625
                                        6.506,34.713 L9.287,37.495
                                        C9.375,37.583 9.515,37.595
                                        9.613,37.523 C10.275,37.033
                                        10.949,36.524 11.618,36.010
                                        C12.033,35.690 12.530,35.528
                                        13.028,35.528 C13.418,35.528
                                        13.809,35.627 14.163,35.828
                                        C15.297,36.473 16.510,36.975
                                        17.766,37.321 C18.659,37.568
                                        19.315,38.324 19.435,39.249
                                        C19.544,40.085 19.661,40.921
                                        19.783,41.735 C19.801,41.855
                                        19.909,41.946 20.033,41.946
                                        L23.967,41.946
                                        C24.091,41.946 24.199,41.855
                                        24.217,41.735 C24.339,40.921
                                        24.456,40.084 24.565,39.249
                                        C24.685,38.324 25.340,37.567
                                        26.234,37.321 C27.490,36.975
                                        28.703,36.473 29.837,35.828
                                        C30.644,35.370 31.643,35.441
                                        32.382,36.010 C33.051,36.524
                                        33.725,37.033 34.387,37.523
                                        C34.485,37.595 34.625,37.583
                                        34.713,37.495 L37.494,34.713
                                        C37.582,34.625 37.595,34.485
                                        37.522,34.387 C37.032,33.724
                                        36.523,33.050 36.009,32.382
                                        C35.441,31.643 35.369,30.644
                                        35.828,29.838 C36.472,28.703
                                        36.975,27.490 37.321,26.234
                                        C37.567,25.341 38.324,24.686
                                        39.248,24.565 C40.083,24.456
                                        40.920,24.339 41.735,24.217
                                        C41.855,24.199 41.945,24.092
                                        41.945,23.967 L41.946,23.967
                                        L41.946,20.033
                                        ZM22.000,31.551
                                        C16.734,31.551 12.449,27.266
                                        12.449,22.000 C12.449,16.734
                                        16.734,12.449 22.000,12.449
                                        C27.266,12.449 31.551,16.734
                                        31.551,22.000 C31.551,27.266
                                        27.266,31.551 22.000,31.551
                                        ZM22.000,14.504
                                        C17.867,14.504 14.504,17.867
                                        14.504,22.000 C14.504,26.133
                                        17.867,29.496 22.000,29.496
                                        C26.133,29.496 29.496,26.133
                                        29.496,22.000 C29.496,17.867
                                        26.133,14.504 22.000,14.504
                                        Z"
    />
  </svg>
);

export default settingsIcon;
