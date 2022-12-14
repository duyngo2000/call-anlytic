// 20220804202423
// http://localhost:5000/

const FILE9 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "801",
        "name": "Trần Phương Quyền",
        "cty": "ABC",
        "hotline": "44947310"
      },
      "customer": {
        "customerID": "801",
        "name": "Đặng Văn Ánh",
        "phone": "73862791",
        "address": "Hà Nội",
        "cmnd": "79513649"
      },
      "fileURL": "talk801.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "75s",
      "date": "30/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda182"
            }
          ],
          "_id": "62ebc0e18a312c984bbda181"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda184"
            }
          ],
          "_id": "62ebc0e18a312c984bbda183"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda186"
            }
          ],
          "_id": "62ebc0e18a312c984bbda185"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda188"
            }
          ],
          "_id": "62ebc0e18a312c984bbda187"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda18a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda189"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda18c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda18b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda168",
    "audioID": 801,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 800,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda16a"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda16b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda16c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda16d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda16e"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda16f"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda170"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda171"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda172"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda173"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda174"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda169"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 801,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda176"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda177"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda178"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda179"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda17a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda17b"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda17c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda17d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda17e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda17f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda180"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda175"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "802",
        "name": "Lê Hữu Khánh",
        "cty": "ABC",
        "hotline": "13541143"
      },
      "customer": {
        "customerID": "802",
        "name": "Phan Phương Duy",
        "phone": "20751468",
        "address": "Hà Nội",
        "cmnd": "22339682"
      },
      "fileURL": "talk802.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "277s",
      "date": "5/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1a7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1a6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1a9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1a8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1ab"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1aa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1ad"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1ac"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1af"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1ae"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1b1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1b0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda18d",
    "audioID": 802,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 801,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda18f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda190"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda191"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda192"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda193"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda194"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda195"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda196"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda197"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda198"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda199"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda18e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 802,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda19b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda19c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda19d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda19e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda19f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1a0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda1a1"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1a2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1a3"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1a4"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1a5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda19a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "803",
        "name": "Trần Hải Khánh",
        "cty": "ABC",
        "hotline": "62951952"
      },
      "customer": {
        "customerID": "803",
        "name": "Đặng Quốc Dạ",
        "phone": "18716385",
        "address": "Hà Nội",
        "cmnd": "31884324"
      },
      "fileURL": "talk803.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "96s",
      "date": "20/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1cc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1cb"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1ce"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1cd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1d0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1cf"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1d2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1d1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1d3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1d6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1d5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda1b2",
    "audioID": 803,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 802,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1b4"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1b5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1b6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1b7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1b8"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1b9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1ba"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda1bb"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1bc"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1bd"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1be"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda1b3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 803,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1c0"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1c1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1c2"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1c3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda1c4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda1c5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1c6"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1c7"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda1c8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1c9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda1ca"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda1bf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "804",
        "name": "Đặng Dương Dạ",
        "cty": "ABC",
        "hotline": "29146664"
      },
      "customer": {
        "customerID": "804",
        "name": "Huỳnh Khánh Hồng",
        "phone": "86989000",
        "address": "Hà Nội",
        "cmnd": "30956435"
      },
      "fileURL": "talk804.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "90s",
      "date": "16/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1f1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1f0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1f3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1f2"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda1f5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1f4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1f7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1f6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1f8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda1fb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda1fa"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda1d7",
    "audioID": 804,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 803,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1d9"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1da"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1db"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1dc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1dd"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1de"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1df"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1e0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda1e1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda1e2"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1e3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda1d8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 804,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda1e5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda1e6"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1e7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda1e8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1e9"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1ea"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda1eb"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda1ec"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda1ed"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda1ee"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda1ef"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda1e4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "805",
        "name": "Trần Hải Hồng",
        "cty": "ABC",
        "hotline": "12695595"
      },
      "customer": {
        "customerID": "805",
        "name": "Lê Dương Cảnh",
        "phone": "30541660",
        "address": "Hà Nội",
        "cmnd": "92897787"
      },
      "fileURL": "talk805.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "346s",
      "date": "19/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda216"
            }
          ],
          "_id": "62ebc0e18a312c984bbda215"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda218"
            }
          ],
          "_id": "62ebc0e18a312c984bbda217"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda21a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda219"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda21c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda21b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda21e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda21d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda220"
            }
          ],
          "_id": "62ebc0e18a312c984bbda21f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda1fc",
    "audioID": 805,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 804,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda1fe"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda1ff"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda200"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda201"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda202"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda203"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda204"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda205"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda206"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda207"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda208"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda1fd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 805,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda20a"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda20b"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda20c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda20d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda20e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda20f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda210"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda211"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda212"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda213"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda214"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda209"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "806",
        "name": "Phan Hải Dạ",
        "cty": "ABC",
        "hotline": "99439990"
      },
      "customer": {
        "customerID": "806",
        "name": "Ngô Dương Lợi",
        "phone": "47733215",
        "address": "Hà Nội",
        "cmnd": "81879004"
      },
      "fileURL": "talk806.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "594s",
      "date": "11/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda23b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda23a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda23d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda23c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda23f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda23e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda241"
            }
          ],
          "_id": "62ebc0e18a312c984bbda240"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda243"
            }
          ],
          "_id": "62ebc0e18a312c984bbda242"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda245"
            }
          ],
          "_id": "62ebc0e18a312c984bbda244"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda221",
    "audioID": 806,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 805,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda223"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda224"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda225"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda226"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda227"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda228"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda229"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda22a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda22b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda22c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda22d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda222"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 806,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda22f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda230"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda231"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda232"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda233"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda234"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda235"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda236"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda237"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda238"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda239"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda22e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "807",
        "name": "Bùi Minh Duy",
        "cty": "ABC",
        "hotline": "16034591"
      },
      "customer": {
        "customerID": "807",
        "name": "Huỳnh Văn An",
        "phone": "90409235",
        "address": "Hà Nội",
        "cmnd": "90400514"
      },
      "fileURL": "talk807.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "152s",
      "date": "17/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda260"
            }
          ],
          "_id": "62ebc0e18a312c984bbda25f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda262"
            }
          ],
          "_id": "62ebc0e18a312c984bbda261"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda264"
            }
          ],
          "_id": "62ebc0e18a312c984bbda263"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda266"
            }
          ],
          "_id": "62ebc0e18a312c984bbda265"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda268"
            }
          ],
          "_id": "62ebc0e18a312c984bbda267"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda26a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda269"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda246",
    "audioID": 807,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 806,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda248"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda249"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda24a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda24b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda24c"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda24d"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda24e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda24f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda250"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda251"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda252"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda247"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 807,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda254"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda255"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda256"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda257"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda258"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda259"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda25a"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda25b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda25c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda25d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda25e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda253"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "808",
        "name": "Huỳnh Khánh Ánh",
        "cty": "ABC",
        "hotline": "72612663"
      },
      "customer": {
        "customerID": "808",
        "name": "Nguyễn Văn Duy",
        "phone": "47273331",
        "address": "Hà Nội",
        "cmnd": "61972374"
      },
      "fileURL": "talk808.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "479s",
      "date": "28/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda285"
            }
          ],
          "_id": "62ebc0e18a312c984bbda284"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda287"
            }
          ],
          "_id": "62ebc0e18a312c984bbda286"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda289"
            }
          ],
          "_id": "62ebc0e18a312c984bbda288"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda28b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda28a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda28d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda28c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda28f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda28e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda26b",
    "audioID": 808,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 807,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda26d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda26e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda26f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda270"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda271"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda272"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda273"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda274"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda275"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda276"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda277"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda26c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 808,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda279"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda27a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda27b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda27c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda27d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda27e"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda27f"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda280"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda281"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda282"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda283"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda278"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "809",
        "name": "Trương Dương Duy",
        "cty": "ABC",
        "hotline": "59031184"
      },
      "customer": {
        "customerID": "809",
        "name": "Bùi Thị Duy",
        "phone": "71276070",
        "address": "Hà Nội",
        "cmnd": "59186409"
      },
      "fileURL": "talk809.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "356s",
      "date": "5/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2aa"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2a9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2ac"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2ab"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2ae"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2ad"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2b0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2af"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2b2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2b1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2b4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2b3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda290",
    "audioID": 809,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 808,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda292"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda293"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda294"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda295"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda296"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda297"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda298"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda299"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda29a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda29b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda29c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda291"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 809,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda29e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda29f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda2a0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2a1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2a2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda2a3"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2a4"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2a5"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2a6"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2a7"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2a8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda29d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "810",
        "name": "Ngô Quốc An",
        "cty": "ABC",
        "hotline": "60227950"
      },
      "customer": {
        "customerID": "810",
        "name": "Bùi An Ánh",
        "phone": "30523927",
        "address": "Hà Nội",
        "cmnd": "69409526"
      },
      "fileURL": "talk810.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "332s",
      "date": "31/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2cf"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2ce"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2d1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2d0"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2d3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2d2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2d5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2d4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2d7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2d6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2d9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2d8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda2b5",
    "audioID": 810,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 809,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda2b7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2b8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2b9"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2ba"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda2bb"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda2bc"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2bd"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2be"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2bf"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda2c0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda2c1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda2b6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 810,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda2c3"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2c4"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda2c5"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda2c6"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2c7"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda2c8"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda2c9"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2ca"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2cb"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2cc"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2cd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda2c2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "811",
        "name": "Trương Quốc Lợi",
        "cty": "ABC",
        "hotline": "95648774"
      },
      "customer": {
        "customerID": "811",
        "name": "Trương Minh Duy",
        "phone": "14787398",
        "address": "Hà Nội",
        "cmnd": "20522633"
      },
      "fileURL": "talk811.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "230s",
      "date": "8/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2f4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2f3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2f6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2f5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2f8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2f7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2fa"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2f9"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda2fc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2fb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda2fe"
            }
          ],
          "_id": "62ebc0e18a312c984bbda2fd"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda2da",
    "audioID": 811,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 810,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda2dc"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda2dd"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2de"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda2df"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2e0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda2e1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2e2"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda2e3"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2e4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2e5"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda2e6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda2db"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 811,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2e8"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2e9"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2ea"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda2eb"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda2ec"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda2ed"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda2ee"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda2ef"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda2f0"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda2f1"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda2f2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda2e7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "812",
        "name": "Ngô Văn Ánh",
        "cty": "ABC",
        "hotline": "27028616"
      },
      "customer": {
        "customerID": "812",
        "name": "Ngô Thị An",
        "phone": "46363970",
        "address": "Hà Nội",
        "cmnd": "40781310"
      },
      "fileURL": "talk812.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "216s",
      "date": "5/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda319"
            }
          ],
          "_id": "62ebc0e18a312c984bbda318"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda31b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda31a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda31d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda31c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda31f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda31e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda321"
            }
          ],
          "_id": "62ebc0e18a312c984bbda320"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda323"
            }
          ],
          "_id": "62ebc0e18a312c984bbda322"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda2ff",
    "audioID": 812,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 811,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda301"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda302"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda303"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda304"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda305"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda306"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda307"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda308"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda309"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda30a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda30b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda300"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 812,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda30d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda30e"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda30f"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda310"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda311"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda312"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda313"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda314"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda315"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda316"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda317"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda30c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "813",
        "name": "Lê Khánh Hồng",
        "cty": "ABC",
        "hotline": "10341397"
      },
      "customer": {
        "customerID": "813",
        "name": "Bùi Dương Khánh",
        "phone": "83357977",
        "address": "Hà Nội",
        "cmnd": "64496801"
      },
      "fileURL": "talk813.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "458s",
      "date": "5/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda33e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda33d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda340"
            }
          ],
          "_id": "62ebc0e18a312c984bbda33f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda342"
            }
          ],
          "_id": "62ebc0e18a312c984bbda341"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda344"
            }
          ],
          "_id": "62ebc0e18a312c984bbda343"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda346"
            }
          ],
          "_id": "62ebc0e18a312c984bbda345"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda348"
            }
          ],
          "_id": "62ebc0e18a312c984bbda347"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda324",
    "audioID": 813,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 812,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda326"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda327"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda328"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda329"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda32a"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda32b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda32c"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda32d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda32e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda32f"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda330"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda325"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 813,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda332"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda333"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda334"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda335"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda336"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda337"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda338"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda339"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda33a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda33b"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda33c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda331"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "814",
        "name": "Đặng Dương Khánh",
        "cty": "ABC",
        "hotline": "75118417"
      },
      "customer": {
        "customerID": "814",
        "name": "Ngô Minh Ánh",
        "phone": "99255797",
        "address": "Hà Nội",
        "cmnd": "26741634"
      },
      "fileURL": "talk814.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "19s",
      "date": "6/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda363"
            }
          ],
          "_id": "62ebc0e18a312c984bbda362"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda365"
            }
          ],
          "_id": "62ebc0e18a312c984bbda364"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda367"
            }
          ],
          "_id": "62ebc0e18a312c984bbda366"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda369"
            }
          ],
          "_id": "62ebc0e18a312c984bbda368"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda36b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda36a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda36d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda36c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda349",
    "audioID": 814,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 813,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda34b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda34c"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda34d"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda34e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda34f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda350"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda351"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda352"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda353"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda354"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda355"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda34a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 814,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda357"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda358"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda359"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda35a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda35b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda35c"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda35d"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda35e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda35f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda360"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda361"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda356"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "815",
        "name": "Nguyễn Khánh Quyền",
        "cty": "ABC",
        "hotline": "22817541"
      },
      "customer": {
        "customerID": "815",
        "name": "Ngô Khánh Hồng",
        "phone": "25586538",
        "address": "Hà Nội",
        "cmnd": "46283813"
      },
      "fileURL": "talk815.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "536s",
      "date": "24/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda388"
            }
          ],
          "_id": "62ebc0e18a312c984bbda387"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda38a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda389"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda38c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda38b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda38e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda38d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda390"
            }
          ],
          "_id": "62ebc0e18a312c984bbda38f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda392"
            }
          ],
          "_id": "62ebc0e18a312c984bbda391"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda36e",
    "audioID": 815,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 814,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda370"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda371"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda372"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda373"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda374"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda375"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda376"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda377"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda378"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda379"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda37a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda36f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 815,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda37c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda37d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda37e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda37f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda380"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda381"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda382"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda383"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda384"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda385"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda386"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda37b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "816",
        "name": "Phan Phương An",
        "cty": "ABC",
        "hotline": "88504209"
      },
      "customer": {
        "customerID": "816",
        "name": "Lê Phương Quyền",
        "phone": "86091026",
        "address": "Hà Nội",
        "cmnd": "10558530"
      },
      "fileURL": "talk816.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "379s",
      "date": "18/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda3ad"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3ac"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3af"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3ae"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3b1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3b0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3b3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3b2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3b4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3b7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3b6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda393",
    "audioID": 816,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 815,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda395"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda396"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda397"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda398"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda399"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda39a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda39b"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda39c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda39d"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda39e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda39f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda394"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 816,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3a1"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda3a2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3a3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3a4"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3a5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3a6"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3a7"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda3a8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3a9"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3aa"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3ab"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda3a0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "817",
        "name": "Nguyễn Minh Cảnh",
        "cty": "ABC",
        "hotline": "48376964"
      },
      "customer": {
        "customerID": "817",
        "name": "Phạm Văn Cảnh",
        "phone": "29842625",
        "address": "Hà Nội",
        "cmnd": "76421319"
      },
      "fileURL": "talk817.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "199s",
      "date": "25/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3d2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3d1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3d3"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3d6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3d5"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3d8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3d7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3da"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3d9"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3dc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3db"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda3b8",
    "audioID": 817,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 816,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda3ba"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda3bb"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3bc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda3bd"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3be"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3bf"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda3c0"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3c1"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3c2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3c3"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda3c4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda3b9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 817,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda3c6"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3c7"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3c8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda3c9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda3ca"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3cb"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3cc"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda3cd"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3ce"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda3cf"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda3d0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda3c5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "818",
        "name": "Đặng Phương Dạ",
        "cty": "ABC",
        "hotline": "27876009"
      },
      "customer": {
        "customerID": "818",
        "name": "Ngô Dương Khánh",
        "phone": "69283065",
        "address": "Hà Nội",
        "cmnd": "97023230"
      },
      "fileURL": "talk818.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "575s",
      "date": "31/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda3f7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3f6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3f8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3fb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3fa"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda3fd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3fc"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda3ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbda3fe"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda401"
            }
          ],
          "_id": "62ebc0e18a312c984bbda400"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda3dd",
    "audioID": 818,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 817,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda3df"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3e0"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3e1"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda3e2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3e3"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3e4"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3e5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3e6"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda3e7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda3e8"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3e9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda3de"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 818,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3eb"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3ec"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3ed"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3ee"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3ef"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda3f0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3f1"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda3f2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda3f3"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda3f4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda3f5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda3ea"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "819",
        "name": "Trần Văn An",
        "cty": "ABC",
        "hotline": "24441804"
      },
      "customer": {
        "customerID": "819",
        "name": "Trương Hữu Cảnh",
        "phone": "45113685",
        "address": "Hà Nội",
        "cmnd": "73381870"
      },
      "fileURL": "talk819.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "215s",
      "date": "26/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda41c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda41b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda41e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda41d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda420"
            }
          ],
          "_id": "62ebc0e18a312c984bbda41f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda422"
            }
          ],
          "_id": "62ebc0e18a312c984bbda421"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda424"
            }
          ],
          "_id": "62ebc0e18a312c984bbda423"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda426"
            }
          ],
          "_id": "62ebc0e18a312c984bbda425"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda402",
    "audioID": 819,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 818,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda404"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda405"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda406"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda407"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda408"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda409"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda40a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda40b"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda40c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda40d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda40e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda403"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 819,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda410"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda411"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda412"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda413"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda414"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda415"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda416"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda417"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda418"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda419"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda41a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda40f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "820",
        "name": "Đặng Quốc Dạ",
        "cty": "ABC",
        "hotline": "40906560"
      },
      "customer": {
        "customerID": "820",
        "name": "Huỳnh Văn Ánh",
        "phone": "88595072",
        "address": "Hà Nội",
        "cmnd": "17770836"
      },
      "fileURL": "talk820.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "187s",
      "date": "14/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda441"
            }
          ],
          "_id": "62ebc0e18a312c984bbda440"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda443"
            }
          ],
          "_id": "62ebc0e18a312c984bbda442"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda445"
            }
          ],
          "_id": "62ebc0e18a312c984bbda444"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda447"
            }
          ],
          "_id": "62ebc0e18a312c984bbda446"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda449"
            }
          ],
          "_id": "62ebc0e18a312c984bbda448"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda44b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda44a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda427",
    "audioID": 820,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 819,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda429"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda42a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda42b"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda42c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda42d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda42e"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda42f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda430"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda431"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda432"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda433"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda428"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 820,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda435"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda436"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda437"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda438"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda439"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda43a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda43b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda43c"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda43d"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda43e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda43f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda434"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "821",
        "name": "Trương Hải Quyền",
        "cty": "ABC",
        "hotline": "83899403"
      },
      "customer": {
        "customerID": "821",
        "name": "Bùi An Cảnh",
        "phone": "34889143",
        "address": "Hà Nội",
        "cmnd": "14020003"
      },
      "fileURL": "talk821.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "115s",
      "date": "25/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda466"
            }
          ],
          "_id": "62ebc0e18a312c984bbda465"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda468"
            }
          ],
          "_id": "62ebc0e18a312c984bbda467"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda46a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda469"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda46c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda46b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda46e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda46d"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda470"
            }
          ],
          "_id": "62ebc0e18a312c984bbda46f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda44c",
    "audioID": 821,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 820,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda44e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda44f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda450"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda451"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda452"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda453"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda454"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda455"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda456"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda457"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda458"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda44d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 821,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda45a"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda45b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda45c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda45d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda45e"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda45f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda460"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda461"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda462"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda463"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda464"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda459"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "822",
        "name": "Huỳnh Hữu Hồng",
        "cty": "ABC",
        "hotline": "81860527"
      },
      "customer": {
        "customerID": "822",
        "name": "Bùi Khánh Hồng",
        "phone": "32238880",
        "address": "Hà Nội",
        "cmnd": "21958153"
      },
      "fileURL": "talk822.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "146s",
      "date": "6/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda48b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda48a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda48d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda48c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda48f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda48e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda491"
            }
          ],
          "_id": "62ebc0e18a312c984bbda490"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda493"
            }
          ],
          "_id": "62ebc0e18a312c984bbda492"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda495"
            }
          ],
          "_id": "62ebc0e18a312c984bbda494"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda471",
    "audioID": 822,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 821,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda473"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda474"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda475"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda476"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda477"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda478"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda479"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda47a"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda47b"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda47c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda47d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda472"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 822,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda47f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda480"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda481"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda482"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda483"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda484"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda485"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda486"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda487"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda488"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda489"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda47e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "823",
        "name": "Huỳnh Dương Cảnh",
        "cty": "ABC",
        "hotline": "98038500"
      },
      "customer": {
        "customerID": "823",
        "name": "Phan Dương Thái Qúy",
        "phone": "96754543",
        "address": "Hà Nội",
        "cmnd": "18731846"
      },
      "fileURL": "talk823.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "467s",
      "date": "13/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4b0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4af"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4b2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4b1"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4b4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4b3"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4b6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4b5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda4b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4b7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4ba"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4b9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda496",
    "audioID": 823,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 822,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda498"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda499"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda49a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda49b"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda49c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda49d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda49e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda49f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4a0"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4a1"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda4a2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda497"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 823,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4a4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda4a5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4a6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4a7"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4a8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4a9"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4aa"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda4ab"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda4ac"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4ad"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4ae"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda4a3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "824",
        "name": "Trần An Dạ",
        "cty": "ABC",
        "hotline": "68254515"
      },
      "customer": {
        "customerID": "824",
        "name": "Phan An Hồng",
        "phone": "37358978",
        "address": "Hà Nội",
        "cmnd": "98729742"
      },
      "fileURL": "talk824.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "563s",
      "date": "23/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4d5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4d4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4d7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4d6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4d9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4d8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4db"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4da"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4dc"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4df"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4de"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda4bb",
    "audioID": 824,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 823,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4bd"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4be"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda4bf"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda4c0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda4c1"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4c2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4c3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4c4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4c5"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda4c6"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4c7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda4bc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 824,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda4c9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda4ca"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda4cb"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4cc"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4cd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4ce"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4cf"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4d0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4d1"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4d2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4d3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda4c8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "825",
        "name": "Đặng Văn Hồng",
        "cty": "ABC",
        "hotline": "18818882"
      },
      "customer": {
        "customerID": "825",
        "name": "Đặng Phương Dạ",
        "phone": "63430691",
        "address": "Hà Nội",
        "cmnd": "13456932"
      },
      "fileURL": "talk825.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "200s",
      "date": "21/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4fa"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4f9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda4fc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4fb"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda4fe"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4fd"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda500"
            }
          ],
          "_id": "62ebc0e18a312c984bbda4ff"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda502"
            }
          ],
          "_id": "62ebc0e18a312c984bbda501"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda504"
            }
          ],
          "_id": "62ebc0e18a312c984bbda503"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda4e0",
    "audioID": 825,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 824,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda4e2"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4e3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4e4"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4e5"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda4e6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4e7"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda4e8"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4e9"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda4ea"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda4eb"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4ec"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda4e1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 825,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda4ee"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda4ef"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda4f0"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4f1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda4f2"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4f3"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4f4"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda4f5"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda4f6"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda4f7"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda4f8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda4ed"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "826",
        "name": "Lê Hải Cảnh",
        "cty": "ABC",
        "hotline": "90228816"
      },
      "customer": {
        "customerID": "826",
        "name": "Phạm Hải Khánh",
        "phone": "82589898",
        "address": "Hà Nội",
        "cmnd": "98977546"
      },
      "fileURL": "talk826.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "465s",
      "date": "23/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda51f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda51e"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda521"
            }
          ],
          "_id": "62ebc0e18a312c984bbda520"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda523"
            }
          ],
          "_id": "62ebc0e18a312c984bbda522"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda525"
            }
          ],
          "_id": "62ebc0e18a312c984bbda524"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda527"
            }
          ],
          "_id": "62ebc0e18a312c984bbda526"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda529"
            }
          ],
          "_id": "62ebc0e18a312c984bbda528"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda505",
    "audioID": 826,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 825,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda507"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda508"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda509"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda50a"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda50b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda50c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda50d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda50e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda50f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda510"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda511"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda506"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 826,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda513"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda514"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda515"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda516"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda517"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda518"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda519"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda51a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda51b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda51c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda51d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda512"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "827",
        "name": "Bùi Hải Quyền",
        "cty": "ABC",
        "hotline": "54074187"
      },
      "customer": {
        "customerID": "827",
        "name": "Phan Hữu Hồng",
        "phone": "12336734",
        "address": "Hà Nội",
        "cmnd": "31476453"
      },
      "fileURL": "talk827.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "89s",
      "date": "1/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda544"
            }
          ],
          "_id": "62ebc0e18a312c984bbda543"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda546"
            }
          ],
          "_id": "62ebc0e18a312c984bbda545"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda548"
            }
          ],
          "_id": "62ebc0e18a312c984bbda547"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda54a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda549"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda54c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda54b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda54e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda54d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda52a",
    "audioID": 827,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 826,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda52c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda52d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda52e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda52f"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda530"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda531"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda532"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda533"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda534"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda535"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda536"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda52b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 827,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda538"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda539"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda53a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda53b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda53c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda53d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda53e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda53f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda540"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda541"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda542"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda537"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "828",
        "name": "Nguyễn Hải Quyền",
        "cty": "ABC",
        "hotline": "47822355"
      },
      "customer": {
        "customerID": "828",
        "name": "Đặng An Duy",
        "phone": "73452857",
        "address": "Hà Nội",
        "cmnd": "74975489"
      },
      "fileURL": "talk828.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "414s",
      "date": "29/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda569"
            }
          ],
          "_id": "62ebc0e18a312c984bbda568"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda56b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda56a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda56d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda56c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda56f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda56e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda571"
            }
          ],
          "_id": "62ebc0e18a312c984bbda570"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda573"
            }
          ],
          "_id": "62ebc0e18a312c984bbda572"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda54f",
    "audioID": 828,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 827,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda551"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda552"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda553"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda554"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda555"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda556"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda557"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda558"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda559"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda55a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda55b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda550"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 828,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda55d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda55e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda55f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda560"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda561"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda562"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda563"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda564"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda565"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda566"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda567"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda55c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "829",
        "name": "Lê Dương Hồng",
        "cty": "ABC",
        "hotline": "30902970"
      },
      "customer": {
        "customerID": "829",
        "name": "Huỳnh Dương An",
        "phone": "18197877",
        "address": "Hà Nội",
        "cmnd": "98158359"
      },
      "fileURL": "talk829.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "448s",
      "date": "15/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda58e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda58d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda590"
            }
          ],
          "_id": "62ebc0e18a312c984bbda58f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda592"
            }
          ],
          "_id": "62ebc0e18a312c984bbda591"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda594"
            }
          ],
          "_id": "62ebc0e18a312c984bbda593"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda596"
            }
          ],
          "_id": "62ebc0e18a312c984bbda595"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda598"
            }
          ],
          "_id": "62ebc0e18a312c984bbda597"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda574",
    "audioID": 829,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 828,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda576"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda577"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda578"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda579"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda57a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda57b"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda57c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda57d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda57e"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda57f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda580"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda575"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 829,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda582"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda583"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda584"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda585"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda586"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda587"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda588"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda589"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda58a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda58b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda58c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda581"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "830",
        "name": "Lê Hải Hồng",
        "cty": "ABC",
        "hotline": "57244603"
      },
      "customer": {
        "customerID": "830",
        "name": "Ngô An Duy",
        "phone": "84989278",
        "address": "Hà Nội",
        "cmnd": "46167112"
      },
      "fileURL": "talk830.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "9s",
      "date": "23/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5b3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5b2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5b4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda5b7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5b6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5b9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5b8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda5bb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5ba"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5bd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5bc"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda599",
    "audioID": 830,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 829,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda59b"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda59c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda59d"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda59e"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda59f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda5a0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5a1"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5a2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5a3"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5a4"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5a5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda59a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 830,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda5a7"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5a8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5a9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda5aa"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5ab"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5ac"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5ad"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda5ae"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5af"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5b0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda5b1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda5a6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "831",
        "name": "Bùi Dương Cảnh",
        "cty": "ABC",
        "hotline": "95824201"
      },
      "customer": {
        "customerID": "831",
        "name": "Nguyễn Hữu Lợi",
        "phone": "44925620",
        "address": "Hà Nội",
        "cmnd": "44679078"
      },
      "fileURL": "talk831.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "441s",
      "date": "20/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda5d8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5d7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5da"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5d9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda5dc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5db"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5de"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5dd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5e0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5df"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda5e2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5e1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda5be",
    "audioID": 831,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 830,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5c0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda5c1"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda5c2"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5c3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5c4"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda5c5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5c6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5c7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5c8"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda5c9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5ca"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda5bf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 831,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5cc"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda5cd"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda5ce"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5cf"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda5d0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda5d1"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5d2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5d3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5d4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5d5"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda5d6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda5cb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "832",
        "name": "Bùi Phương Khánh",
        "cty": "ABC",
        "hotline": "73035901"
      },
      "customer": {
        "customerID": "832",
        "name": "Lê Minh Khánh",
        "phone": "13415915",
        "address": "Hà Nội",
        "cmnd": "72968512"
      },
      "fileURL": "talk832.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "55s",
      "date": "5/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5fd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5fc"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda5ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbda5fe"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda601"
            }
          ],
          "_id": "62ebc0e18a312c984bbda600"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda603"
            }
          ],
          "_id": "62ebc0e18a312c984bbda602"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda605"
            }
          ],
          "_id": "62ebc0e18a312c984bbda604"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda607"
            }
          ],
          "_id": "62ebc0e18a312c984bbda606"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda5e3",
    "audioID": 832,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 831,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5e5"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5e6"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda5e7"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda5e8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5e9"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5ea"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5eb"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda5ec"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda5ed"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda5ee"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5ef"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda5e4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 832,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda5f1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda5f2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda5f3"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda5f4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5f5"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda5f6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda5f7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5f8"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda5f9"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda5fa"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda5fb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda5f0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "833",
        "name": "Nguyễn Văn Duy",
        "cty": "ABC",
        "hotline": "44165724"
      },
      "customer": {
        "customerID": "833",
        "name": "Nguyễn Thị Cảnh",
        "phone": "19140943",
        "address": "Hà Nội",
        "cmnd": "18318798"
      },
      "fileURL": "talk833.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "386s",
      "date": "15/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda622"
            }
          ],
          "_id": "62ebc0e18a312c984bbda621"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda624"
            }
          ],
          "_id": "62ebc0e18a312c984bbda623"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda626"
            }
          ],
          "_id": "62ebc0e18a312c984bbda625"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda628"
            }
          ],
          "_id": "62ebc0e18a312c984bbda627"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda62a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda629"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda62c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda62b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda608",
    "audioID": 833,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 832,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda60a"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda60b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda60c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda60d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda60e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda60f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda610"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda611"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda612"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda613"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda614"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda609"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 833,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda616"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda617"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda618"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda619"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda61a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda61b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda61c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda61d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda61e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda61f"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda620"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda615"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "834",
        "name": "Trương Minh Hồng",
        "cty": "ABC",
        "hotline": "95806520"
      },
      "customer": {
        "customerID": "834",
        "name": "Phan Hữu Thái Qúy",
        "phone": "37596833",
        "address": "Hà Nội",
        "cmnd": "70314277"
      },
      "fileURL": "talk834.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "317s",
      "date": "30/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda647"
            }
          ],
          "_id": "62ebc0e18a312c984bbda646"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda649"
            }
          ],
          "_id": "62ebc0e18a312c984bbda648"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda64b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda64a"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda64d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda64c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda64f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda64e"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda651"
            }
          ],
          "_id": "62ebc0e18a312c984bbda650"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda62d",
    "audioID": 834,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 833,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda62f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda630"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda631"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda632"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda633"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda634"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda635"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda636"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda637"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda638"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda639"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda62e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 834,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda63b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda63c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda63d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda63e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda63f"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda640"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda641"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda642"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda643"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda644"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda645"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda63a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "835",
        "name": "Đặng Hữu Lợi",
        "cty": "ABC",
        "hotline": "10060196"
      },
      "customer": {
        "customerID": "835",
        "name": "Bùi Hải Hồng",
        "phone": "62954392",
        "address": "Hà Nội",
        "cmnd": "51347733"
      },
      "fileURL": "talk835.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "379s",
      "date": "20/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda66c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda66b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda66e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda66d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda670"
            }
          ],
          "_id": "62ebc0e18a312c984bbda66f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda672"
            }
          ],
          "_id": "62ebc0e18a312c984bbda671"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda674"
            }
          ],
          "_id": "62ebc0e18a312c984bbda673"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda676"
            }
          ],
          "_id": "62ebc0e18a312c984bbda675"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda652",
    "audioID": 835,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 834,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda654"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda655"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda656"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda657"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda658"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda659"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda65a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda65b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda65c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda65d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda65e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda653"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 835,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda660"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda661"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda662"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda663"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda664"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda665"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda666"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda667"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda668"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda669"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda66a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda65f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "836",
        "name": "Lê Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "82289802"
      },
      "customer": {
        "customerID": "836",
        "name": "Lê An Hồng",
        "phone": "38483211",
        "address": "Hà Nội",
        "cmnd": "79680765"
      },
      "fileURL": "talk836.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "479s",
      "date": "18/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda691"
            }
          ],
          "_id": "62ebc0e18a312c984bbda690"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda693"
            }
          ],
          "_id": "62ebc0e18a312c984bbda692"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda695"
            }
          ],
          "_id": "62ebc0e18a312c984bbda694"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda697"
            }
          ],
          "_id": "62ebc0e18a312c984bbda696"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda699"
            }
          ],
          "_id": "62ebc0e18a312c984bbda698"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda69b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda69a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda677",
    "audioID": 836,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 835,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda679"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda67a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda67b"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda67c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda67d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda67e"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda67f"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda680"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda681"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda682"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda683"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda678"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 836,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda685"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda686"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda687"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda688"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda689"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda68a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda68b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda68c"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda68d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda68e"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda68f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda684"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "837",
        "name": "Phan Minh Lợi",
        "cty": "ABC",
        "hotline": "25024634"
      },
      "customer": {
        "customerID": "837",
        "name": "Huỳnh Hải Ánh",
        "phone": "87015823",
        "address": "Hà Nội",
        "cmnd": "14547346"
      },
      "fileURL": "talk837.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "172s",
      "date": "22/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6b6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6b5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6b7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6ba"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6b9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6bc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6bb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6be"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6bd"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6c0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6bf"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda69c",
    "audioID": 837,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 836,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda69e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda69f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6a0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6a1"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda6a2"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6a3"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6a4"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6a5"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6a6"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda6a7"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6a8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda69d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 837,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6aa"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6ab"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6ac"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6ad"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6ae"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda6af"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6b0"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6b1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6b2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6b3"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6b4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda6a9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "838",
        "name": "Đặng Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "44486705"
      },
      "customer": {
        "customerID": "838",
        "name": "Trần Thị An",
        "phone": "31126403",
        "address": "Hà Nội",
        "cmnd": "87126070"
      },
      "fileURL": "talk838.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "440s",
      "date": "12/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6db"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6da"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6dc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda6df"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6de"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6e1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6e0"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6e3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6e2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda6e5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6e4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda6c1",
    "audioID": 838,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 837,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6c3"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6c4"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6c5"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6c6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6c7"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6c8"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6c9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6ca"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6cb"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6cc"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6cd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda6c2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 838,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6cf"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6d0"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6d1"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6d2"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6d3"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6d4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6d5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6d6"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6d7"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6d8"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6d9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda6ce"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "839",
        "name": "Lê Phương Ánh",
        "cty": "ABC",
        "hotline": "34039308"
      },
      "customer": {
        "customerID": "839",
        "name": "Phan An An",
        "phone": "89600997",
        "address": "Hà Nội",
        "cmnd": "22359177"
      },
      "fileURL": "talk839.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "363s",
      "date": "15/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda700"
            }
          ],
          "_id": "62ebc0e18a312c984bbda6ff"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda702"
            }
          ],
          "_id": "62ebc0e18a312c984bbda701"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda704"
            }
          ],
          "_id": "62ebc0e18a312c984bbda703"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda706"
            }
          ],
          "_id": "62ebc0e18a312c984bbda705"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda708"
            }
          ],
          "_id": "62ebc0e18a312c984bbda707"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda70a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda709"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda6e6",
    "audioID": 839,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 838,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6e8"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6e9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda6ea"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda6eb"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda6ec"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda6ed"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6ee"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6ef"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda6f0"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6f1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6f2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda6e7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 839,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda6f4"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6f5"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6f6"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda6f7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda6f8"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6f9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda6fa"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6fb"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda6fc"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6fd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda6fe"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda6f3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "840",
        "name": "Trần Minh Duy",
        "cty": "ABC",
        "hotline": "17438481"
      },
      "customer": {
        "customerID": "840",
        "name": "Ngô Hải Khánh",
        "phone": "28823593",
        "address": "Hà Nội",
        "cmnd": "38042529"
      },
      "fileURL": "talk840.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "561s",
      "date": "28/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda725"
            }
          ],
          "_id": "62ebc0e18a312c984bbda724"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda727"
            }
          ],
          "_id": "62ebc0e18a312c984bbda726"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda729"
            }
          ],
          "_id": "62ebc0e18a312c984bbda728"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda72b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda72a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda72d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda72c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda72f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda72e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda70b",
    "audioID": 840,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 839,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda70d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda70e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda70f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda710"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda711"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda712"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda713"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda714"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda715"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda716"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda717"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda70c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 840,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda719"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda71a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda71b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda71c"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda71d"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda71e"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda71f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda720"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda721"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda722"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda723"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda718"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "841",
        "name": "Nguyễn Quốc Cảnh",
        "cty": "ABC",
        "hotline": "53604399"
      },
      "customer": {
        "customerID": "841",
        "name": "Lê Khánh Thái Qúy",
        "phone": "86304708",
        "address": "Hà Nội",
        "cmnd": "29405913"
      },
      "fileURL": "talk841.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "145s",
      "date": "6/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda74a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda749"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda74c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda74b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda74e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda74d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda750"
            }
          ],
          "_id": "62ebc0e18a312c984bbda74f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda752"
            }
          ],
          "_id": "62ebc0e18a312c984bbda751"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda754"
            }
          ],
          "_id": "62ebc0e18a312c984bbda753"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda730",
    "audioID": 841,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 840,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda732"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda733"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda734"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda735"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda736"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda737"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda738"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda739"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda73a"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda73b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda73c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda731"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 841,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda73e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda73f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda740"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda741"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda742"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda743"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda744"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda745"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda746"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda747"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda748"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda73d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "842",
        "name": "Bùi An Thái Qúy",
        "cty": "ABC",
        "hotline": "28664352"
      },
      "customer": {
        "customerID": "842",
        "name": "Trần Thị Thái Qúy",
        "phone": "64854175",
        "address": "Hà Nội",
        "cmnd": "74431143"
      },
      "fileURL": "talk842.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "297s",
      "date": "15/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda76f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda76e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda771"
            }
          ],
          "_id": "62ebc0e18a312c984bbda770"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda773"
            }
          ],
          "_id": "62ebc0e18a312c984bbda772"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda775"
            }
          ],
          "_id": "62ebc0e18a312c984bbda774"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda777"
            }
          ],
          "_id": "62ebc0e18a312c984bbda776"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda779"
            }
          ],
          "_id": "62ebc0e18a312c984bbda778"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda755",
    "audioID": 842,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 841,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda757"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda758"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda759"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda75a"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda75b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda75c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda75d"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda75e"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda75f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda760"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda761"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda756"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 842,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda763"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda764"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda765"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda766"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda767"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda768"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda769"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda76a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda76b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda76c"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda76d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda762"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "843",
        "name": "Phan Thị Ánh",
        "cty": "ABC",
        "hotline": "60352966"
      },
      "customer": {
        "customerID": "843",
        "name": "Phạm Phương Quyền",
        "phone": "64705986",
        "address": "Hà Nội",
        "cmnd": "35334449"
      },
      "fileURL": "talk843.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "425s",
      "date": "11/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda794"
            }
          ],
          "_id": "62ebc0e18a312c984bbda793"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda796"
            }
          ],
          "_id": "62ebc0e18a312c984bbda795"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda798"
            }
          ],
          "_id": "62ebc0e18a312c984bbda797"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda79a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda799"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda79c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda79b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda79e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda79d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda77a",
    "audioID": 843,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 842,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda77c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda77d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda77e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda77f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda780"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda781"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda782"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda783"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda784"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda785"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda786"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda77b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 843,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda788"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda789"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda78a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda78b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda78c"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda78d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda78e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda78f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda790"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda791"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda792"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda787"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "844",
        "name": "Trương Khánh Khánh",
        "cty": "ABC",
        "hotline": "67840943"
      },
      "customer": {
        "customerID": "844",
        "name": "Trương Văn Cảnh",
        "phone": "47015995",
        "address": "Hà Nội",
        "cmnd": "38709286"
      },
      "fileURL": "talk844.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "517s",
      "date": "8/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7b9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7b8"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7bb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7ba"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7bd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7bc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7bf"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7be"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7c1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7c0"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7c3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7c2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda79f",
    "audioID": 844,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 843,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7a1"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7a2"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7a3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7a4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7a5"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7a6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7a7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7a8"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7a9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7aa"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7ab"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7a0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 844,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7ad"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7ae"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7af"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda7b0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda7b1"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7b2"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7b3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7b4"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7b5"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7b6"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7b7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7ac"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "845",
        "name": "Bùi Dương Quyền",
        "cty": "ABC",
        "hotline": "93367716"
      },
      "customer": {
        "customerID": "845",
        "name": "Phạm Quốc Dạ",
        "phone": "93718264",
        "address": "Hà Nội",
        "cmnd": "88743892"
      },
      "fileURL": "talk845.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "27s",
      "date": "5/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7de"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7dd"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7e0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7df"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7e2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7e1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda7e4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7e3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda7e6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7e5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda7e8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda7e7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda7c4",
    "audioID": 845,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 844,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7c6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda7c7"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7c8"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7c9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7ca"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7cb"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7cc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7cd"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7ce"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7cf"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7d0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7c5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 845,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7d2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7d3"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7d4"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7d5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7d6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7d7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7d8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7d9"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda7da"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda7db"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda7dc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7d1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "846",
        "name": "Phan Hữu Hồng",
        "cty": "ABC",
        "hotline": "39609528"
      },
      "customer": {
        "customerID": "846",
        "name": "Bùi Minh Khánh",
        "phone": "22258673",
        "address": "Hà Nội",
        "cmnd": "29659328"
      },
      "fileURL": "talk846.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "543s",
      "date": "13/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda803"
            }
          ],
          "_id": "62ebc0e18a312c984bbda802"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda805"
            }
          ],
          "_id": "62ebc0e18a312c984bbda804"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda807"
            }
          ],
          "_id": "62ebc0e18a312c984bbda806"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda809"
            }
          ],
          "_id": "62ebc0e18a312c984bbda808"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda80b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda80a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda80d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda80c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda7e9",
    "audioID": 846,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 845,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7eb"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7ec"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7ed"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7ee"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda7ef"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda7f0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7f1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7f2"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda7f3"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda7f4"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7f5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7ea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 846,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7f7"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7f8"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda7f9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7fa"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda7fb"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7fc"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda7fd"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda7fe"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda7ff"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda800"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda801"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda7f6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "847",
        "name": "Đặng Minh Quyền",
        "cty": "ABC",
        "hotline": "52469938"
      },
      "customer": {
        "customerID": "847",
        "name": "Phạm Khánh Quyền",
        "phone": "41625004",
        "address": "Hà Nội",
        "cmnd": "32501599"
      },
      "fileURL": "talk847.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "60s",
      "date": "26/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda828"
            }
          ],
          "_id": "62ebc0e18a312c984bbda827"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda82a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda829"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda82c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda82b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda82e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda82d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda830"
            }
          ],
          "_id": "62ebc0e18a312c984bbda82f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda832"
            }
          ],
          "_id": "62ebc0e18a312c984bbda831"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda80e",
    "audioID": 847,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 846,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda810"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda811"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda812"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda813"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda814"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda815"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda816"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda817"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda818"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda819"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda81a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda80f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 847,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda81c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda81d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda81e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda81f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda820"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda821"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda822"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda823"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda824"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda825"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda826"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda81b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "848",
        "name": "Trần Văn Quyền",
        "cty": "ABC",
        "hotline": "39834897"
      },
      "customer": {
        "customerID": "848",
        "name": "Trương Hữu Khánh",
        "phone": "92395854",
        "address": "Hà Nội",
        "cmnd": "69743952"
      },
      "fileURL": "talk848.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "442s",
      "date": "14/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda84d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda84c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda84f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda84e"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda851"
            }
          ],
          "_id": "62ebc0e18a312c984bbda850"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda853"
            }
          ],
          "_id": "62ebc0e18a312c984bbda852"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda855"
            }
          ],
          "_id": "62ebc0e18a312c984bbda854"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda857"
            }
          ],
          "_id": "62ebc0e18a312c984bbda856"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda833",
    "audioID": 848,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 847,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda835"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda836"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda837"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda838"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda839"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda83a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda83b"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda83c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda83d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda83e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda83f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda834"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 848,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda841"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda842"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda843"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda844"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda845"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda846"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda847"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda848"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda849"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda84a"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda84b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda840"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "849",
        "name": "Phan Khánh Dạ",
        "cty": "ABC",
        "hotline": "10921989"
      },
      "customer": {
        "customerID": "849",
        "name": "Đặng Khánh Dạ",
        "phone": "54296764",
        "address": "Hà Nội",
        "cmnd": "41537217"
      },
      "fileURL": "talk849.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "481s",
      "date": "26/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda872"
            }
          ],
          "_id": "62ebc0e18a312c984bbda871"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda874"
            }
          ],
          "_id": "62ebc0e18a312c984bbda873"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda876"
            }
          ],
          "_id": "62ebc0e18a312c984bbda875"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda878"
            }
          ],
          "_id": "62ebc0e18a312c984bbda877"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda87a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda879"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda87c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda87b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda858",
    "audioID": 849,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 848,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda85a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda85b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda85c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda85d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda85e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda85f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda860"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda861"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda862"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda863"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda864"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda859"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 849,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda866"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda867"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda868"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda869"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda86a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda86b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda86c"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda86d"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda86e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda86f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda870"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda865"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "850",
        "name": "Đặng Văn Lợi",
        "cty": "ABC",
        "hotline": "58904149"
      },
      "customer": {
        "customerID": "850",
        "name": "Lê Khánh Ánh",
        "phone": "28259093",
        "address": "Hà Nội",
        "cmnd": "11598550"
      },
      "fileURL": "talk850.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "441s",
      "date": "26/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda897"
            }
          ],
          "_id": "62ebc0e18a312c984bbda896"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda899"
            }
          ],
          "_id": "62ebc0e18a312c984bbda898"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda89b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda89a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda89d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda89c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda89f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda89e"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8a1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8a0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda87d",
    "audioID": 850,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 849,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda87f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda880"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda881"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda882"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda883"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda884"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda885"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda886"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda887"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda888"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda889"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda87e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 850,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda88b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda88c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda88d"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda88e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda88f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda890"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda891"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda892"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda893"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda894"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda895"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda88a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "851",
        "name": "Ngô Hải An",
        "cty": "ABC",
        "hotline": "54551578"
      },
      "customer": {
        "customerID": "851",
        "name": "Đặng Phương Ánh",
        "phone": "12303606",
        "address": "Hà Nội",
        "cmnd": "72453101"
      },
      "fileURL": "talk851.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "69s",
      "date": "24/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8bc"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8bb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8be"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8bd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8c0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8bf"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8c2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8c1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8c4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8c3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8c6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8c5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda8a2",
    "audioID": 851,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 850,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda8a4"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8a5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8a6"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8a7"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8a8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8a9"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8aa"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda8ab"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8ac"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8ad"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8ae"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8a3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 851,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8b0"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8b1"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8b2"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda8b3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8b4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8b5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8b6"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8b7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda8b8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8b9"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8ba"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8af"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "852",
        "name": "Nguyễn Văn Quyền",
        "cty": "ABC",
        "hotline": "55419456"
      },
      "customer": {
        "customerID": "852",
        "name": "Nguyễn Quốc Duy",
        "phone": "15991201",
        "address": "Hà Nội",
        "cmnd": "20882715"
      },
      "fileURL": "talk852.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "477s",
      "date": "17/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8e1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8e0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8e3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8e2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda8e5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8e4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8e7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8e6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8e9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8e8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda8eb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda8ea"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda8c7",
    "audioID": 852,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 851,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda8c9"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda8ca"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8cb"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8cc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8cd"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda8ce"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda8cf"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8d0"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda8d1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda8d2"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8d3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8c8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 852,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda8d5"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8d6"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda8d7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8d8"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda8d9"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda8da"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8db"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda8dc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda8dd"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8de"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8df"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8d4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "853",
        "name": "Ngô Hải Khánh",
        "cty": "ABC",
        "hotline": "58140466"
      },
      "customer": {
        "customerID": "853",
        "name": "Đặng Quốc Ánh",
        "phone": "47330696",
        "address": "Hà Nội",
        "cmnd": "38683417"
      },
      "fileURL": "talk853.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "14s",
      "date": "7/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda906"
            }
          ],
          "_id": "62ebc0e18a312c984bbda905"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda908"
            }
          ],
          "_id": "62ebc0e18a312c984bbda907"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda90a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda909"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda90c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda90b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda90e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda90d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda910"
            }
          ],
          "_id": "62ebc0e18a312c984bbda90f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda8ec",
    "audioID": 853,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 852,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8ee"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8ef"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda8f0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda8f1"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8f2"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda8f3"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda8f4"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda8f5"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8f6"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda8f7"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8f8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8ed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 853,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda8fa"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda8fb"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda8fc"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda8fd"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda8fe"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda8ff"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda900"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda901"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda902"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda903"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda904"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda8f9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "854",
        "name": "Đặng Văn Khánh",
        "cty": "ABC",
        "hotline": "68038681"
      },
      "customer": {
        "customerID": "854",
        "name": "Bùi Minh Cảnh",
        "phone": "81990357",
        "address": "Hà Nội",
        "cmnd": "78493020"
      },
      "fileURL": "talk854.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "86s",
      "date": "3/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda92b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda92a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda92d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda92c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda92f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda92e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda931"
            }
          ],
          "_id": "62ebc0e18a312c984bbda930"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda933"
            }
          ],
          "_id": "62ebc0e18a312c984bbda932"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda935"
            }
          ],
          "_id": "62ebc0e18a312c984bbda934"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda911",
    "audioID": 854,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 853,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda913"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda914"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda915"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda916"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda917"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda918"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda919"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda91a"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda91b"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda91c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda91d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda912"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 854,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda91f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda920"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda921"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda922"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda923"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda924"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda925"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda926"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda927"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda928"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda929"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda91e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "855",
        "name": "Trần Hải Lợi",
        "cty": "ABC",
        "hotline": "55975042"
      },
      "customer": {
        "customerID": "855",
        "name": "Ngô Quốc Hồng",
        "phone": "72265442",
        "address": "Hà Nội",
        "cmnd": "16882442"
      },
      "fileURL": "talk855.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "53s",
      "date": "10/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda950"
            }
          ],
          "_id": "62ebc0e18a312c984bbda94f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda952"
            }
          ],
          "_id": "62ebc0e18a312c984bbda951"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda954"
            }
          ],
          "_id": "62ebc0e18a312c984bbda953"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda956"
            }
          ],
          "_id": "62ebc0e18a312c984bbda955"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda958"
            }
          ],
          "_id": "62ebc0e18a312c984bbda957"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda95a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda959"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda936",
    "audioID": 855,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 854,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda938"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda939"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda93a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda93b"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda93c"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda93d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda93e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda93f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda940"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda941"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda942"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda937"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 855,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda944"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda945"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda946"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda947"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda948"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda949"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda94a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda94b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda94c"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda94d"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda94e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda943"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "856",
        "name": "Phạm Dương Khánh",
        "cty": "ABC",
        "hotline": "23241248"
      },
      "customer": {
        "customerID": "856",
        "name": "Phạm Quốc Lợi",
        "phone": "18447118",
        "address": "Hà Nội",
        "cmnd": "74325462"
      },
      "fileURL": "talk856.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "55s",
      "date": "30/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda975"
            }
          ],
          "_id": "62ebc0e18a312c984bbda974"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda977"
            }
          ],
          "_id": "62ebc0e18a312c984bbda976"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda979"
            }
          ],
          "_id": "62ebc0e18a312c984bbda978"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda97b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda97a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda97d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda97c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda97f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda97e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda95b",
    "audioID": 856,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 855,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda95d"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda95e"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda95f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda960"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda961"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda962"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda963"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda964"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda965"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda966"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda967"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda95c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 856,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda969"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda96a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda96b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda96c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda96d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda96e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda96f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda970"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda971"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda972"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda973"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda968"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "857",
        "name": "Trần An Thái Qúy",
        "cty": "ABC",
        "hotline": "43821836"
      },
      "customer": {
        "customerID": "857",
        "name": "Nguyễn Hải Ánh",
        "phone": "29209090",
        "address": "Hà Nội",
        "cmnd": "49439596"
      },
      "fileURL": "talk857.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "263s",
      "date": "1/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda99a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda999"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda99c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda99b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda99e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda99d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9a0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda99f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9a2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9a1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9a4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9a3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda980",
    "audioID": 857,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 856,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda982"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda983"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda984"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda985"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda986"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda987"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda988"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda989"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda98a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda98b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda98c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda981"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 857,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda98e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda98f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda990"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda991"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda992"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda993"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda994"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda995"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda996"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda997"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda998"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda98d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "858",
        "name": "Đặng Dương Lợi",
        "cty": "ABC",
        "hotline": "43770005"
      },
      "customer": {
        "customerID": "858",
        "name": "Huỳnh Dương Lợi",
        "phone": "28454348",
        "address": "Hà Nội",
        "cmnd": "68616276"
      },
      "fileURL": "talk858.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "132s",
      "date": "22/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9bf"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9be"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9c1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9c0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9c3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9c2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9c5"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9c4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9c7"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9c6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9c9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9c8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda9a5",
    "audioID": 858,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 857,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9a7"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda9a8"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9a9"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda9aa"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda9ab"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9ac"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9ad"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9ae"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda9af"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda9b0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9b1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9a6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 858,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9b3"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9b4"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9b5"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9b6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9b7"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9b8"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda9b9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9ba"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9bb"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9bc"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda9bd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9b2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "859",
        "name": "Trần Dương Cảnh",
        "cty": "ABC",
        "hotline": "32490586"
      },
      "customer": {
        "customerID": "859",
        "name": "Nguyễn Phương Cảnh",
        "phone": "43146914",
        "address": "Hà Nội",
        "cmnd": "83581658"
      },
      "fileURL": "talk859.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "26s",
      "date": "18/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9e4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9e3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9e6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9e5"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9e8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9e7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda9ea"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9e9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9ec"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9eb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda9ee"
            }
          ],
          "_id": "62ebc0e18a312c984bbda9ed"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda9ca",
    "audioID": 859,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 858,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9cc"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9cd"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9ce"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9cf"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9d0"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9d1"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9d2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda9d3"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9d4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9d5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9d6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9cb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 859,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda9d8"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9d9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda9da"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda9db"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda9dc"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda9dd"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9de"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda9df"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9e0"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda9e1"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda9e2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9d7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "860",
        "name": "Lê Phương Khánh",
        "cty": "ABC",
        "hotline": "98661861"
      },
      "customer": {
        "customerID": "860",
        "name": "Ngô An Khánh",
        "phone": "79714019",
        "address": "Hà Nội",
        "cmnd": "64227281"
      },
      "fileURL": "talk860.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "422s",
      "date": "30/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa09"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa08"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa0b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa0a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa0d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa0c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa0f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa0e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa11"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa10"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa13"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa12"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda9ef",
    "audioID": 860,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 859,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9f1"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9f2"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda9f3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda9f4"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9f5"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda9f6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9f7"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda9f8"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda9f9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda9fa"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda9fb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9f0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 860,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda9fd"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9fe"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda9ff"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa00"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa01"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa02"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaa03"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa04"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa05"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa06"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa07"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda9fc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "861",
        "name": "Trần Hải An",
        "cty": "ABC",
        "hotline": "35857130"
      },
      "customer": {
        "customerID": "861",
        "name": "Nguyễn Khánh Hồng",
        "phone": "97187815",
        "address": "Hà Nội",
        "cmnd": "84413788"
      },
      "fileURL": "talk861.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "484s",
      "date": "7/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa2e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa2d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa30"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa2f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa32"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa31"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa34"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa33"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa36"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa35"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa38"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa37"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaa14",
    "audioID": 861,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 860,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa16"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa17"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa18"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa19"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa1a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa1b"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa1c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa1d"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa1e"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa1f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa20"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa15"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 861,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa22"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa23"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa24"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa25"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa26"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa27"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa28"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa29"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa2a"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa2b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa2c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa21"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "862",
        "name": "Ngô Hữu Ánh",
        "cty": "ABC",
        "hotline": "69843921"
      },
      "customer": {
        "customerID": "862",
        "name": "Ngô Quốc Duy",
        "phone": "75038351",
        "address": "Hà Nội",
        "cmnd": "20319757"
      },
      "fileURL": "talk862.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "304s",
      "date": "5/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa53"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa52"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa55"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa54"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa57"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa56"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa59"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa58"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa5b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa5a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa5d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa5c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaa39",
    "audioID": 862,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 861,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa3b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa3c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa3d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa3e"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa3f"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa40"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa41"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa42"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa43"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa44"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa45"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa3a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 862,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa47"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa48"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa49"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa4a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa4b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa4c"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa4d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa4e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa4f"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaa50"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa51"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa46"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "863",
        "name": "Huỳnh Thị Dạ",
        "cty": "ABC",
        "hotline": "79452859"
      },
      "customer": {
        "customerID": "863",
        "name": "Trần Hữu Cảnh",
        "phone": "94265178",
        "address": "Hà Nội",
        "cmnd": "31607069"
      },
      "fileURL": "talk863.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "286s",
      "date": "29/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa78"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa77"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa7a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa79"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa7c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa7b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa7e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa7d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa80"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa7f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa82"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa81"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaa5e",
    "audioID": 863,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 862,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaa60"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa61"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa62"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa63"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa64"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa65"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa66"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa67"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa68"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa69"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa6a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa5f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 863,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa6c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa6d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa6e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa6f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa70"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa71"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaa72"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa73"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa74"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa75"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa76"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa6b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "864",
        "name": "Trần An Duy",
        "cty": "ABC",
        "hotline": "23869300"
      },
      "customer": {
        "customerID": "864",
        "name": "Nguyễn Văn Cảnh",
        "phone": "32561087",
        "address": "Hà Nội",
        "cmnd": "65256805"
      },
      "fileURL": "talk864.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "176s",
      "date": "17/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaa9d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa9c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaa9f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaa9e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaaa1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaa0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaa3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaa2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaaa5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaa4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaa7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaa6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaa83",
    "audioID": 864,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 863,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa85"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa86"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa87"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa88"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa89"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa8a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa8b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaa8c"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa8d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa8e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa8f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa84"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 864,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaa91"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa92"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaa93"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaa94"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa95"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa96"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa97"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaa98"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaa99"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaa9a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaa9b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaa90"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "865",
        "name": "Phạm An Thái Qúy",
        "cty": "ABC",
        "hotline": "72023212"
      },
      "customer": {
        "customerID": "865",
        "name": "Phan Thị An",
        "phone": "40582009",
        "address": "Hà Nội",
        "cmnd": "12584688"
      },
      "fileURL": "talk865.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "6s",
      "date": "28/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaac2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaac1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaac4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaac3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaac6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaac5"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaac8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaac7"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaca"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaac9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaacc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaacb"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaaa8",
    "audioID": 865,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 864,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaaaa"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaaab"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaaac"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaaad"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaaae"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaaaf"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaab0"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaab1"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaab2"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaab3"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaab4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaaa9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 865,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaab6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaab7"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaab8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaab9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaaba"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaabb"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaabc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaabd"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaabe"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaabf"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaac0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaab5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "866",
        "name": "Đặng Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "73638151"
      },
      "customer": {
        "customerID": "866",
        "name": "Bùi Dương An",
        "phone": "75350780",
        "address": "Hà Nội",
        "cmnd": "22632128"
      },
      "fileURL": "talk866.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "367s",
      "date": "31/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaae7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaae6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaae9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaae8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaeb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaea"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaed"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaef"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaee"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaaf1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaaf0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaacd",
    "audioID": 866,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 865,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaacf"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaad0"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaad1"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaad2"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaad3"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaad4"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaad5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaad6"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaad7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaad8"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaad9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaace"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 866,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaadb"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaadc"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaadd"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaade"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaadf"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaae0"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaae1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaae2"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaae3"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaae4"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaae5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaada"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "867",
        "name": "Trương Văn Khánh",
        "cty": "ABC",
        "hotline": "46190665"
      },
      "customer": {
        "customerID": "867",
        "name": "Huỳnh Văn Duy",
        "phone": "95168470",
        "address": "Hà Nội",
        "cmnd": "38827386"
      },
      "fileURL": "talk867.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "294s",
      "date": "1/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab0c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab0b"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab0e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab0d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab10"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab0f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab12"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab11"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab14"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab13"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab16"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab15"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaaf2",
    "audioID": 867,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 866,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaaf4"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaaf5"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaaf6"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaaf7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaaf8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaaf9"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaafa"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaafb"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaafc"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaafd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaafe"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaaf3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 867,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab00"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab01"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab02"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab03"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab04"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdab05"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab06"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab07"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab08"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab09"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab0a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaaff"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "868",
        "name": "Bùi Hải Quyền",
        "cty": "ABC",
        "hotline": "19911561"
      },
      "customer": {
        "customerID": "868",
        "name": "Lê Văn An",
        "phone": "22000994",
        "address": "Hà Nội",
        "cmnd": "23328713"
      },
      "fileURL": "talk868.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "135s",
      "date": "10/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab31"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab30"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab33"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab32"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab35"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab34"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab37"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab36"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab39"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab38"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab3b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab3a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdab17",
    "audioID": 868,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 867,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdab19"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab1a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab1b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab1c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab1d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab1e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdab1f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab20"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab21"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab22"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab23"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab18"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 868,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab25"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab26"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab27"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab28"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab29"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab2a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab2b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab2c"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab2d"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab2e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdab2f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab24"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "869",
        "name": "Ngô Khánh Cảnh",
        "cty": "ABC",
        "hotline": "93988245"
      },
      "customer": {
        "customerID": "869",
        "name": "Phan Hải Hồng",
        "phone": "64277827",
        "address": "Hà Nội",
        "cmnd": "65807732"
      },
      "fileURL": "talk869.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "256s",
      "date": "28/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab56"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab55"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab58"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab57"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab5a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab59"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab5c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab5b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab5e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab5d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab60"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab5f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdab3c",
    "audioID": 869,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 868,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab3e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab3f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab40"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab41"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab42"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab43"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab44"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab45"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab46"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab47"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab48"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab3d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 869,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdab4a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab4b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab4c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdab4d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab4e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab4f"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab50"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab51"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdab52"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab53"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab54"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab49"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "870",
        "name": "Trương Hải Khánh",
        "cty": "ABC",
        "hotline": "95235858"
      },
      "customer": {
        "customerID": "870",
        "name": "Ngô Dương Quyền",
        "phone": "30260243",
        "address": "Hà Nội",
        "cmnd": "91982145"
      },
      "fileURL": "talk870.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "86s",
      "date": "4/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab7b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab7a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab7d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab7c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdab7f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab7e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab81"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab80"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab83"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab82"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdab85"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab84"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdab61",
    "audioID": 870,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 869,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab63"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdab64"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab65"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab66"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab67"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab68"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab69"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdab6a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab6b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab6c"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab6d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab62"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 870,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab6f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab70"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab71"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab72"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab73"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab74"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab75"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdab76"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab77"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab78"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab79"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab6e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "871",
        "name": "Trần An Quyền",
        "cty": "ABC",
        "hotline": "78899274"
      },
      "customer": {
        "customerID": "871",
        "name": "Huỳnh Minh Cảnh",
        "phone": "21914299",
        "address": "Hà Nội",
        "cmnd": "42758582"
      },
      "fileURL": "talk871.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "334s",
      "date": "27/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaba0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdab9f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaba2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaba1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaba4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaba3"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaba6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaba5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaba8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaba7"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabaa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaba9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdab86",
    "audioID": 871,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 870,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab88"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab89"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab8a"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab8b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab8c"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdab8d"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab8e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab8f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab90"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab91"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab92"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab87"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 871,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab94"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdab95"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab96"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab97"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab98"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdab99"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab9a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdab9b"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdab9c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdab9d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdab9e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdab93"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "872",
        "name": "Phan Dương Hồng",
        "cty": "ABC",
        "hotline": "73155698"
      },
      "customer": {
        "customerID": "872",
        "name": "Bùi Văn Hồng",
        "phone": "75349143",
        "address": "Hà Nội",
        "cmnd": "80538466"
      },
      "fileURL": "talk872.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "420s",
      "date": "4/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabc5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabc4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabc7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabc6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabc9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabc8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabcb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabca"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabcd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabcc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabcf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabce"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdabab",
    "audioID": 872,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 871,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabad"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdabae"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabaf"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdabb0"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabb1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabb2"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdabb3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabb4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabb5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabb6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabb7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdabac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 872,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdabb9"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabba"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabbb"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabbc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabbd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabbe"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabbf"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabc0"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabc1"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabc2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabc3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdabb8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "873",
        "name": "Trương Hữu An",
        "cty": "ABC",
        "hotline": "18229787"
      },
      "customer": {
        "customerID": "873",
        "name": "Phan Dương An",
        "phone": "37561188",
        "address": "Hà Nội",
        "cmnd": "66639777"
      },
      "fileURL": "talk873.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "97s",
      "date": "28/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabea"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabe9"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabec"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabeb"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabee"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabed"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabf0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabef"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdabf2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabf1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdabf4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdabf3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdabd0",
    "audioID": 873,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 872,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabd2"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabd3"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdabd4"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabd5"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdabd6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabd7"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabd8"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdabd9"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabda"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabdb"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabdc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdabd1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 873,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabde"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabdf"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabe0"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabe1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabe2"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdabe3"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdabe4"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabe5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabe6"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabe7"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabe8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdabdd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "874",
        "name": "Trần Minh An",
        "cty": "ABC",
        "hotline": "96878962"
      },
      "customer": {
        "customerID": "874",
        "name": "Trương Quốc Cảnh",
        "phone": "36457422",
        "address": "Hà Nội",
        "cmnd": "75236598"
      },
      "fileURL": "talk874.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "549s",
      "date": "23/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac0f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac0e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac11"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac10"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac13"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac12"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac15"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac14"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac17"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac16"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac19"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac18"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdabf5",
    "audioID": 874,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 873,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdabf7"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabf8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdabf9"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabfa"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdabfb"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabfc"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdabfd"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdabfe"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdabff"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac00"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac01"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdabf6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 874,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac03"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac04"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac05"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac06"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac07"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdac08"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac09"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac0a"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac0b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac0c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac0d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac02"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "875",
        "name": "Trần Hữu Hồng",
        "cty": "ABC",
        "hotline": "81642762"
      },
      "customer": {
        "customerID": "875",
        "name": "Lê Văn Dạ",
        "phone": "74447613",
        "address": "Hà Nội",
        "cmnd": "86968814"
      },
      "fileURL": "talk875.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "480s",
      "date": "3/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac34"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac33"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac36"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac35"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac38"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac37"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac3a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac39"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac3c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac3b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac3e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac3d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdac1a",
    "audioID": 875,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 874,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac1c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac1d"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac1e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac1f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac20"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac21"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac22"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac23"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac24"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac25"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdac26"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac1b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 875,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac28"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac29"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac2a"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac2b"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac2c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac2d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac2e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac2f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac30"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac31"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac32"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac27"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "876",
        "name": "Lê Hữu Dạ",
        "cty": "ABC",
        "hotline": "93406312"
      },
      "customer": {
        "customerID": "876",
        "name": "Huỳnh Minh Khánh",
        "phone": "11284661",
        "address": "Hà Nội",
        "cmnd": "61077153"
      },
      "fileURL": "talk876.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "138s",
      "date": "26/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac59"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac58"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac5b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac5a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac5d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac5c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac5f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac5e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac61"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac60"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac63"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac62"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdac3f",
    "audioID": 876,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 875,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdac41"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac42"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac43"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac44"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac45"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac46"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac47"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac48"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac49"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac4a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac4b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac40"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 876,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac4d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac4e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac4f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac50"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac51"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac52"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac53"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac54"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac55"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac56"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac57"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac4c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "877",
        "name": "Bùi Minh Hồng",
        "cty": "ABC",
        "hotline": "68065758"
      },
      "customer": {
        "customerID": "877",
        "name": "Huỳnh Hữu Quyền",
        "phone": "27276247",
        "address": "Hà Nội",
        "cmnd": "38311321"
      },
      "fileURL": "talk877.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "465s",
      "date": "13/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac7e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac7d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac80"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac7f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdac82"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac81"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac84"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac83"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac86"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac85"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdac88"
            }
          ],
          "_id": "62ebc0e18a312c984bbdac87"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdac64",
    "audioID": 877,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 876,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac66"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdac67"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac68"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac69"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac6a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac6b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac6c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac6d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac6e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac6f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac70"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac65"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 877,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac72"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac73"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac74"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac75"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac76"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac77"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac78"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac79"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac7a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac7b"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac7c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac71"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "878",
        "name": "Nguyễn An Dạ",
        "cty": "ABC",
        "hotline": "72128010"
      },
      "customer": {
        "customerID": "878",
        "name": "Phan Dương Dạ",
        "phone": "62604724",
        "address": "Hà Nội",
        "cmnd": "16973319"
      },
      "fileURL": "talk878.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "597s",
      "date": "12/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaca3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaca2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaca5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaca4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaca7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaca6"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaca9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaca8"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacab"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacaa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacad"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacac"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdac89",
    "audioID": 878,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 877,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdac8b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdac8c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac8d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac8e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdac8f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac90"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac91"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac92"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac93"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdac94"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdac95"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac8a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 878,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac97"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac98"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdac99"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac9a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdac9b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdac9c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdac9d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac9e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdac9f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaca0"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaca1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdac96"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "879",
        "name": "Lê Khánh Cảnh",
        "cty": "ABC",
        "hotline": "19233043"
      },
      "customer": {
        "customerID": "879",
        "name": "Bùi Hải Thái Qúy",
        "phone": "46732604",
        "address": "Hà Nội",
        "cmnd": "58855889"
      },
      "fileURL": "talk879.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "334s",
      "date": "2/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacc8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacc7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacca"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacc9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaccc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaccb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacce"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaccd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacd0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaccf"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacd2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacd1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdacae",
    "audioID": 879,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 878,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdacb0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdacb1"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdacb2"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdacb3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdacb4"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdacb5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdacb6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdacb7"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdacb8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdacb9"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdacba"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdacaf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 879,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdacbc"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdacbd"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdacbe"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdacbf"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdacc0"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdacc1"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdacc2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdacc3"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdacc4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdacc5"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdacc6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdacbb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "880",
        "name": "Bùi Thị Lợi",
        "cty": "ABC",
        "hotline": "19534608"
      },
      "customer": {
        "customerID": "880",
        "name": "Trần An Ánh",
        "phone": "32623036",
        "address": "Hà Nội",
        "cmnd": "91699838"
      },
      "fileURL": "talk880.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "488s",
      "date": "6/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaced"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacef"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacee"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacf1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacf0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdacf3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacf2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacf5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacf4"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdacf7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdacf6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdacd3",
    "audioID": 880,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 879,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdacd5"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdacd6"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdacd7"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdacd8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdacd9"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdacda"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdacdb"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdacdc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdacdd"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdacde"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdacdf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdacd4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 880,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdace1"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdace2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdace3"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdace4"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdace5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdace6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdace7"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdace8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdace9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdacea"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaceb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdace0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "881",
        "name": "Ngô Khánh Hồng",
        "cty": "ABC",
        "hotline": "65467411"
      },
      "customer": {
        "customerID": "881",
        "name": "Huỳnh Dương An",
        "phone": "60424360",
        "address": "Hà Nội",
        "cmnd": "13468543"
      },
      "fileURL": "talk881.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "347s",
      "date": "11/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad12"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad11"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad14"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad13"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad16"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad15"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad18"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad17"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad1a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad19"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad1c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad1b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdacf8",
    "audioID": 881,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 880,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdacfa"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdacfb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdacfc"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdacfd"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdacfe"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdacff"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad00"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad01"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad02"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad03"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad04"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdacf9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 881,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad06"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad07"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad08"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad09"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad0a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad0b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad0c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad0d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad0e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad0f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdad10"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad05"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "882",
        "name": "Đặng Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "70930441"
      },
      "customer": {
        "customerID": "882",
        "name": "Bùi Hữu Quyền",
        "phone": "40218061",
        "address": "Hà Nội",
        "cmnd": "87883715"
      },
      "fileURL": "talk882.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "479s",
      "date": "16/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad37"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad36"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad39"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad38"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad3b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad3a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad3d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad3c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad3f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad3e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad41"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad40"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdad1d",
    "audioID": 882,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 881,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad1f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad20"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad21"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad22"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad23"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad24"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad25"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad26"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad27"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad28"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad29"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad1e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 882,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad2b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad2c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad2d"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdad2e"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad2f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad30"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdad31"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad32"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad33"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad34"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad35"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad2a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "883",
        "name": "Ngô Phương Quyền",
        "cty": "ABC",
        "hotline": "20045903"
      },
      "customer": {
        "customerID": "883",
        "name": "Đặng Khánh Dạ",
        "phone": "15141941",
        "address": "Hà Nội",
        "cmnd": "42731324"
      },
      "fileURL": "talk883.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "456s",
      "date": "23/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad5c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad5b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad5e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad5d"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad60"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad5f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad62"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad61"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad64"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad63"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad66"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad65"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdad42",
    "audioID": 883,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 882,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad44"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdad45"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad46"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad47"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdad48"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad49"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdad4a"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdad4b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad4c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad4d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad4e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad43"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 883,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdad50"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad51"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad52"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad53"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad54"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad55"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad56"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad57"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad58"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad59"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad5a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad4f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "884",
        "name": "Bùi Dương Hồng",
        "cty": "ABC",
        "hotline": "44403139"
      },
      "customer": {
        "customerID": "884",
        "name": "Bùi Khánh Dạ",
        "phone": "22576894",
        "address": "Hà Nội",
        "cmnd": "18897528"
      },
      "fileURL": "talk884.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "523s",
      "date": "19/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad81"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad80"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad83"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad82"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad85"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad84"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad87"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad86"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdad89"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad88"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdad8b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdad8a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdad67",
    "audioID": 884,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 883,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad69"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad6a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad6b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad6c"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdad6d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad6e"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad6f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad70"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdad71"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad72"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad73"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad68"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 884,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad75"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad76"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad77"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad78"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad79"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad7a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad7b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad7c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad7d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad7e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad7f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad74"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "885",
        "name": "Bùi Minh Cảnh",
        "cty": "ABC",
        "hotline": "73974415"
      },
      "customer": {
        "customerID": "885",
        "name": "Phan Phương Quyền",
        "phone": "24827178",
        "address": "Hà Nội",
        "cmnd": "45423422"
      },
      "fileURL": "talk885.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "581s",
      "date": "18/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdada6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdada5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdada8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdada7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadaa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdada9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadac"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadab"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdadae"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadad"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadb0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadaf"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdad8c",
    "audioID": 885,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 884,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad8e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad8f"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad90"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad91"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad92"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdad93"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad94"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdad95"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad96"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad97"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdad98"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad8d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 885,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad9a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdad9b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdad9c"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdad9d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdad9e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdad9f"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdada0"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdada1"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdada2"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdada3"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdada4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdad99"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "886",
        "name": "Huỳnh Khánh Ánh",
        "cty": "ABC",
        "hotline": "20717377"
      },
      "customer": {
        "customerID": "886",
        "name": "Đặng Hải An",
        "phone": "16019062",
        "address": "Hà Nội",
        "cmnd": "61858886"
      },
      "fileURL": "talk886.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "555s",
      "date": "24/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadcb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadca"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdadcd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadcc"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadcf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadce"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdadd1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadd0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdadd3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadd2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadd5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadd4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdadb1",
    "audioID": 886,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 885,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdadb3"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdadb4"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdadb5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdadb6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdadb7"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdadb8"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdadb9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdadba"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadbb"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdadbc"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdadbd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdadb2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 886,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadbf"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadc0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdadc1"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdadc2"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdadc3"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdadc4"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdadc5"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdadc6"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdadc7"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdadc8"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdadc9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdadbe"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "887",
        "name": "Trần Thị Duy",
        "cty": "ABC",
        "hotline": "11449520"
      },
      "customer": {
        "customerID": "887",
        "name": "Đặng Văn Quyền",
        "phone": "72444647",
        "address": "Hà Nội",
        "cmnd": "12493013"
      },
      "fileURL": "talk887.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "452s",
      "date": "9/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadf0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadef"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadf2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadf1"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadf4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadf3"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadf6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadf5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdadf8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadf7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdadfa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdadf9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdadd6",
    "audioID": 887,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 886,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdadd8"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdadd9"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdadda"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaddb"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaddc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaddd"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdadde"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaddf"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdade0"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdade1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdade2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdadd7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 887,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdade4"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdade5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdade6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdade7"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdade8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdade9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdadea"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadeb"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdadec"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaded"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdadee"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdade3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "888",
        "name": "Phan Hữu An",
        "cty": "ABC",
        "hotline": "35590296"
      },
      "customer": {
        "customerID": "888",
        "name": "Huỳnh Hữu Duy",
        "phone": "51914150",
        "address": "Hà Nội",
        "cmnd": "89187349"
      },
      "fileURL": "talk888.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "77s",
      "date": "5/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae15"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae14"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae17"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae16"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae19"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae18"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae1b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae1a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae1d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae1c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae1f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae1e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdadfb",
    "audioID": 888,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 887,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadfd"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdadfe"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdadff"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae00"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae01"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae02"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae03"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae04"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae05"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae06"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae07"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdadfc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 888,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdae09"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae0a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae0b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae0c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae0d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae0e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae0f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae10"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae11"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae12"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae13"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae08"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "889",
        "name": "Đặng Hữu Dạ",
        "cty": "ABC",
        "hotline": "79879804"
      },
      "customer": {
        "customerID": "889",
        "name": "Trần Hữu Khánh",
        "phone": "23782354",
        "address": "Hà Nội",
        "cmnd": "22963623"
      },
      "fileURL": "talk889.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "120s",
      "date": "2/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae3a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae39"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae3c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae3b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae3e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae3d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae40"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae3f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae42"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae41"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae44"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae43"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdae20",
    "audioID": 889,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 888,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae22"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae23"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae24"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae25"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae26"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae27"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae28"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdae29"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae2a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae2b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae2c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae21"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 889,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae2e"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae2f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae30"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae31"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae32"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdae33"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae34"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae35"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae36"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae37"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae38"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae2d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "890",
        "name": "Trần Dương Duy",
        "cty": "ABC",
        "hotline": "62932339"
      },
      "customer": {
        "customerID": "890",
        "name": "Phạm An An",
        "phone": "14625867",
        "address": "Hà Nội",
        "cmnd": "85233869"
      },
      "fileURL": "talk890.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "171s",
      "date": "31/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae5f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae5e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae61"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae60"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae63"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae62"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae65"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae64"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae67"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae66"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae69"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae68"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdae45",
    "audioID": 890,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 889,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae47"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae48"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae49"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae4a"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae4b"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae4c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae4d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae4e"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae4f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae50"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae51"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae46"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 890,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae53"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae54"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae55"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae56"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae57"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae58"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae59"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae5a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae5b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae5c"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae5d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae52"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "891",
        "name": "Phan Hải An",
        "cty": "ABC",
        "hotline": "14130143"
      },
      "customer": {
        "customerID": "891",
        "name": "Ngô Quốc Thái Qúy",
        "phone": "69776692",
        "address": "Hà Nội",
        "cmnd": "15776398"
      },
      "fileURL": "talk891.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "542s",
      "date": "14/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae84"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae83"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae86"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae85"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae88"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae87"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae8a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae89"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdae8c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae8b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdae8e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdae8d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdae6a",
    "audioID": 891,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 890,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae6c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae6d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae6e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae6f"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae70"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae71"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae72"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae73"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae74"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae75"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae76"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae6b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 891,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae78"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdae79"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae7a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae7b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae7c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae7d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae7e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae7f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae80"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdae81"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdae82"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae77"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "892",
        "name": "Ngô Minh Cảnh",
        "cty": "ABC",
        "hotline": "17202079"
      },
      "customer": {
        "customerID": "892",
        "name": "Bùi Văn Hồng",
        "phone": "15447824",
        "address": "Hà Nội",
        "cmnd": "79984551"
      },
      "fileURL": "talk892.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "161s",
      "date": "16/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaea9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaea8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaeab"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaeaa"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaead"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaeac"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaeaf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaeae"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaeb1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaeb0"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaeb3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaeb2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdae8f",
    "audioID": 892,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 891,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae91"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdae92"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae93"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdae94"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae95"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae96"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdae97"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae98"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae99"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdae9a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdae9b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae90"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 892,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdae9d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdae9e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdae9f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaea0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaea1"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaea2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaea3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaea4"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaea5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaea6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaea7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdae9c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "893",
        "name": "Bùi Thị Quyền",
        "cty": "ABC",
        "hotline": "90660723"
      },
      "customer": {
        "customerID": "893",
        "name": "Đặng Minh Dạ",
        "phone": "72044761",
        "address": "Hà Nội",
        "cmnd": "82438831"
      },
      "fileURL": "talk893.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "539s",
      "date": "23/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaece"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaecd"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaed0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaecf"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaed2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaed1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaed4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaed3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaed6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaed5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaed8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaed7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaeb4",
    "audioID": 893,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 892,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaeb6"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaeb7"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaeb8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaeb9"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaeba"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaebb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaebc"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaebd"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaebe"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaebf"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaec0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaeb5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 893,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaec2"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaec3"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaec4"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaec5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaec6"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaec7"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaec8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaec9"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaeca"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaecb"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaecc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaec1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "894",
        "name": "Phạm An Ánh",
        "cty": "ABC",
        "hotline": "94136501"
      },
      "customer": {
        "customerID": "894",
        "name": "Bùi Văn Hồng",
        "phone": "88782989",
        "address": "Hà Nội",
        "cmnd": "63513242"
      },
      "fileURL": "talk894.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "597s",
      "date": "6/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaef3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaef2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaef5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaef4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaef7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaef6"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaef9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaef8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaefb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaefa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaefd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaefc"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaed9",
    "audioID": 894,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 893,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaedb"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaedc"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaedd"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaede"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaedf"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaee0"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaee1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaee2"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaee3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaee4"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaee5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaeda"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 894,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaee7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaee8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaee9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaeea"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaeeb"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaeec"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaeed"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaeee"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaeef"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaef0"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaef1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaee6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "895",
        "name": "Phạm Hữu An",
        "cty": "ABC",
        "hotline": "75075929"
      },
      "customer": {
        "customerID": "895",
        "name": "Phạm Minh Khánh",
        "phone": "75967917",
        "address": "Hà Nội",
        "cmnd": "92155868"
      },
      "fileURL": "talk895.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "422s",
      "date": "26/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf18"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf17"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf1a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf19"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf1c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf1b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf1e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf1d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf20"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf1f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf22"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf21"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaefe",
    "audioID": 895,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 894,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf00"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf01"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf02"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf03"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf04"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf05"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf06"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf07"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf08"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf09"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf0a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaeff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 895,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf0c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf0d"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf0e"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf0f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf10"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf11"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf12"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf13"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf14"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf15"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf16"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf0b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "896",
        "name": "Ngô Thị Khánh",
        "cty": "ABC",
        "hotline": "12727911"
      },
      "customer": {
        "customerID": "896",
        "name": "Nguyễn Hải Lợi",
        "phone": "69842118",
        "address": "Hà Nội",
        "cmnd": "30502568"
      },
      "fileURL": "talk896.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "398s",
      "date": "26/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf3d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf3c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf3f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf3e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf41"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf40"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf43"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf42"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf45"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf44"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf47"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf46"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaf23",
    "audioID": 896,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 895,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf25"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf26"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf27"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf28"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf29"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf2a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf2b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf2c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf2d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf2e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf2f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf24"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 896,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf31"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf32"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf33"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf34"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf35"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf36"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf37"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf38"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf39"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf3a"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf3b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf30"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "897",
        "name": "Bùi Văn Duy",
        "cty": "ABC",
        "hotline": "17808664"
      },
      "customer": {
        "customerID": "897",
        "name": "Trần Hữu Khánh",
        "phone": "30246651",
        "address": "Hà Nội",
        "cmnd": "58319919"
      },
      "fileURL": "talk897.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "122s",
      "date": "27/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf62"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf61"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf64"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf63"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf66"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf65"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf68"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf67"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf6a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf69"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf6c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf6b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaf48",
    "audioID": 897,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 896,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf4a"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf4b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf4c"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf4d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf4e"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf4f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf50"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf51"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf52"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf53"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf54"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf49"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 897,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf56"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf57"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf58"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf59"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf5a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf5b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf5c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf5d"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf5e"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf5f"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf60"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf55"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "898",
        "name": "Nguyễn Phương Quyền",
        "cty": "ABC",
        "hotline": "39452824"
      },
      "customer": {
        "customerID": "898",
        "name": "Bùi Hữu Thái Qúy",
        "phone": "18134582",
        "address": "Hà Nội",
        "cmnd": "70331532"
      },
      "fileURL": "talk898.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "31s",
      "date": "18/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf87"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf86"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf89"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf88"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf8b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf8a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf8d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf8c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdaf8f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf8e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaf91"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaf90"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaf6d",
    "audioID": 898,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 897,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf6f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf70"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf71"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf72"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf73"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdaf74"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf75"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf76"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf77"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf78"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf79"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf6e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 898,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf7b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf7c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf7d"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf7e"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf7f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf80"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf81"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf82"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaf83"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaf84"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf85"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf7a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "899",
        "name": "Đặng Văn Ánh",
        "cty": "ABC",
        "hotline": "26034398"
      },
      "customer": {
        "customerID": "899",
        "name": "Nguyễn Phương Lợi",
        "phone": "49961148",
        "address": "Hà Nội",
        "cmnd": "97142608"
      },
      "fileURL": "talk899.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "364s",
      "date": "17/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafac"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafab"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafae"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafad"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafb0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafaf"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafb2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafb1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafb4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafb3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafb6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafb5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdaf92",
    "audioID": 899,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 898,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf94"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf95"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaf96"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf97"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf98"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdaf99"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdaf9a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaf9b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdaf9c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdaf9d"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaf9e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf93"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 899,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafa0"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdafa1"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafa2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafa3"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafa4"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafa5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafa6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafa7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdafa8"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafa9"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafaa"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdaf9f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "900",
        "name": "Ngô Khánh Duy",
        "cty": "ABC",
        "hotline": "68791289"
      },
      "customer": {
        "customerID": "900",
        "name": "Trần Dương Cảnh",
        "phone": "34266715",
        "address": "Hà Nội",
        "cmnd": "46375508"
      },
      "fileURL": "talk900.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "464s",
      "date": "24/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdafd1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafd0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdafd3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafd2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafd5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafd4"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdafd7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafd6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdafd9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafd8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdafdb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafda"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdafb7",
    "audioID": 900,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 899,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdafb9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafba"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafbb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafbc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdafbd"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdafbe"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafbf"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafc0"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafc1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdafc2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdafc3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdafb8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 900,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdafc5"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdafc6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafc7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafc8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafc9"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafca"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafcb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdafcc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafcd"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdafce"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdafcf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdafc4"
      }
    ],
    "__v": 0
  }
]
export default FILE9