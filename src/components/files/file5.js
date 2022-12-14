// 20220804202320
// http://localhost:5000/

const FILE5 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "401",
        "name": "Huỳnh Quốc Khánh",
        "cty": "ABC",
        "hotline": "49558364"
      },
      "customer": {
        "customerID": "401",
        "name": "Bùi Hải An",
        "phone": "20364875",
        "address": "Hà Nội",
        "cmnd": "35823646"
      },
      "fileURL": "talk401.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "428s",
      "date": "13/3/2022",
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
              "_id": "62ebc0e08a312c984bbd67b2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67b1"
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
              "_id": "62ebc0e08a312c984bbd67b4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67b3"
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
              "_id": "62ebc0e08a312c984bbd67b6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67b5"
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
              "_id": "62ebc0e08a312c984bbd67b8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67b7"
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
              "_id": "62ebc0e08a312c984bbd67ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67b9"
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
              "_id": "62ebc0e08a312c984bbd67bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67bb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6798",
    "audioID": 401,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 400,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd679a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd679b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd679c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd679d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd679e"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd679f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67a0"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67a1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd67a2"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67a3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67a4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6799"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 401,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67a6"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67a7"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd67a8"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67a9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67aa"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67ab"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67ac"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67ad"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd67ae"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67af"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67b0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd67a5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "402",
        "name": "Trần Thị Ánh",
        "cty": "ABC",
        "hotline": "67104460"
      },
      "customer": {
        "customerID": "402",
        "name": "Đặng Phương Quyền",
        "phone": "26125463",
        "address": "Hà Nội",
        "cmnd": "66185430"
      },
      "fileURL": "talk402.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "270s",
      "date": "6/3/2022",
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
              "_id": "62ebc0e08a312c984bbd67d7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67d6"
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
              "_id": "62ebc0e08a312c984bbd67d9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67d8"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd67db"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67da"
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
              "_id": "62ebc0e08a312c984bbd67dd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67dc"
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
              "_id": "62ebc0e08a312c984bbd67df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67de"
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
              "_id": "62ebc0e08a312c984bbd67e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67e0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd67bd",
    "audioID": 402,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 401,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd67bf"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67c0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67c1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67c2"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd67c3"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67c4"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67c5"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd67c6"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd67c7"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67c8"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd67c9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd67be"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 402,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67cb"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67cc"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67cd"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd67ce"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67cf"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67d0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67d1"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67d2"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67d3"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67d4"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67d5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd67ca"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "403",
        "name": "Lê Minh Khánh",
        "cty": "ABC",
        "hotline": "26110529"
      },
      "customer": {
        "customerID": "403",
        "name": "Đặng Phương Khánh",
        "phone": "43334334",
        "address": "Hà Nội",
        "cmnd": "89461083"
      },
      "fileURL": "talk403.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "62s",
      "date": "27/4/2022",
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
              "_id": "62ebc0e08a312c984bbd67fc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67fb"
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
              "_id": "62ebc0e08a312c984bbd67fe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67fd"
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
              "_id": "62ebc0e08a312c984bbd6800"
            }
          ],
          "_id": "62ebc0e08a312c984bbd67ff"
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
              "_id": "62ebc0e08a312c984bbd6802"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6801"
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
              "_id": "62ebc0e08a312c984bbd6804"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6803"
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
              "_id": "62ebc0e08a312c984bbd6806"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6805"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd67e2",
    "audioID": 403,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 402,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67e4"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd67e5"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67e6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67e7"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67e8"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67e9"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd67ea"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67eb"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67ec"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67ed"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67ee"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd67e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 403,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd67f0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67f1"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd67f2"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd67f3"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67f4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd67f5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd67f6"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd67f7"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd67f8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd67f9"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd67fa"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd67ef"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "404",
        "name": "Bùi Hải Cảnh",
        "cty": "ABC",
        "hotline": "78588825"
      },
      "customer": {
        "customerID": "404",
        "name": "Ngô Hải Lợi",
        "phone": "59556488",
        "address": "Hà Nội",
        "cmnd": "89429232"
      },
      "fileURL": "talk404.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "148s",
      "date": "14/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6821"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6820"
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
              "_id": "62ebc0e08a312c984bbd6823"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6822"
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
              "_id": "62ebc0e08a312c984bbd6825"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6824"
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
              "_id": "62ebc0e08a312c984bbd6827"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6826"
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
              "_id": "62ebc0e08a312c984bbd6829"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6828"
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
              "_id": "62ebc0e08a312c984bbd682b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd682a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6807",
    "audioID": 404,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 403,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6809"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd680a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd680b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd680c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd680d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd680e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd680f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6810"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6811"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6812"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6813"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6808"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 404,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6815"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6816"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6817"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6818"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6819"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd681a"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd681b"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd681c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd681d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd681e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd681f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6814"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "405",
        "name": "Huỳnh Dương Cảnh",
        "cty": "ABC",
        "hotline": "25447761"
      },
      "customer": {
        "customerID": "405",
        "name": "Huỳnh Hữu Quyền",
        "phone": "89390073",
        "address": "Hà Nội",
        "cmnd": "54639538"
      },
      "fileURL": "talk405.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "329s",
      "date": "25/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6846"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6845"
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
              "_id": "62ebc0e08a312c984bbd6848"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6847"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd684a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6849"
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
              "_id": "62ebc0e08a312c984bbd684c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd684b"
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
              "_id": "62ebc0e08a312c984bbd684e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd684d"
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
              "_id": "62ebc0e08a312c984bbd6850"
            }
          ],
          "_id": "62ebc0e08a312c984bbd684f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd682c",
    "audioID": 405,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 404,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd682e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd682f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6830"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6831"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6832"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6833"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6834"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6835"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6836"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6837"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6838"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd682d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 405,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd683a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd683b"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd683c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd683d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd683e"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd683f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6840"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6841"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6842"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6843"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6844"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6839"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "406",
        "name": "Phan Quốc Duy",
        "cty": "ABC",
        "hotline": "32815708"
      },
      "customer": {
        "customerID": "406",
        "name": "Phạm An Quyền",
        "phone": "42293232",
        "address": "Hà Nội",
        "cmnd": "26201438"
      },
      "fileURL": "talk406.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "384s",
      "date": "18/9/2022",
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
              "_id": "62ebc0e08a312c984bbd686b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd686a"
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
              "_id": "62ebc0e08a312c984bbd686d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd686c"
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
              "_id": "62ebc0e08a312c984bbd686f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd686e"
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
              "_id": "62ebc0e08a312c984bbd6871"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6870"
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
              "_id": "62ebc0e08a312c984bbd6873"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6872"
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
              "_id": "62ebc0e08a312c984bbd6875"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6874"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6851",
    "audioID": 406,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 405,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6853"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6854"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6855"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6856"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6857"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6858"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6859"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd685a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd685b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd685c"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd685d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6852"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 406,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd685f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6860"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6861"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6862"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6863"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6864"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6865"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6866"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6867"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6868"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6869"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd685e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "407",
        "name": "Phạm Hữu Quyền",
        "cty": "ABC",
        "hotline": "33986518"
      },
      "customer": {
        "customerID": "407",
        "name": "Huỳnh Khánh Dạ",
        "phone": "50419256",
        "address": "Hà Nội",
        "cmnd": "39014461"
      },
      "fileURL": "talk407.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "541s",
      "date": "9/7/2022",
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
              "_id": "62ebc0e08a312c984bbd6890"
            }
          ],
          "_id": "62ebc0e08a312c984bbd688f"
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
              "_id": "62ebc0e08a312c984bbd6892"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6891"
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
              "_id": "62ebc0e08a312c984bbd6894"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6893"
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
              "_id": "62ebc0e08a312c984bbd6896"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6895"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6898"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6897"
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
              "_id": "62ebc0e08a312c984bbd689a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6899"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6876",
    "audioID": 407,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 406,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6878"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6879"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd687a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd687b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd687c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd687d"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd687e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd687f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6880"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6881"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6882"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6877"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 407,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6884"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6885"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6886"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6887"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6888"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6889"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd688a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd688b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd688c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd688d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd688e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6883"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "408",
        "name": "Huỳnh Hải Hồng",
        "cty": "ABC",
        "hotline": "28250157"
      },
      "customer": {
        "customerID": "408",
        "name": "Huỳnh An Ánh",
        "phone": "22012294",
        "address": "Hà Nội",
        "cmnd": "55040173"
      },
      "fileURL": "talk408.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "552s",
      "date": "4/11/2022",
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
              "_id": "62ebc0e08a312c984bbd68b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68b4"
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
              "_id": "62ebc0e08a312c984bbd68b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68b6"
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
              "_id": "62ebc0e08a312c984bbd68b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68b8"
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
              "_id": "62ebc0e08a312c984bbd68bb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68ba"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd68bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68bc"
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
              "_id": "62ebc0e08a312c984bbd68bf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68be"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd689b",
    "audioID": 408,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 407,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd689d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd689e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd689f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68a0"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68a1"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd68a2"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68a3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68a4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68a5"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68a6"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68a7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd689c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 408,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd68a9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68aa"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd68ab"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68ac"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd68ad"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd68ae"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68af"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68b0"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68b1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68b2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd68b3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd68a8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "409",
        "name": "Nguyễn Văn Cảnh",
        "cty": "ABC",
        "hotline": "90972814"
      },
      "customer": {
        "customerID": "409",
        "name": "Phan Khánh Khánh",
        "phone": "59344681",
        "address": "Hà Nội",
        "cmnd": "46731540"
      },
      "fileURL": "talk409.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "243s",
      "date": "31/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd68da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68d9"
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
              "_id": "62ebc0e08a312c984bbd68dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68db"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd68de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68dd"
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
              "_id": "62ebc0e08a312c984bbd68e0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68df"
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
              "_id": "62ebc0e08a312c984bbd68e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68e1"
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
              "_id": "62ebc0e08a312c984bbd68e4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68e3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd68c0",
    "audioID": 409,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 408,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68c2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd68c3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd68c4"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68c5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68c6"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd68c7"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd68c8"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd68c9"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68ca"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd68cb"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68cc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd68c1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 409,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68ce"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68cf"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68d0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68d1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd68d2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd68d3"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd68d4"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68d5"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68d6"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68d7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd68d8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd68cd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "410",
        "name": "Lê Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "42869235"
      },
      "customer": {
        "customerID": "410",
        "name": "Huỳnh Thị Khánh",
        "phone": "71765558",
        "address": "Hà Nội",
        "cmnd": "12651417"
      },
      "fileURL": "talk410.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "516s",
      "date": "15/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd68ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd68fe"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6901"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6900"
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
              "_id": "62ebc0e08a312c984bbd6903"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6902"
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
              "_id": "62ebc0e08a312c984bbd6905"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6904"
        },
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
              "_id": "62ebc0e08a312c984bbd6907"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6906"
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
              "_id": "62ebc0e08a312c984bbd6909"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6908"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd68e5",
    "audioID": 410,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 409,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68e7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd68e8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd68e9"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68ea"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd68eb"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68ec"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68ed"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd68ee"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68ef"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68f0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd68f1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd68e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 410,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68f3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd68f4"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd68f5"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68f6"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd68f7"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd68f8"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68f9"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68fa"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd68fb"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68fc"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd68fd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd68f2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "411",
        "name": "Bùi Quốc Hồng",
        "cty": "ABC",
        "hotline": "86019130"
      },
      "customer": {
        "customerID": "411",
        "name": "Trần Hải Thái Qúy",
        "phone": "98113100",
        "address": "Hà Nội",
        "cmnd": "14348913"
      },
      "fileURL": "talk411.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "193s",
      "date": "3/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6924"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6923"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6926"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6925"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6928"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6927"
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
              "_id": "62ebc0e08a312c984bbd692a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6929"
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
              "_id": "62ebc0e08a312c984bbd692c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd692b"
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
              "_id": "62ebc0e08a312c984bbd692e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd692d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd690a",
    "audioID": 411,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 410,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd690c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd690d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd690e"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd690f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6910"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6911"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6912"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6913"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6914"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6915"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6916"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd690b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 411,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6918"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6919"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd691a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd691b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd691c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd691d"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd691e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd691f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6920"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6921"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6922"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6917"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "412",
        "name": "Lê Hải Duy",
        "cty": "ABC",
        "hotline": "98350838"
      },
      "customer": {
        "customerID": "412",
        "name": "Huỳnh An Khánh",
        "phone": "99433286",
        "address": "Hà Nội",
        "cmnd": "88920107"
      },
      "fileURL": "talk412.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "326s",
      "date": "7/1/2022",
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
              "_id": "62ebc0e08a312c984bbd6949"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6948"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd694b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd694a"
        },
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
              "_id": "62ebc0e08a312c984bbd694d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd694c"
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
              "_id": "62ebc0e08a312c984bbd694f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd694e"
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
              "_id": "62ebc0e08a312c984bbd6951"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6950"
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
              "_id": "62ebc0e08a312c984bbd6953"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6952"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd692f",
    "audioID": 412,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 411,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6931"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6932"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6933"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6934"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6935"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6936"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6937"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6938"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6939"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd693a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd693b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6930"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 412,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd693d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd693e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd693f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6940"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6941"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6942"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6943"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6944"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6945"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6946"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6947"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd693c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "413",
        "name": "Huỳnh Quốc Khánh",
        "cty": "ABC",
        "hotline": "12582685"
      },
      "customer": {
        "customerID": "413",
        "name": "Trần Minh Quyền",
        "phone": "46192270",
        "address": "Hà Nội",
        "cmnd": "74222541"
      },
      "fileURL": "talk413.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "40s",
      "date": "16/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd696e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd696d"
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
              "_id": "62ebc0e08a312c984bbd6970"
            }
          ],
          "_id": "62ebc0e08a312c984bbd696f"
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
              "_id": "62ebc0e08a312c984bbd6972"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6971"
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
              "_id": "62ebc0e08a312c984bbd6974"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6973"
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
              "_id": "62ebc0e08a312c984bbd6976"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6975"
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
              "_id": "62ebc0e08a312c984bbd6978"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6977"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6954",
    "audioID": 413,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 412,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6956"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6957"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6958"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6959"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd695a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd695b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd695c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd695d"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd695e"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd695f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6960"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6955"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 413,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6962"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6963"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6964"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6965"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6966"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6967"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6968"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6969"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd696a"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd696b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd696c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6961"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "414",
        "name": "Phan Hải An",
        "cty": "ABC",
        "hotline": "71575942"
      },
      "customer": {
        "customerID": "414",
        "name": "Phạm Văn Dạ",
        "phone": "96245462",
        "address": "Hà Nội",
        "cmnd": "74019519"
      },
      "fileURL": "talk414.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "310s",
      "date": "29/6/2022",
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
              "_id": "62ebc0e08a312c984bbd6993"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6992"
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
              "_id": "62ebc0e08a312c984bbd6995"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6994"
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
              "_id": "62ebc0e08a312c984bbd6997"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6996"
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
              "_id": "62ebc0e08a312c984bbd6999"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6998"
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
              "_id": "62ebc0e08a312c984bbd699b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd699a"
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
              "_id": "62ebc0e08a312c984bbd699d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd699c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6979",
    "audioID": 414,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 413,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd697b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd697c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd697d"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd697e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd697f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6980"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6981"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6982"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6983"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6984"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6985"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd697a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 414,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6987"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6988"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6989"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd698a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd698b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd698c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd698d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd698e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd698f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6990"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6991"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6986"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "415",
        "name": "Huỳnh Dương An",
        "cty": "ABC",
        "hotline": "47417705"
      },
      "customer": {
        "customerID": "415",
        "name": "Nguyễn Quốc An",
        "phone": "33966079",
        "address": "Hà Nội",
        "cmnd": "35884616"
      },
      "fileURL": "talk415.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "423s",
      "date": "15/6/2022",
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
              "_id": "62ebc0e08a312c984bbd69b8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69b7"
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
              "_id": "62ebc0e08a312c984bbd69ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69b9"
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
              "_id": "62ebc0e08a312c984bbd69bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69bb"
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
              "_id": "62ebc0e08a312c984bbd69be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69bd"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd69c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69bf"
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
              "_id": "62ebc0e08a312c984bbd69c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69c1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd699e",
    "audioID": 415,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 414,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69a0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69a1"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69a2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69a3"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69a4"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69a5"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69a6"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69a7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69a8"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69a9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69aa"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd699f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 415,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69ac"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69ad"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69ae"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69af"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69b0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69b1"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69b2"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69b3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69b4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69b5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69b6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd69ab"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "416",
        "name": "Bùi Dương Cảnh",
        "cty": "ABC",
        "hotline": "81421778"
      },
      "customer": {
        "customerID": "416",
        "name": "Bùi Phương Duy",
        "phone": "54515291",
        "address": "Hà Nội",
        "cmnd": "59291151"
      },
      "fileURL": "talk416.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "489s",
      "date": "1/5/2022",
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
              "_id": "62ebc0e08a312c984bbd69dd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69dc"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd69df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69de"
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
              "_id": "62ebc0e08a312c984bbd69e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69e0"
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
              "_id": "62ebc0e08a312c984bbd69e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69e2"
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
              "_id": "62ebc0e08a312c984bbd69e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69e4"
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
              "_id": "62ebc0e08a312c984bbd69e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd69e6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd69c3",
    "audioID": 416,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 415,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd69c5"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd69c6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd69c7"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69c8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69c9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69ca"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69cb"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69cc"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd69cd"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69ce"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69cf"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd69c4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 416,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69d1"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69d2"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69d3"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69d4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69d5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69d6"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69d7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69d8"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd69d9"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69da"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd69db"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd69d0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "417",
        "name": "Đặng Quốc Duy",
        "cty": "ABC",
        "hotline": "54730448"
      },
      "customer": {
        "customerID": "417",
        "name": "Trần Phương Khánh",
        "phone": "20299288",
        "address": "Hà Nội",
        "cmnd": "15978840"
      },
      "fileURL": "talk417.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "444s",
      "date": "7/8/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6a02"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a01"
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
              "_id": "62ebc0e08a312c984bbd6a04"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a03"
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
              "_id": "62ebc0e08a312c984bbd6a06"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a05"
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
              "_id": "62ebc0e08a312c984bbd6a08"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a07"
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
              "_id": "62ebc0e08a312c984bbd6a0a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a09"
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
              "_id": "62ebc0e08a312c984bbd6a0c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a0b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd69e8",
    "audioID": 417,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 416,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69ea"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69eb"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69ec"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd69ed"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd69ee"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69ef"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd69f0"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69f1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69f2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69f3"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69f4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd69e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 417,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69f6"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69f7"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd69f8"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69f9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd69fa"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd69fb"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd69fc"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69fd"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd69fe"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd69ff"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a00"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd69f5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "418",
        "name": "Trần Khánh Dạ",
        "cty": "ABC",
        "hotline": "84307330"
      },
      "customer": {
        "customerID": "418",
        "name": "Phan Dương Cảnh",
        "phone": "57483879",
        "address": "Hà Nội",
        "cmnd": "37234221"
      },
      "fileURL": "talk418.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "315s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6a27"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a26"
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
              "_id": "62ebc0e08a312c984bbd6a29"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a28"
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
              "_id": "62ebc0e08a312c984bbd6a2b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a2a"
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
              "_id": "62ebc0e08a312c984bbd6a2d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a2c"
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
              "_id": "62ebc0e08a312c984bbd6a2f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a2e"
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
              "_id": "62ebc0e08a312c984bbd6a31"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a30"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6a0d",
    "audioID": 418,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 417,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a0f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a10"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a11"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a12"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a13"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a14"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a15"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a16"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a17"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a18"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a19"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a0e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 418,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a1b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a1c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a1d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a1e"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a1f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a20"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a21"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a22"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a23"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a24"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a25"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a1a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "419",
        "name": "Phạm Minh Cảnh",
        "cty": "ABC",
        "hotline": "30716762"
      },
      "customer": {
        "customerID": "419",
        "name": "Lê Phương Khánh",
        "phone": "70368916",
        "address": "Hà Nội",
        "cmnd": "91385517"
      },
      "fileURL": "talk419.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "137s",
      "date": "28/2/2022",
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
              "_id": "62ebc0e08a312c984bbd6a4c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a4b"
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
              "_id": "62ebc0e08a312c984bbd6a4e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a4d"
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
              "_id": "62ebc0e08a312c984bbd6a50"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a4f"
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
              "_id": "62ebc0e08a312c984bbd6a52"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a51"
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
              "_id": "62ebc0e08a312c984bbd6a54"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a53"
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
              "_id": "62ebc0e08a312c984bbd6a56"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a55"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6a32",
    "audioID": 419,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 418,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a34"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a35"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a36"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a37"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a38"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a39"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a3a"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a3b"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a3c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a3d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a3e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a33"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 419,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a40"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a41"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a42"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a43"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a44"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a45"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a46"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a47"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a48"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a49"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a4a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a3f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "420",
        "name": "Ngô An Hồng",
        "cty": "ABC",
        "hotline": "85264849"
      },
      "customer": {
        "customerID": "420",
        "name": "Nguyễn Hữu Cảnh",
        "phone": "28553717",
        "address": "Hà Nội",
        "cmnd": "97313058"
      },
      "fileURL": "talk420.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "420s",
      "date": "26/3/2022",
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
              "_id": "62ebc0e08a312c984bbd6a71"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a70"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6a73"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a72"
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
              "_id": "62ebc0e08a312c984bbd6a75"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a74"
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
              "_id": "62ebc0e08a312c984bbd6a77"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a76"
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
              "_id": "62ebc0e08a312c984bbd6a79"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a78"
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
              "_id": "62ebc0e08a312c984bbd6a7b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a7a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6a57",
    "audioID": 420,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 419,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a59"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a5a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a5b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a5c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a5d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a5e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a5f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a60"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a61"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a62"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a63"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a58"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 420,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a65"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a66"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a67"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a68"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a69"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a6a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a6b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a6c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a6d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a6e"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a6f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a64"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "421",
        "name": "Ngô Dương Cảnh",
        "cty": "ABC",
        "hotline": "54104291"
      },
      "customer": {
        "customerID": "421",
        "name": "Phạm An Cảnh",
        "phone": "90741834",
        "address": "Hà Nội",
        "cmnd": "18707938"
      },
      "fileURL": "talk421.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "412s",
      "date": "10/8/2022",
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
              "_id": "62ebc0e08a312c984bbd6a96"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a95"
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
              "_id": "62ebc0e08a312c984bbd6a98"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a97"
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
              "_id": "62ebc0e08a312c984bbd6a9a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a99"
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
              "_id": "62ebc0e08a312c984bbd6a9c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a9b"
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
              "_id": "62ebc0e08a312c984bbd6a9e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a9d"
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
              "_id": "62ebc0e08a312c984bbd6aa0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6a9f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6a7c",
    "audioID": 421,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 420,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a7e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a7f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a80"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a81"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6a82"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6a83"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a84"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a85"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a86"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a87"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a88"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a7d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 421,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6a8a"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6a8b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a8c"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6a8d"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a8e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6a8f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a90"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6a91"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6a92"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6a93"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6a94"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6a89"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "422",
        "name": "Trương An Duy",
        "cty": "ABC",
        "hotline": "28329858"
      },
      "customer": {
        "customerID": "422",
        "name": "Nguyễn Hữu Thái Qúy",
        "phone": "70661573",
        "address": "Hà Nội",
        "cmnd": "77714132"
      },
      "fileURL": "talk422.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "452s",
      "date": "4/6/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6abb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6aba"
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
              "_id": "62ebc0e08a312c984bbd6abd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6abc"
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
              "_id": "62ebc0e08a312c984bbd6abf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6abe"
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
              "_id": "62ebc0e08a312c984bbd6ac1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ac0"
        },
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
              "_id": "62ebc0e08a312c984bbd6ac3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ac2"
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
              "_id": "62ebc0e08a312c984bbd6ac5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ac4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6aa1",
    "audioID": 422,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 421,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6aa3"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6aa4"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6aa5"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6aa6"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6aa7"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6aa8"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6aa9"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6aaa"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6aab"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6aac"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6aad"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6aa2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 422,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6aaf"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ab0"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ab1"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6ab2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ab3"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ab4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ab5"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ab6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ab7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6ab8"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ab9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6aae"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "423",
        "name": "Đặng Quốc An",
        "cty": "ABC",
        "hotline": "10134237"
      },
      "customer": {
        "customerID": "423",
        "name": "Phan Thị Cảnh",
        "phone": "69001560",
        "address": "Hà Nội",
        "cmnd": "23139548"
      },
      "fileURL": "talk423.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "131s",
      "date": "8/6/2022",
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
              "_id": "62ebc0e08a312c984bbd6ae0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6adf"
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
              "_id": "62ebc0e08a312c984bbd6ae2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ae1"
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
              "_id": "62ebc0e08a312c984bbd6ae4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ae3"
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
              "_id": "62ebc0e08a312c984bbd6ae6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ae5"
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
              "_id": "62ebc0e08a312c984bbd6ae8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ae7"
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
              "_id": "62ebc0e08a312c984bbd6aea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ae9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ac6",
    "audioID": 423,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 422,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ac8"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ac9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6aca"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6acb"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6acc"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6acd"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ace"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6acf"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ad0"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ad1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ad2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ac7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 423,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ad4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6ad5"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ad6"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ad7"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ad8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ad9"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ada"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6adb"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6adc"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6add"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ade"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ad3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "424",
        "name": "Phan Khánh Hồng",
        "cty": "ABC",
        "hotline": "86817696"
      },
      "customer": {
        "customerID": "424",
        "name": "Trương Thị Duy",
        "phone": "11329700",
        "address": "Hà Nội",
        "cmnd": "67784439"
      },
      "fileURL": "talk424.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "377s",
      "date": "31/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6b05"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b04"
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
              "_id": "62ebc0e08a312c984bbd6b07"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b06"
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
              "_id": "62ebc0e08a312c984bbd6b09"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b08"
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
              "_id": "62ebc0e08a312c984bbd6b0b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b0a"
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
              "_id": "62ebc0e08a312c984bbd6b0d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b0c"
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
              "_id": "62ebc0e08a312c984bbd6b0f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b0e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6aeb",
    "audioID": 424,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 423,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6aed"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6aee"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6aef"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6af0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6af1"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6af2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6af3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6af4"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6af5"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6af6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6af7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6aec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 424,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6af9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6afa"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6afb"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6afc"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6afd"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6afe"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6aff"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b00"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b01"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b02"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b03"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6af8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "425",
        "name": "Đặng Hải Khánh",
        "cty": "ABC",
        "hotline": "85481040"
      },
      "customer": {
        "customerID": "425",
        "name": "Phan Hữu Khánh",
        "phone": "23773097",
        "address": "Hà Nội",
        "cmnd": "46911358"
      },
      "fileURL": "talk425.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "188s",
      "date": "30/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6b2a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b29"
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
              "_id": "62ebc0e08a312c984bbd6b2c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b2b"
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
              "_id": "62ebc0e08a312c984bbd6b2e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b2d"
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
              "_id": "62ebc0e08a312c984bbd6b30"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b2f"
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
              "_id": "62ebc0e08a312c984bbd6b32"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b31"
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
              "_id": "62ebc0e08a312c984bbd6b34"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b33"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6b10",
    "audioID": 425,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 424,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b12"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b13"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b14"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b15"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b16"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b17"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b18"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b19"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b1a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b1b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6b1c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b11"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 425,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b1e"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b1f"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b20"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b21"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b22"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b23"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b24"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b25"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6b26"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b27"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b28"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b1d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "426",
        "name": "Phan Dương Dạ",
        "cty": "ABC",
        "hotline": "91342351"
      },
      "customer": {
        "customerID": "426",
        "name": "Huỳnh Minh An",
        "phone": "78327950",
        "address": "Hà Nội",
        "cmnd": "40356562"
      },
      "fileURL": "talk426.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "528s",
      "date": "12/5/2022",
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
              "_id": "62ebc0e08a312c984bbd6b4f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b4e"
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
              "_id": "62ebc0e08a312c984bbd6b51"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b50"
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
              "_id": "62ebc0e08a312c984bbd6b53"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b52"
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
              "_id": "62ebc0e08a312c984bbd6b55"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b54"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6b57"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b56"
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
              "_id": "62ebc0e08a312c984bbd6b59"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b58"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6b35",
    "audioID": 426,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 425,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b37"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b38"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b39"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b3a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b3b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6b3c"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6b3d"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b3e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b3f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b40"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b41"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b36"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 426,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b43"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b44"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b45"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6b46"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b47"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b48"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b49"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b4a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b4b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b4c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b4d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b42"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "427",
        "name": "Đặng Phương Quyền",
        "cty": "ABC",
        "hotline": "96463956"
      },
      "customer": {
        "customerID": "427",
        "name": "Phan Minh Thái Qúy",
        "phone": "86926324",
        "address": "Hà Nội",
        "cmnd": "43677272"
      },
      "fileURL": "talk427.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "269s",
      "date": "17/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6b74"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b73"
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
              "_id": "62ebc0e08a312c984bbd6b76"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b75"
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
              "_id": "62ebc0e08a312c984bbd6b78"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b77"
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
              "_id": "62ebc0e08a312c984bbd6b7a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b79"
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
              "_id": "62ebc0e08a312c984bbd6b7c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b7b"
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
              "_id": "62ebc0e08a312c984bbd6b7e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b7d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6b5a",
    "audioID": 427,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 426,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b5c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b5d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b5e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b5f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b60"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b61"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b62"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b63"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b64"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b65"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b66"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b5b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 427,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b68"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b69"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b6a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b6b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b6c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b6d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b6e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b6f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6b70"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b71"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b72"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b67"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "428",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "63345473"
      },
      "customer": {
        "customerID": "428",
        "name": "Ngô Khánh Lợi",
        "phone": "91110190",
        "address": "Hà Nội",
        "cmnd": "53740164"
      },
      "fileURL": "talk428.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "153s",
      "date": "13/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6b99"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b98"
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
              "_id": "62ebc0e08a312c984bbd6b9b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b9a"
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
              "_id": "62ebc0e08a312c984bbd6b9d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b9c"
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
              "_id": "62ebc0e08a312c984bbd6b9f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6b9e"
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
              "_id": "62ebc0e08a312c984bbd6ba1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ba0"
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
              "_id": "62ebc0e08a312c984bbd6ba3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ba2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6b7f",
    "audioID": 428,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 427,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6b81"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b82"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b83"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b84"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b85"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b86"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b87"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6b88"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6b89"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6b8a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b8b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b80"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 428,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b8d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b8e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6b8f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6b90"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6b91"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6b92"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b93"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6b94"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b95"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6b96"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6b97"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6b8c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "429",
        "name": "Huỳnh Hữu Lợi",
        "cty": "ABC",
        "hotline": "53940623"
      },
      "customer": {
        "customerID": "429",
        "name": "Trần Hữu Ánh",
        "phone": "61587289",
        "address": "Hà Nội",
        "cmnd": "98106861"
      },
      "fileURL": "talk429.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "56s",
      "date": "28/5/2022",
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
              "_id": "62ebc0e08a312c984bbd6bbe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bbd"
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
              "_id": "62ebc0e08a312c984bbd6bc0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bbf"
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
              "_id": "62ebc0e08a312c984bbd6bc2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bc1"
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
              "_id": "62ebc0e08a312c984bbd6bc4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bc3"
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
              "_id": "62ebc0e08a312c984bbd6bc6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bc5"
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
              "_id": "62ebc0e08a312c984bbd6bc8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bc7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ba4",
    "audioID": 429,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 428,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ba6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ba7"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ba8"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6ba9"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6baa"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bab"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bac"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bad"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6bae"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6baf"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6bb0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ba5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 429,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6bb2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bb3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bb4"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6bb5"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6bb6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bb7"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6bb8"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6bb9"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6bba"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bbb"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bbc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6bb1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "430",
        "name": "Phan An Thái Qúy",
        "cty": "ABC",
        "hotline": "52542650"
      },
      "customer": {
        "customerID": "430",
        "name": "Nguyễn Hữu Lợi",
        "phone": "97839376",
        "address": "Hà Nội",
        "cmnd": "63782679"
      },
      "fileURL": "talk430.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "424s",
      "date": "21/1/2022",
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
              "_id": "62ebc0e08a312c984bbd6be3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6be2"
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
              "_id": "62ebc0e08a312c984bbd6be5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6be4"
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
              "_id": "62ebc0e08a312c984bbd6be7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6be6"
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
              "_id": "62ebc0e08a312c984bbd6be9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6be8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6beb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bea"
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
              "_id": "62ebc0e08a312c984bbd6bed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6bec"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6bc9",
    "audioID": 430,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 429,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6bcb"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6bcc"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6bcd"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bce"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bcf"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6bd0"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6bd1"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bd2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bd3"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6bd4"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6bd5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6bca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 430,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bd7"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6bd8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6bd9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6bda"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6bdb"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6bdc"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6bdd"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6bde"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6bdf"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6be0"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6be1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6bd6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "431",
        "name": "Nguyễn Quốc Cảnh",
        "cty": "ABC",
        "hotline": "10347429"
      },
      "customer": {
        "customerID": "431",
        "name": "Phan Quốc Thái Qúy",
        "phone": "44432283",
        "address": "Hà Nội",
        "cmnd": "45425746"
      },
      "fileURL": "talk431.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "214s",
      "date": "22/7/2022",
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
              "_id": "62ebc0e08a312c984bbd6c08"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c07"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6c0a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c09"
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
              "_id": "62ebc0e08a312c984bbd6c0c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c0b"
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
              "_id": "62ebc0e08a312c984bbd6c0e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c0d"
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
              "_id": "62ebc0e08a312c984bbd6c10"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c0f"
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
              "_id": "62ebc0e08a312c984bbd6c12"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c11"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6bee",
    "audioID": 431,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 430,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bf0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bf1"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6bf2"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6bf3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bf4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6bf5"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6bf6"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bf7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bf8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6bf9"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6bfa"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6bef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 431,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6bfc"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6bfd"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6bfe"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6bff"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c00"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c01"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c02"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c03"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c04"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c05"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c06"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6bfb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "432",
        "name": "Lê Phương Cảnh",
        "cty": "ABC",
        "hotline": "31002602"
      },
      "customer": {
        "customerID": "432",
        "name": "Phạm Quốc Thái Qúy",
        "phone": "21184878",
        "address": "Hà Nội",
        "cmnd": "32200138"
      },
      "fileURL": "talk432.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "206s",
      "date": "1/9/2022",
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
              "_id": "62ebc0e08a312c984bbd6c2d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c2c"
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
              "_id": "62ebc0e08a312c984bbd6c2f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c2e"
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
              "_id": "62ebc0e08a312c984bbd6c31"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c30"
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
              "_id": "62ebc0e08a312c984bbd6c33"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c32"
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
              "_id": "62ebc0e08a312c984bbd6c35"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c34"
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
              "_id": "62ebc0e08a312c984bbd6c37"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c36"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6c13",
    "audioID": 432,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 431,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c15"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c16"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c17"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c18"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c19"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c1a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c1b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c1c"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c1d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c1e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c1f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c14"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 432,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c21"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c22"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c23"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c24"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c25"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c26"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c27"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c28"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c29"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c2a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c2b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c20"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "433",
        "name": "Phạm An Duy",
        "cty": "ABC",
        "hotline": "53302868"
      },
      "customer": {
        "customerID": "433",
        "name": "Lê Văn Duy",
        "phone": "71961891",
        "address": "Hà Nội",
        "cmnd": "92686053"
      },
      "fileURL": "talk433.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "239s",
      "date": "13/2/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6c52"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c51"
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
              "_id": "62ebc0e08a312c984bbd6c54"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c53"
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
              "_id": "62ebc0e08a312c984bbd6c56"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c55"
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
              "_id": "62ebc0e08a312c984bbd6c58"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c57"
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
              "_id": "62ebc0e08a312c984bbd6c5a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c59"
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
              "_id": "62ebc0e08a312c984bbd6c5c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c5b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6c38",
    "audioID": 433,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 432,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c3a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c3b"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c3c"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c3d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c3e"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c3f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c40"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c41"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c42"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c43"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c44"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c39"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 433,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c46"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c47"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c48"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c49"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c4a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c4b"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c4c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c4d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c4e"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c4f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c50"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c45"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "434",
        "name": "Huỳnh Văn Ánh",
        "cty": "ABC",
        "hotline": "47289307"
      },
      "customer": {
        "customerID": "434",
        "name": "Phạm Dương Dạ",
        "phone": "63047235",
        "address": "Hà Nội",
        "cmnd": "79898469"
      },
      "fileURL": "talk434.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "175s",
      "date": "5/8/2022",
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
              "_id": "62ebc0e08a312c984bbd6c77"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c76"
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
              "_id": "62ebc0e08a312c984bbd6c79"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c78"
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
              "_id": "62ebc0e08a312c984bbd6c7b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c7a"
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
              "_id": "62ebc0e08a312c984bbd6c7d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c7c"
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
              "_id": "62ebc0e08a312c984bbd6c7f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c7e"
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
              "_id": "62ebc0e08a312c984bbd6c81"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c80"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6c5d",
    "audioID": 434,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 433,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c5f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c60"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c61"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c62"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c63"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c64"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c65"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c66"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c67"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c68"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c69"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c5e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 434,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6c6b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c6c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c6d"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c6e"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c6f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c70"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c71"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c72"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c73"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c74"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c75"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c6a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "435",
        "name": "Huỳnh Khánh Khánh",
        "cty": "ABC",
        "hotline": "87573280"
      },
      "customer": {
        "customerID": "435",
        "name": "Nguyễn Quốc Lợi",
        "phone": "31469319",
        "address": "Hà Nội",
        "cmnd": "72818438"
      },
      "fileURL": "talk435.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "87s",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6c9c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c9b"
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
              "_id": "62ebc0e08a312c984bbd6c9e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c9d"
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
              "_id": "62ebc0e08a312c984bbd6ca0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6c9f"
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
              "_id": "62ebc0e08a312c984bbd6ca2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ca1"
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
              "_id": "62ebc0e08a312c984bbd6ca4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ca3"
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
              "_id": "62ebc0e08a312c984bbd6ca6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ca5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6c82",
    "audioID": 435,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 434,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c84"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c85"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c86"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c87"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c88"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6c89"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6c8a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c8b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c8c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6c8d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c8e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c83"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 435,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c90"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6c91"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6c92"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6c93"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c94"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c95"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c96"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6c97"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c98"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6c99"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6c9a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6c8f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "436",
        "name": "Bùi Thị An",
        "cty": "ABC",
        "hotline": "48543598"
      },
      "customer": {
        "customerID": "436",
        "name": "Bùi Văn An",
        "phone": "82347592",
        "address": "Hà Nội",
        "cmnd": "16701292"
      },
      "fileURL": "talk436.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "344s",
      "date": "1/5/2022",
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
              "_id": "62ebc0e08a312c984bbd6cc1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cc0"
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
              "_id": "62ebc0e08a312c984bbd6cc3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cc2"
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
              "_id": "62ebc0e08a312c984bbd6cc5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cc4"
        },
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
              "_id": "62ebc0e08a312c984bbd6cc7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cc6"
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
              "_id": "62ebc0e08a312c984bbd6cc9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cc8"
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
              "_id": "62ebc0e08a312c984bbd6ccb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cca"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ca7",
    "audioID": 436,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 435,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ca9"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6caa"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cab"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cac"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cad"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cae"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6caf"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cb0"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cb1"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6cb2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cb3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ca8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 436,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6cb5"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cb6"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6cb7"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6cb8"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cb9"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6cba"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cbb"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cbc"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cbd"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cbe"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cbf"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6cb4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "437",
        "name": "Phạm Văn Dạ",
        "cty": "ABC",
        "hotline": "54303271"
      },
      "customer": {
        "customerID": "437",
        "name": "Lê Hải Hồng",
        "phone": "27830015",
        "address": "Hà Nội",
        "cmnd": "26640688"
      },
      "fileURL": "talk437.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "85s",
      "date": "22/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6ce6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ce5"
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
              "_id": "62ebc0e08a312c984bbd6ce8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ce7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6cea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ce9"
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
              "_id": "62ebc0e08a312c984bbd6cec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ceb"
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
              "_id": "62ebc0e08a312c984bbd6cee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ced"
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
              "_id": "62ebc0e08a312c984bbd6cf0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6cef"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ccc",
    "audioID": 437,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 436,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6cce"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ccf"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cd0"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6cd1"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cd2"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cd3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cd4"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6cd5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cd6"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6cd7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6cd8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ccd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 437,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cda"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cdb"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cdc"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cdd"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cde"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cdf"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ce0"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ce1"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ce2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ce3"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ce4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6cd9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "438",
        "name": "Lê Dương Ánh",
        "cty": "ABC",
        "hotline": "64435126"
      },
      "customer": {
        "customerID": "438",
        "name": "Huỳnh Khánh Thái Qúy",
        "phone": "21948840",
        "address": "Hà Nội",
        "cmnd": "10658053"
      },
      "fileURL": "talk438.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "347s",
      "date": "22/8/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6d0b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d0a"
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
              "_id": "62ebc0e08a312c984bbd6d0d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d0c"
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
              "_id": "62ebc0e08a312c984bbd6d0f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d0e"
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
              "_id": "62ebc0e08a312c984bbd6d11"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d10"
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
              "_id": "62ebc0e08a312c984bbd6d13"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d12"
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
              "_id": "62ebc0e08a312c984bbd6d15"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d14"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6cf1",
    "audioID": 438,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 437,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cf3"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cf4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6cf5"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6cf6"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6cf7"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6cf8"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6cf9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6cfa"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6cfb"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6cfc"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6cfd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6cf2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 438,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6cff"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d00"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d01"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d02"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d03"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d04"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d05"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d06"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d07"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d08"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d09"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6cfe"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "439",
        "name": "Nguyễn Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "40920537"
      },
      "customer": {
        "customerID": "439",
        "name": "Huỳnh Minh Quyền",
        "phone": "19646095",
        "address": "Hà Nội",
        "cmnd": "22707642"
      },
      "fileURL": "talk439.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "528s",
      "date": "14/1/2022",
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
              "_id": "62ebc0e08a312c984bbd6d30"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d2f"
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
              "_id": "62ebc0e08a312c984bbd6d32"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d31"
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
              "_id": "62ebc0e08a312c984bbd6d34"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d33"
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
              "_id": "62ebc0e08a312c984bbd6d36"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d35"
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
              "_id": "62ebc0e08a312c984bbd6d38"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d37"
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
              "_id": "62ebc0e08a312c984bbd6d3a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d39"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6d16",
    "audioID": 439,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 438,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6d18"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d19"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d1a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d1b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d1c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d1d"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d1e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d1f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d20"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d21"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d22"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d17"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 439,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d24"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d25"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d26"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d27"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d28"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d29"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d2a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d2b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d2c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d2d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d2e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d23"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "440",
        "name": "Huỳnh Khánh Quyền",
        "cty": "ABC",
        "hotline": "37414536"
      },
      "customer": {
        "customerID": "440",
        "name": "Huỳnh Phương Duy",
        "phone": "11192591",
        "address": "Hà Nội",
        "cmnd": "65508444"
      },
      "fileURL": "talk440.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "164s",
      "date": "16/10/2022",
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
              "_id": "62ebc0e08a312c984bbd6d55"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d54"
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
              "_id": "62ebc0e08a312c984bbd6d57"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d56"
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
              "_id": "62ebc0e08a312c984bbd6d59"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d58"
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
              "_id": "62ebc0e08a312c984bbd6d5b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d5a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6d5d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d5c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6d5f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d5e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6d3b",
    "audioID": 440,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 439,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d3d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d3e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d3f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d40"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d41"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d42"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6d43"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d44"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d45"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d46"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6d47"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d3c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 440,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d49"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6d4a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d4b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d4c"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d4d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d4e"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6d4f"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d50"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d51"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d52"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d53"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d48"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "441",
        "name": "Phan Quốc An",
        "cty": "ABC",
        "hotline": "80749797"
      },
      "customer": {
        "customerID": "441",
        "name": "Lê Hữu Cảnh",
        "phone": "43721725",
        "address": "Hà Nội",
        "cmnd": "50798341"
      },
      "fileURL": "talk441.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "320s",
      "date": "21/12/2022",
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
              "_id": "62ebc0e08a312c984bbd6d7a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d79"
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
              "_id": "62ebc0e08a312c984bbd6d7c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d7b"
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
              "_id": "62ebc0e08a312c984bbd6d7e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d7d"
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
              "_id": "62ebc0e08a312c984bbd6d80"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d7f"
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
              "_id": "62ebc0e08a312c984bbd6d82"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d81"
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
              "_id": "62ebc0e08a312c984bbd6d84"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d83"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6d60",
    "audioID": 441,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 440,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d62"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d63"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d64"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d65"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6d66"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d67"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d68"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d69"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d6a"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d6b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d6c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d61"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 441,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d6e"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d6f"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d70"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d71"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d72"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d73"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d74"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d75"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d76"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d77"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d78"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d6d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "442",
        "name": "Trương Hải Hồng",
        "cty": "ABC",
        "hotline": "56882473"
      },
      "customer": {
        "customerID": "442",
        "name": "Phạm Văn Lợi",
        "phone": "15465995",
        "address": "Hà Nội",
        "cmnd": "27875681"
      },
      "fileURL": "talk442.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "203s",
      "date": "21/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6d9f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6d9e"
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
              "_id": "62ebc0e08a312c984bbd6da1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6da0"
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
              "_id": "62ebc0e08a312c984bbd6da3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6da2"
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
              "_id": "62ebc0e08a312c984bbd6da5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6da4"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6da7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6da6"
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
              "_id": "62ebc0e08a312c984bbd6da9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6da8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6d85",
    "audioID": 442,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 441,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6d87"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d88"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d89"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d8a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d8b"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d8c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6d8d"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d8e"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d8f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6d90"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6d91"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d86"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 442,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6d93"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d94"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d95"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6d96"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d97"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6d98"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6d99"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6d9a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6d9b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6d9c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6d9d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6d92"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "443",
        "name": "Trương Phương Ánh",
        "cty": "ABC",
        "hotline": "66603516"
      },
      "customer": {
        "customerID": "443",
        "name": "Huỳnh Thị Ánh",
        "phone": "64211152",
        "address": "Hà Nội",
        "cmnd": "98770868"
      },
      "fileURL": "talk443.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "426s",
      "date": "11/4/2022",
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
              "_id": "62ebc0e08a312c984bbd6dc4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dc3"
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
              "_id": "62ebc0e08a312c984bbd6dc6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dc5"
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
              "_id": "62ebc0e08a312c984bbd6dc8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dc7"
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
              "_id": "62ebc0e08a312c984bbd6dca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dc9"
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
              "_id": "62ebc0e08a312c984bbd6dcc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dcb"
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
              "_id": "62ebc0e08a312c984bbd6dce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dcd"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6daa",
    "audioID": 443,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 442,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6dac"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dad"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6dae"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6daf"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6db0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6db1"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6db2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6db3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6db4"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6db5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6db6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6dab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 443,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6db8"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6db9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6dba"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6dbb"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6dbc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6dbd"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6dbe"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dbf"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6dc0"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6dc1"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6dc2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6db7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "444",
        "name": "Ngô Thị Cảnh",
        "cty": "ABC",
        "hotline": "15393553"
      },
      "customer": {
        "customerID": "444",
        "name": "Phạm Hải Quyền",
        "phone": "58288205",
        "address": "Hà Nội",
        "cmnd": "52810704"
      },
      "fileURL": "talk444.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "529s",
      "date": "26/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6de9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6de8"
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
              "_id": "62ebc0e08a312c984bbd6deb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dea"
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
              "_id": "62ebc0e08a312c984bbd6ded"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dec"
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
              "_id": "62ebc0e08a312c984bbd6def"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6dee"
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
              "_id": "62ebc0e08a312c984bbd6df1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6df0"
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
              "_id": "62ebc0e08a312c984bbd6df3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6df2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6dcf",
    "audioID": 444,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 443,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6dd1"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6dd2"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dd3"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6dd4"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6dd5"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dd6"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6dd7"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6dd8"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dd9"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6dda"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ddb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6dd0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 444,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ddd"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6dde"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ddf"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6de0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6de1"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6de2"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6de3"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6de4"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6de5"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6de6"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6de7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ddc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "445",
        "name": "Trương Dương Hồng",
        "cty": "ABC",
        "hotline": "37218361"
      },
      "customer": {
        "customerID": "445",
        "name": "Ngô Dương Quyền",
        "phone": "53992280",
        "address": "Hà Nội",
        "cmnd": "49654175"
      },
      "fileURL": "talk445.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "88s",
      "date": "14/7/2022",
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
              "_id": "62ebc0e08a312c984bbd6e0e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e0d"
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
              "_id": "62ebc0e08a312c984bbd6e10"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e0f"
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
              "_id": "62ebc0e08a312c984bbd6e12"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e11"
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
              "_id": "62ebc0e08a312c984bbd6e14"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e13"
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
              "_id": "62ebc0e08a312c984bbd6e16"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e15"
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
              "_id": "62ebc0e08a312c984bbd6e18"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e17"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6df4",
    "audioID": 445,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 444,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6df6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6df7"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6df8"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6df9"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dfa"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6dfb"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6dfc"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6dfd"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6dfe"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6dff"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e00"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6df5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 445,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e02"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e03"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e04"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e05"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6e06"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e07"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e08"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e09"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e0a"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e0b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e0c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e01"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "446",
        "name": "Bùi Minh Ánh",
        "cty": "ABC",
        "hotline": "31092426"
      },
      "customer": {
        "customerID": "446",
        "name": "Trương Hải Dạ",
        "phone": "17776040",
        "address": "Hà Nội",
        "cmnd": "13553217"
      },
      "fileURL": "talk446.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "296s",
      "date": "19/2/2022",
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
              "_id": "62ebc0e08a312c984bbd6e33"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e32"
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
              "_id": "62ebc0e08a312c984bbd6e35"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e34"
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
              "_id": "62ebc0e08a312c984bbd6e37"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e36"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6e39"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e38"
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
              "_id": "62ebc0e08a312c984bbd6e3b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e3a"
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
              "_id": "62ebc0e08a312c984bbd6e3d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e3c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6e19",
    "audioID": 446,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 445,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e1b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6e1c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e1d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e1e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e1f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e20"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e21"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e22"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e23"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e24"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e25"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e1a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 446,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e27"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e28"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e29"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e2a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e2b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e2c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e2d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e2e"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e2f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e30"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e31"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e26"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "447",
        "name": "Phạm Khánh Khánh",
        "cty": "ABC",
        "hotline": "14609387"
      },
      "customer": {
        "customerID": "447",
        "name": "Trương Hữu Thái Qúy",
        "phone": "77760814",
        "address": "Hà Nội",
        "cmnd": "69836891"
      },
      "fileURL": "talk447.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "374s",
      "date": "8/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6e58"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e57"
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
              "_id": "62ebc0e08a312c984bbd6e5a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e59"
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
              "_id": "62ebc0e08a312c984bbd6e5c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e5b"
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
              "_id": "62ebc0e08a312c984bbd6e5e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e5d"
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
              "_id": "62ebc0e08a312c984bbd6e60"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e5f"
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
              "_id": "62ebc0e08a312c984bbd6e62"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e61"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6e3e",
    "audioID": 447,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 446,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e40"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e41"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e42"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6e43"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e44"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e45"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e46"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e47"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e48"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e49"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e4a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e3f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 447,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e4c"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e4d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e4e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e4f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e50"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e51"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e52"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e53"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e54"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e55"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e56"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e4b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "448",
        "name": "Phạm Dương Duy",
        "cty": "ABC",
        "hotline": "92614245"
      },
      "customer": {
        "customerID": "448",
        "name": "Đặng Văn Duy",
        "phone": "23412476",
        "address": "Hà Nội",
        "cmnd": "51365046"
      },
      "fileURL": "talk448.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "328s",
      "date": "19/6/2022",
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
              "_id": "62ebc0e08a312c984bbd6e7d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e7c"
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
              "_id": "62ebc0e08a312c984bbd6e7f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e7e"
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
              "_id": "62ebc0e08a312c984bbd6e81"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e80"
        },
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
              "_id": "62ebc0e08a312c984bbd6e83"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e82"
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
              "_id": "62ebc0e08a312c984bbd6e85"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e84"
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
              "_id": "62ebc0e08a312c984bbd6e87"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6e86"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6e63",
    "audioID": 448,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 447,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e65"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e66"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e67"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e68"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e69"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e6a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e6b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6e6c"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e6d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e6e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e6f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e64"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 448,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e71"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6e72"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e73"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6e74"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e75"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e76"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e77"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e78"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e79"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e7a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e7b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e70"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "449",
        "name": "Nguyễn Hữu Dạ",
        "cty": "ABC",
        "hotline": "19656147"
      },
      "customer": {
        "customerID": "449",
        "name": "Phan Minh Duy",
        "phone": "50522510",
        "address": "Hà Nội",
        "cmnd": "59446699"
      },
      "fileURL": "talk449.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "40s",
      "date": "8/10/2022",
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
              "_id": "62ebc0e08a312c984bbd6ea2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ea1"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6ea4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ea3"
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
              "_id": "62ebc0e08a312c984bbd6ea6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ea5"
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
              "_id": "62ebc0e08a312c984bbd6ea8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ea7"
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
              "_id": "62ebc0e08a312c984bbd6eaa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ea9"
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
              "_id": "62ebc0e08a312c984bbd6eac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6eab"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6e88",
    "audioID": 449,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 448,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e8a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e8b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e8c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e8d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e8e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6e8f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6e90"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e91"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e92"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e93"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e94"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e89"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 449,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e96"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6e97"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e98"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e99"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6e9a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e9b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6e9c"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6e9d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6e9e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6e9f"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ea0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6e95"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "450",
        "name": "Ngô Dương Quyền",
        "cty": "ABC",
        "hotline": "36918638"
      },
      "customer": {
        "customerID": "450",
        "name": "Phan Khánh Hồng",
        "phone": "89191941",
        "address": "Hà Nội",
        "cmnd": "26433985"
      },
      "fileURL": "talk450.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "99s",
      "date": "2/11/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6ec7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ec6"
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
              "_id": "62ebc0e08a312c984bbd6ec9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ec8"
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
              "_id": "62ebc0e08a312c984bbd6ecb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6eca"
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
              "_id": "62ebc0e08a312c984bbd6ecd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ecc"
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
              "_id": "62ebc0e08a312c984bbd6ecf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ece"
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
              "_id": "62ebc0e08a312c984bbd6ed1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ed0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ead",
    "audioID": 450,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 449,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6eaf"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6eb0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6eb1"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6eb2"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6eb3"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6eb4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6eb5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6eb6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6eb7"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6eb8"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6eb9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6eae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 450,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ebb"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6ebc"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6ebd"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ebe"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ebf"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ec0"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ec1"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ec2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ec3"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6ec4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ec5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6eba"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "451",
        "name": "Huỳnh Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "64879494"
      },
      "customer": {
        "customerID": "451",
        "name": "Đặng Thị Ánh",
        "phone": "63488842",
        "address": "Hà Nội",
        "cmnd": "55994031"
      },
      "fileURL": "talk451.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "85s",
      "date": "20/12/2022",
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
              "_id": "62ebc0e08a312c984bbd6eec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6eeb"
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
              "_id": "62ebc0e08a312c984bbd6eee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6eed"
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
              "_id": "62ebc0e08a312c984bbd6ef0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6eef"
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
              "_id": "62ebc0e08a312c984bbd6ef2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ef1"
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
              "_id": "62ebc0e08a312c984bbd6ef4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ef3"
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
              "_id": "62ebc0e08a312c984bbd6ef6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ef5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ed2",
    "audioID": 451,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 450,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ed4"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ed5"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ed6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ed7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ed8"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ed9"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6eda"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6edb"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6edc"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6edd"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ede"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ed3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 451,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ee0"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ee1"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6ee2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6ee3"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ee4"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6ee5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ee6"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6ee7"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ee8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ee9"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6eea"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6edf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "452",
        "name": "Đặng Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "57296744"
      },
      "customer": {
        "customerID": "452",
        "name": "Đặng Văn Duy",
        "phone": "84658105",
        "address": "Hà Nội",
        "cmnd": "60108146"
      },
      "fileURL": "talk452.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "507s",
      "date": "23/9/2022",
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
              "_id": "62ebc0e08a312c984bbd6f11"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f10"
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
              "_id": "62ebc0e08a312c984bbd6f13"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f12"
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
              "_id": "62ebc0e08a312c984bbd6f15"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f14"
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
              "_id": "62ebc0e08a312c984bbd6f17"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f16"
        },
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
              "_id": "62ebc0e08a312c984bbd6f19"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f18"
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
              "_id": "62ebc0e08a312c984bbd6f1b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f1a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ef7",
    "audioID": 452,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 451,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6ef9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6efa"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6efb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6efc"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6efd"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6efe"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6eff"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f00"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f01"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f02"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f03"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ef8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 452,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f05"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f06"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f07"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f08"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f09"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f0a"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f0b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f0c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f0d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f0e"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f0f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f04"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "453",
        "name": "Trần Hữu Thái Qúy",
        "cty": "ABC",
        "hotline": "26778774"
      },
      "customer": {
        "customerID": "453",
        "name": "Lê Phương Khánh",
        "phone": "34769011",
        "address": "Hà Nội",
        "cmnd": "82936213"
      },
      "fileURL": "talk453.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "26s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6f36"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f35"
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
              "_id": "62ebc0e08a312c984bbd6f38"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f37"
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
              "_id": "62ebc0e08a312c984bbd6f3a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f39"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6f3c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f3b"
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
              "_id": "62ebc0e08a312c984bbd6f3e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f3d"
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
              "_id": "62ebc0e08a312c984bbd6f40"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f3f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6f1c",
    "audioID": 453,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 452,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f1e"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f1f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f20"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f21"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f22"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f23"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f24"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f25"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f26"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f27"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f28"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f1d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 453,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f2a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f2b"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f2c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f2d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f2e"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6f2f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f30"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f31"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f32"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f33"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f34"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f29"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "454",
        "name": "Lê Minh Ánh",
        "cty": "ABC",
        "hotline": "30711337"
      },
      "customer": {
        "customerID": "454",
        "name": "Ngô An Duy",
        "phone": "55684070",
        "address": "Hà Nội",
        "cmnd": "11980972"
      },
      "fileURL": "talk454.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "357s",
      "date": "3/9/2022",
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
              "_id": "62ebc0e08a312c984bbd6f5b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f5a"
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
              "_id": "62ebc0e08a312c984bbd6f5d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f5c"
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
              "_id": "62ebc0e08a312c984bbd6f5f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f5e"
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
              "_id": "62ebc0e08a312c984bbd6f61"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f60"
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
              "_id": "62ebc0e08a312c984bbd6f63"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f62"
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
              "_id": "62ebc0e08a312c984bbd6f65"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f64"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6f41",
    "audioID": 454,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 453,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6f43"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f44"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f45"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f46"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f47"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f48"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f49"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f4a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f4b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f4c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f4d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f42"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 454,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6f4f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f50"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f51"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f52"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f53"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f54"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f55"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f56"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6f57"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f58"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f59"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f4e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "455",
        "name": "Ngô Văn Khánh",
        "cty": "ABC",
        "hotline": "23905760"
      },
      "customer": {
        "customerID": "455",
        "name": "Nguyễn Khánh Cảnh",
        "phone": "89971637",
        "address": "Hà Nội",
        "cmnd": "64382540"
      },
      "fileURL": "talk455.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "448s",
      "date": "7/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd6f80"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f7f"
        },
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
              "_id": "62ebc0e08a312c984bbd6f82"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f81"
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
              "_id": "62ebc0e08a312c984bbd6f84"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f83"
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
              "_id": "62ebc0e08a312c984bbd6f86"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f85"
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
              "_id": "62ebc0e08a312c984bbd6f88"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f87"
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
              "_id": "62ebc0e08a312c984bbd6f8a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6f89"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6f66",
    "audioID": 455,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 454,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f68"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f69"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f6a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f6b"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6f6c"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f6d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f6e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6f6f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6f70"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f71"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f72"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f67"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 455,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6f74"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6f75"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f76"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f77"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f78"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f79"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f7a"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f7b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f7c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f7d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f7e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f73"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "456",
        "name": "Phạm Minh Lợi",
        "cty": "ABC",
        "hotline": "18049815"
      },
      "customer": {
        "customerID": "456",
        "name": "Lê Quốc Quyền",
        "phone": "79128800",
        "address": "Hà Nội",
        "cmnd": "95969789"
      },
      "fileURL": "talk456.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "446s",
      "date": "14/5/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6fa5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fa4"
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
              "_id": "62ebc0e08a312c984bbd6fa7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fa6"
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
              "_id": "62ebc0e08a312c984bbd6fa9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fa8"
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
              "_id": "62ebc0e08a312c984bbd6fab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6faa"
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
              "_id": "62ebc0e08a312c984bbd6fad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fac"
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
              "_id": "62ebc0e08a312c984bbd6faf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fae"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6f8b",
    "audioID": 456,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 455,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f8d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f8e"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f8f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f90"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f91"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f92"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f93"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6f94"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6f95"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6f96"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6f97"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f8c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 456,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f99"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6f9a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f9b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6f9c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f9d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6f9e"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6f9f"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fa0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fa1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6fa2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6fa3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6f98"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "457",
        "name": "Bùi An Duy",
        "cty": "ABC",
        "hotline": "57641097"
      },
      "customer": {
        "customerID": "457",
        "name": "Phạm Dương Duy",
        "phone": "17637290",
        "address": "Hà Nội",
        "cmnd": "57903877"
      },
      "fileURL": "talk457.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "141s",
      "date": "16/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6fca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fc9"
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
              "_id": "62ebc0e08a312c984bbd6fcc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fcb"
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
              "_id": "62ebc0e08a312c984bbd6fce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fcd"
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
              "_id": "62ebc0e08a312c984bbd6fd0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fcf"
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
              "_id": "62ebc0e08a312c984bbd6fd2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fd1"
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
              "_id": "62ebc0e08a312c984bbd6fd4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fd3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6fb0",
    "audioID": 457,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 456,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6fb2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6fb3"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6fb4"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6fb5"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6fb6"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6fb7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fb8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6fb9"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fba"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6fbb"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6fbc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6fb1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 457,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fbe"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6fbf"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fc0"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fc1"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6fc2"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fc3"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6fc4"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6fc5"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fc6"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6fc7"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6fc8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6fbd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "458",
        "name": "Nguyễn An Lợi",
        "cty": "ABC",
        "hotline": "93016359"
      },
      "customer": {
        "customerID": "458",
        "name": "Phạm Phương Duy",
        "phone": "87331166",
        "address": "Hà Nội",
        "cmnd": "17189074"
      },
      "fileURL": "talk458.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "373s",
      "date": "1/2/2022",
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
              "_id": "62ebc0e08a312c984bbd6fef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6fee"
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
              "_id": "62ebc0e08a312c984bbd6ff1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ff0"
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
              "_id": "62ebc0e08a312c984bbd6ff3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ff2"
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
              "_id": "62ebc0e08a312c984bbd6ff5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ff4"
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
              "_id": "62ebc0e08a312c984bbd6ff7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ff6"
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
              "_id": "62ebc0e08a312c984bbd6ff9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6ff8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6fd5",
    "audioID": 458,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 457,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fd7"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6fd8"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6fd9"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6fda"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fdb"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fdc"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6fdd"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fde"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fdf"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6fe0"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6fe1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6fd6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 458,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fe3"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6fe4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fe5"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6fe6"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fe7"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6fe8"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6fe9"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6fea"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6feb"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6fec"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6fed"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6fe2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "459",
        "name": "Đặng Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "83244125"
      },
      "customer": {
        "customerID": "459",
        "name": "Bùi An Hồng",
        "phone": "51505659",
        "address": "Hà Nội",
        "cmnd": "29311582"
      },
      "fileURL": "talk459.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "13s",
      "date": "30/9/2022",
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
              "_id": "62ebc0e08a312c984bbd7014"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7013"
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
              "_id": "62ebc0e08a312c984bbd7016"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7015"
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
              "_id": "62ebc0e08a312c984bbd7018"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7017"
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
              "_id": "62ebc0e08a312c984bbd701a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7019"
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
              "_id": "62ebc0e08a312c984bbd701c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd701b"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd701e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd701d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6ffa",
    "audioID": 459,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 458,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ffc"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6ffd"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6ffe"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6fff"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7000"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7001"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7002"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7003"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7004"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7005"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7006"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6ffb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 459,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7008"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7009"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd700a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd700b"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd700c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd700d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd700e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd700f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7010"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7011"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7012"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7007"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "460",
        "name": "Phan Hữu Hồng",
        "cty": "ABC",
        "hotline": "80215905"
      },
      "customer": {
        "customerID": "460",
        "name": "Nguyễn An Cảnh",
        "phone": "76486968",
        "address": "Hà Nội",
        "cmnd": "42327086"
      },
      "fileURL": "talk460.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "49s",
      "date": "31/4/2022",
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
              "_id": "62ebc0e08a312c984bbd7039"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7038"
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
              "_id": "62ebc0e08a312c984bbd703b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd703a"
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
              "_id": "62ebc0e08a312c984bbd703d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd703c"
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
              "_id": "62ebc0e08a312c984bbd703f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd703e"
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
              "_id": "62ebc0e08a312c984bbd7041"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7040"
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
              "_id": "62ebc0e08a312c984bbd7043"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7042"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd701f",
    "audioID": 460,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 459,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7021"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7022"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7023"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7024"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7025"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7026"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7027"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7028"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7029"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd702a"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd702b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7020"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 460,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd702d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd702e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd702f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7030"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7031"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7032"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7033"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7034"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7035"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7036"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7037"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd702c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "461",
        "name": "Phan Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "74179531"
      },
      "customer": {
        "customerID": "461",
        "name": "Bùi Dương Thái Qúy",
        "phone": "42933000",
        "address": "Hà Nội",
        "cmnd": "36419155"
      },
      "fileURL": "talk461.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "340s",
      "date": "14/5/2022",
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
              "_id": "62ebc0e08a312c984bbd705e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd705d"
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
              "_id": "62ebc0e08a312c984bbd7060"
            }
          ],
          "_id": "62ebc0e08a312c984bbd705f"
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
              "_id": "62ebc0e08a312c984bbd7062"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7061"
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
              "_id": "62ebc0e08a312c984bbd7064"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7063"
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
              "_id": "62ebc0e08a312c984bbd7066"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7065"
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
              "_id": "62ebc0e08a312c984bbd7068"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7067"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7044",
    "audioID": 461,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 460,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7046"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7047"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7048"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7049"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd704a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd704b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd704c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd704d"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd704e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd704f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7050"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7045"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 461,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7052"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7053"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7054"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7055"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7056"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7057"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7058"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7059"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd705a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd705b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd705c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7051"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "462",
        "name": "Nguyễn Khánh Ánh",
        "cty": "ABC",
        "hotline": "96160266"
      },
      "customer": {
        "customerID": "462",
        "name": "Nguyễn Quốc Ánh",
        "phone": "59238080",
        "address": "Hà Nội",
        "cmnd": "54735923"
      },
      "fileURL": "talk462.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "102s",
      "date": "26/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7083"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7082"
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
              "_id": "62ebc0e08a312c984bbd7085"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7084"
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
              "_id": "62ebc0e08a312c984bbd7087"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7086"
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
              "_id": "62ebc0e08a312c984bbd7089"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7088"
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
              "_id": "62ebc0e08a312c984bbd708b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd708a"
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
              "_id": "62ebc0e08a312c984bbd708d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd708c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7069",
    "audioID": 462,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 461,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd706b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd706c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd706d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd706e"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd706f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7070"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7071"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7072"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7073"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7074"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7075"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd706a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 462,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7077"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7078"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7079"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd707a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd707b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd707c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd707d"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd707e"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd707f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7080"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7081"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7076"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "463",
        "name": "Huỳnh Văn Duy",
        "cty": "ABC",
        "hotline": "99038156"
      },
      "customer": {
        "customerID": "463",
        "name": "Trương Khánh Thái Qúy",
        "phone": "50262895",
        "address": "Hà Nội",
        "cmnd": "93895519"
      },
      "fileURL": "talk463.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "477s",
      "date": "17/5/2022",
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
              "_id": "62ebc0e08a312c984bbd70a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70a7"
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
              "_id": "62ebc0e08a312c984bbd70aa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70a9"
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
              "_id": "62ebc0e08a312c984bbd70ac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70ab"
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
              "_id": "62ebc0e08a312c984bbd70ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70ad"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd70b0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70af"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd70b2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70b1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd708e",
    "audioID": 463,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 462,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7090"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7091"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7092"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7093"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7094"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7095"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7096"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7097"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7098"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7099"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd709a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd708f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 463,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd709c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd709d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd709e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd709f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70a0"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd70a1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70a2"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd70a3"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd70a4"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70a5"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd70a6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd709b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "464",
        "name": "Trần Văn Lợi",
        "cty": "ABC",
        "hotline": "61592486"
      },
      "customer": {
        "customerID": "464",
        "name": "Ngô Phương An",
        "phone": "69725966",
        "address": "Hà Nội",
        "cmnd": "93363059"
      },
      "fileURL": "talk464.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "129s",
      "date": "23/2/2022",
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
              "_id": "62ebc0e08a312c984bbd70cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70cc"
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
              "_id": "62ebc0e08a312c984bbd70cf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70ce"
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
              "_id": "62ebc0e08a312c984bbd70d1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70d0"
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
              "_id": "62ebc0e08a312c984bbd70d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70d2"
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
              "_id": "62ebc0e08a312c984bbd70d5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70d4"
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
              "_id": "62ebc0e08a312c984bbd70d7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70d6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd70b3",
    "audioID": 464,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 463,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70b5"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd70b6"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70b7"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd70b8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70b9"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70ba"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd70bb"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70bc"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70bd"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70be"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70bf"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd70b4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 464,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70c1"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70c2"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70c3"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd70c4"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70c5"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70c6"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd70c7"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd70c8"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd70c9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70ca"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70cb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd70c0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "465",
        "name": "Bùi Hải Lợi",
        "cty": "ABC",
        "hotline": "35578459"
      },
      "customer": {
        "customerID": "465",
        "name": "Phạm Phương Ánh",
        "phone": "45104214",
        "address": "Hà Nội",
        "cmnd": "29783949"
      },
      "fileURL": "talk465.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "447s",
      "date": "24/6/2022",
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
              "_id": "62ebc0e08a312c984bbd70f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70f1"
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
              "_id": "62ebc0e08a312c984bbd70f4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70f3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd70f6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70f5"
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
              "_id": "62ebc0e08a312c984bbd70f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70f7"
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
              "_id": "62ebc0e08a312c984bbd70fa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70f9"
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
              "_id": "62ebc0e08a312c984bbd70fc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd70fb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd70d8",
    "audioID": 465,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 464,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd70da"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd70db"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd70dc"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd70dd"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70de"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd70df"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70e0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70e1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70e2"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd70e3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd70e4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd70d9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 465,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70e6"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70e7"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70e8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70e9"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70ea"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70eb"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70ec"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd70ed"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd70ee"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd70ef"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd70f0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd70e5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "466",
        "name": "Ngô Văn Khánh",
        "cty": "ABC",
        "hotline": "49128879"
      },
      "customer": {
        "customerID": "466",
        "name": "Bùi Hải An",
        "phone": "64362033",
        "address": "Hà Nội",
        "cmnd": "17159090"
      },
      "fileURL": "talk466.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "88s",
      "date": "18/9/2022",
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
              "_id": "62ebc0e08a312c984bbd7117"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7116"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7119"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7118"
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
              "_id": "62ebc0e08a312c984bbd711b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd711a"
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
              "_id": "62ebc0e08a312c984bbd711d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd711c"
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
              "_id": "62ebc0e08a312c984bbd711f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd711e"
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
              "_id": "62ebc0e08a312c984bbd7121"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7120"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd70fd",
    "audioID": 466,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 465,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd70ff"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7100"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7101"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7102"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7103"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7104"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7105"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7106"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7107"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7108"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7109"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd70fe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 466,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd710b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd710c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd710d"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd710e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd710f"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7110"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7111"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7112"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7113"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7114"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7115"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd710a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "467",
        "name": "Nguyễn Phương Khánh",
        "cty": "ABC",
        "hotline": "10958164"
      },
      "customer": {
        "customerID": "467",
        "name": "Huỳnh Văn Cảnh",
        "phone": "33713664",
        "address": "Hà Nội",
        "cmnd": "90530326"
      },
      "fileURL": "talk467.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "398s",
      "date": "30/6/2022",
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
              "_id": "62ebc0e08a312c984bbd713c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd713b"
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
              "_id": "62ebc0e08a312c984bbd713e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd713d"
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
              "_id": "62ebc0e08a312c984bbd7140"
            }
          ],
          "_id": "62ebc0e08a312c984bbd713f"
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
              "_id": "62ebc0e08a312c984bbd7142"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7141"
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
              "_id": "62ebc0e08a312c984bbd7144"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7143"
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
              "_id": "62ebc0e08a312c984bbd7146"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7145"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7122",
    "audioID": 467,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 466,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7124"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7125"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7126"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7127"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7128"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7129"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd712a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd712b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd712c"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd712d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd712e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7123"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 467,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7130"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7131"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7132"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7133"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7134"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7135"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7136"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7137"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7138"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7139"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd713a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd712f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "468",
        "name": "Bùi Minh Cảnh",
        "cty": "ABC",
        "hotline": "57301874"
      },
      "customer": {
        "customerID": "468",
        "name": "Bùi Khánh Dạ",
        "phone": "86583968",
        "address": "Hà Nội",
        "cmnd": "24853301"
      },
      "fileURL": "talk468.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "447s",
      "date": "14/9/2022",
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
              "_id": "62ebc0e08a312c984bbd7161"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7160"
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
              "_id": "62ebc0e08a312c984bbd7163"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7162"
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
              "_id": "62ebc0e08a312c984bbd7165"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7164"
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
              "_id": "62ebc0e08a312c984bbd7167"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7166"
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
              "_id": "62ebc0e08a312c984bbd7169"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7168"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd716b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd716a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7147",
    "audioID": 468,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 467,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7149"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd714a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd714b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd714c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd714d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd714e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd714f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7150"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7151"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7152"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7153"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7148"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 468,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7155"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7156"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7157"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7158"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7159"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd715a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd715b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd715c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd715d"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd715e"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd715f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7154"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "469",
        "name": "Ngô Khánh Khánh",
        "cty": "ABC",
        "hotline": "68042140"
      },
      "customer": {
        "customerID": "469",
        "name": "Phạm Thị Lợi",
        "phone": "61465715",
        "address": "Hà Nội",
        "cmnd": "96029300"
      },
      "fileURL": "talk469.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "515s",
      "date": "19/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd7186"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7185"
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
              "_id": "62ebc0e08a312c984bbd7188"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7187"
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
              "_id": "62ebc0e08a312c984bbd718a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7189"
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
              "_id": "62ebc0e08a312c984bbd718c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd718b"
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
              "_id": "62ebc0e08a312c984bbd718e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd718d"
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
              "_id": "62ebc0e08a312c984bbd7190"
            }
          ],
          "_id": "62ebc0e08a312c984bbd718f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd716c",
    "audioID": 469,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 468,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd716e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd716f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7170"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7171"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7172"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7173"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7174"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7175"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7176"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7177"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7178"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd716d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 469,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd717a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd717b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd717c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd717d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd717e"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd717f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7180"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7181"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7182"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7183"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7184"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7179"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "470",
        "name": "Phan Dương Duy",
        "cty": "ABC",
        "hotline": "54100047"
      },
      "customer": {
        "customerID": "470",
        "name": "Ngô Khánh Thái Qúy",
        "phone": "24485566",
        "address": "Hà Nội",
        "cmnd": "91600823"
      },
      "fileURL": "talk470.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "272s",
      "date": "24/2/2022",
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
              "_id": "62ebc0e08a312c984bbd71ab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71aa"
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
              "_id": "62ebc0e08a312c984bbd71ad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71ac"
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
              "_id": "62ebc0e08a312c984bbd71af"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71ae"
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
              "_id": "62ebc0e08a312c984bbd71b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71b0"
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
              "_id": "62ebc0e08a312c984bbd71b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71b2"
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
              "_id": "62ebc0e08a312c984bbd71b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71b4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7191",
    "audioID": 470,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 469,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7193"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7194"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7195"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7196"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7197"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7198"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7199"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd719a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd719b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd719c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd719d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7192"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 470,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd719f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71a0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71a1"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71a2"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71a3"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd71a4"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd71a5"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71a6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71a7"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71a8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd71a9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd719e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "471",
        "name": "Phạm Hữu Khánh",
        "cty": "ABC",
        "hotline": "63583961"
      },
      "customer": {
        "customerID": "471",
        "name": "Ngô Minh Dạ",
        "phone": "83798913",
        "address": "Hà Nội",
        "cmnd": "18435195"
      },
      "fileURL": "talk471.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "483s",
      "date": "30/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd71d0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71cf"
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
              "_id": "62ebc0e08a312c984bbd71d2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71d1"
        },
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
              "_id": "62ebc0e08a312c984bbd71d4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71d3"
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
              "_id": "62ebc0e08a312c984bbd71d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71d5"
        },
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
              "_id": "62ebc0e08a312c984bbd71d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71d7"
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
              "_id": "62ebc0e08a312c984bbd71da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71d9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd71b6",
    "audioID": 471,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 470,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd71b8"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71b9"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71ba"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71bb"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71bc"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71bd"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd71be"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd71bf"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71c0"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71c1"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd71c2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd71b7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 471,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71c4"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71c5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71c6"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71c7"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd71c8"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71c9"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd71ca"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71cb"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71cc"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd71cd"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71ce"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd71c3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "472",
        "name": "Bùi Phương Dạ",
        "cty": "ABC",
        "hotline": "14305781"
      },
      "customer": {
        "customerID": "472",
        "name": "Trần Quốc Hồng",
        "phone": "80267566",
        "address": "Hà Nội",
        "cmnd": "55586990"
      },
      "fileURL": "talk472.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "313s",
      "date": "9/10/2022",
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
              "_id": "62ebc0e08a312c984bbd71f5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71f4"
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
              "_id": "62ebc0e08a312c984bbd71f7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71f6"
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
              "_id": "62ebc0e08a312c984bbd71f9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71f8"
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
              "_id": "62ebc0e08a312c984bbd71fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71fa"
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
              "_id": "62ebc0e08a312c984bbd71fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71fc"
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
              "_id": "62ebc0e08a312c984bbd71ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd71fe"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd71db",
    "audioID": 472,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 471,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71dd"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71de"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71df"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71e0"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd71e1"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71e2"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71e3"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd71e4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71e5"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd71e6"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71e7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd71dc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 472,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd71e9"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71ea"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd71eb"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd71ec"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd71ed"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd71ee"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd71ef"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd71f0"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd71f1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd71f2"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd71f3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd71e8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "473",
        "name": "Trương Khánh Lợi",
        "cty": "ABC",
        "hotline": "60756113"
      },
      "customer": {
        "customerID": "473",
        "name": "Huỳnh Quốc Quyền",
        "phone": "70855205",
        "address": "Hà Nội",
        "cmnd": "90734826"
      },
      "fileURL": "talk473.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "555s",
      "date": "9/12/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd721a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7219"
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
              "_id": "62ebc0e08a312c984bbd721c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd721b"
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
              "_id": "62ebc0e08a312c984bbd721e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd721d"
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
              "_id": "62ebc0e08a312c984bbd7220"
            }
          ],
          "_id": "62ebc0e08a312c984bbd721f"
        },
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
              "_id": "62ebc0e08a312c984bbd7222"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7221"
        },
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
              "_id": "62ebc0e08a312c984bbd7224"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7223"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7200",
    "audioID": 473,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 472,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7202"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7203"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7204"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7205"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7206"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7207"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7208"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7209"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd720a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd720b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd720c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7201"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 473,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd720e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd720f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7210"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7211"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7212"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7213"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7214"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7215"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7216"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7217"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7218"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd720d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "474",
        "name": "Ngô Văn Ánh",
        "cty": "ABC",
        "hotline": "25135933"
      },
      "customer": {
        "customerID": "474",
        "name": "Trương Văn Duy",
        "phone": "90873704",
        "address": "Hà Nội",
        "cmnd": "96928534"
      },
      "fileURL": "talk474.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "466s",
      "date": "5/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd723f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd723e"
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
              "_id": "62ebc0e08a312c984bbd7241"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7240"
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
              "_id": "62ebc0e08a312c984bbd7243"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7242"
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
              "_id": "62ebc0e08a312c984bbd7245"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7244"
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
              "_id": "62ebc0e08a312c984bbd7247"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7246"
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
              "_id": "62ebc0e08a312c984bbd7249"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7248"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7225",
    "audioID": 474,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 473,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7227"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7228"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7229"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd722a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd722b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd722c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd722d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd722e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd722f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7230"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7231"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7226"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 474,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7233"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7234"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7235"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7236"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7237"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7238"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7239"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd723a"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd723b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd723c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd723d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7232"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "475",
        "name": "Đặng Hữu Cảnh",
        "cty": "ABC",
        "hotline": "79958524"
      },
      "customer": {
        "customerID": "475",
        "name": "Trần Hữu An",
        "phone": "60336943",
        "address": "Hà Nội",
        "cmnd": "78198213"
      },
      "fileURL": "talk475.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "543s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7264"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7263"
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
              "_id": "62ebc0e08a312c984bbd7266"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7265"
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
              "_id": "62ebc0e08a312c984bbd7268"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7267"
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
              "_id": "62ebc0e08a312c984bbd726a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7269"
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
              "_id": "62ebc0e08a312c984bbd726c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd726b"
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
              "_id": "62ebc0e08a312c984bbd726e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd726d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd724a",
    "audioID": 475,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 474,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd724c"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd724d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd724e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd724f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7250"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7251"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7252"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7253"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7254"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7255"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7256"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd724b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 475,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7258"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7259"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd725a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd725b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd725c"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd725d"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd725e"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd725f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7260"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7261"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7262"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7257"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "476",
        "name": "Trương Phương Quyền",
        "cty": "ABC",
        "hotline": "57811185"
      },
      "customer": {
        "customerID": "476",
        "name": "Trương Hải An",
        "phone": "49960484",
        "address": "Hà Nội",
        "cmnd": "68605510"
      },
      "fileURL": "talk476.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "83s",
      "date": "18/3/2022",
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
              "_id": "62ebc0e08a312c984bbd7289"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7288"
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
              "_id": "62ebc0e08a312c984bbd728b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd728a"
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
              "_id": "62ebc0e08a312c984bbd728d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd728c"
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
              "_id": "62ebc0e08a312c984bbd728f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd728e"
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
              "_id": "62ebc0e08a312c984bbd7291"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7290"
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
              "_id": "62ebc0e08a312c984bbd7293"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7292"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd726f",
    "audioID": 476,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 475,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7271"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7272"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7273"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7274"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7275"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7276"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7277"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7278"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7279"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd727a"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd727b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7270"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 476,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd727d"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd727e"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd727f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7280"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7281"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7282"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7283"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7284"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7285"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7286"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7287"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd727c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "477",
        "name": "Đặng Hải An",
        "cty": "ABC",
        "hotline": "81239261"
      },
      "customer": {
        "customerID": "477",
        "name": "Trần Thị Thái Qúy",
        "phone": "42293905",
        "address": "Hà Nội",
        "cmnd": "38666504"
      },
      "fileURL": "talk477.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "472s",
      "date": "15/12/2022",
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
              "_id": "62ebc0e08a312c984bbd72ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72ad"
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
              "_id": "62ebc0e08a312c984bbd72b0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72af"
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
              "_id": "62ebc0e08a312c984bbd72b2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72b1"
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
              "_id": "62ebc0e08a312c984bbd72b4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72b3"
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
              "_id": "62ebc0e08a312c984bbd72b6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72b5"
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
              "_id": "62ebc0e08a312c984bbd72b8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72b7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7294",
    "audioID": 477,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 476,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7296"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7297"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7298"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7299"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd729a"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd729b"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd729c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd729d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd729e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd729f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72a0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7295"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 477,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd72a2"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72a3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72a4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72a5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72a6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72a7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72a8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72a9"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd72aa"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72ab"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72ac"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd72a1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "478",
        "name": "Trương An Dạ",
        "cty": "ABC",
        "hotline": "75806241"
      },
      "customer": {
        "customerID": "478",
        "name": "Đặng Khánh Quyền",
        "phone": "20421908",
        "address": "Hà Nội",
        "cmnd": "58969213"
      },
      "fileURL": "talk478.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "522s",
      "date": "29/10/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd72d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72d2"
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
              "_id": "62ebc0e08a312c984bbd72d5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72d4"
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
              "_id": "62ebc0e08a312c984bbd72d7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72d6"
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
              "_id": "62ebc0e08a312c984bbd72d9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72d8"
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
              "_id": "62ebc0e08a312c984bbd72db"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72da"
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
              "_id": "62ebc0e08a312c984bbd72dd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72dc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd72b9",
    "audioID": 478,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 477,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72bb"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72bc"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72bd"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72be"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72bf"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72c0"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72c1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72c2"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72c3"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72c4"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72c5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd72ba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 478,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72c7"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd72c8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd72c9"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72ca"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72cb"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72cc"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72cd"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72ce"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72cf"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72d0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72d1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd72c6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "479",
        "name": "Lê Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "74605144"
      },
      "customer": {
        "customerID": "479",
        "name": "Trương Thị Duy",
        "phone": "77123252",
        "address": "Hà Nội",
        "cmnd": "77850649"
      },
      "fileURL": "talk479.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "166s",
      "date": "13/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd72f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72f7"
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
              "_id": "62ebc0e08a312c984bbd72fa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72f9"
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
              "_id": "62ebc0e08a312c984bbd72fc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72fb"
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
              "_id": "62ebc0e08a312c984bbd72fe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72fd"
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
              "_id": "62ebc0e08a312c984bbd7300"
            }
          ],
          "_id": "62ebc0e08a312c984bbd72ff"
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
              "_id": "62ebc0e08a312c984bbd7302"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7301"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd72de",
    "audioID": 479,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 478,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72e0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd72e1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd72e2"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72e3"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72e4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72e5"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72e6"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72e7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72e8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72e9"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd72ea"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd72df"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 479,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72ec"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd72ed"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72ee"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd72ef"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd72f0"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd72f1"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72f2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72f3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd72f4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd72f5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd72f6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd72eb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "480",
        "name": "Nguyễn Khánh Dạ",
        "cty": "ABC",
        "hotline": "38869739"
      },
      "customer": {
        "customerID": "480",
        "name": "Huỳnh Hải Hồng",
        "phone": "13375461",
        "address": "Hà Nội",
        "cmnd": "58348847"
      },
      "fileURL": "talk480.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "171s",
      "date": "5/6/2022",
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
              "_id": "62ebc0e08a312c984bbd731d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd731c"
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
              "_id": "62ebc0e08a312c984bbd731f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd731e"
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
              "_id": "62ebc0e08a312c984bbd7321"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7320"
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
              "_id": "62ebc0e08a312c984bbd7323"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7322"
        },
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
              "_id": "62ebc0e08a312c984bbd7325"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7324"
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
              "_id": "62ebc0e08a312c984bbd7327"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7326"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7303",
    "audioID": 480,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 479,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7305"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7306"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7307"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7308"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7309"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd730a"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd730b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd730c"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd730d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd730e"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd730f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7304"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 480,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7311"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7312"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7313"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7314"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7315"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7316"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7317"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7318"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7319"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd731a"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd731b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7310"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "481",
        "name": "Ngô Hải Quyền",
        "cty": "ABC",
        "hotline": "64226605"
      },
      "customer": {
        "customerID": "481",
        "name": "Lê Hữu An",
        "phone": "79263520",
        "address": "Hà Nội",
        "cmnd": "23490489"
      },
      "fileURL": "talk481.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "22s",
      "date": "15/5/2022",
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
              "_id": "62ebc0e08a312c984bbd7342"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7341"
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
              "_id": "62ebc0e08a312c984bbd7344"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7343"
        },
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
              "_id": "62ebc0e08a312c984bbd7346"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7345"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7348"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7347"
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
              "_id": "62ebc0e08a312c984bbd734a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7349"
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
              "_id": "62ebc0e08a312c984bbd734c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd734b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7328",
    "audioID": 481,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 480,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd732a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd732b"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd732c"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd732d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd732e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd732f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7330"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7331"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7332"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7333"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7334"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7329"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 481,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7336"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7337"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7338"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7339"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd733a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd733b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd733c"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd733d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd733e"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd733f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7340"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7335"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "482",
        "name": "Trần Hữu An",
        "cty": "ABC",
        "hotline": "74499339"
      },
      "customer": {
        "customerID": "482",
        "name": "Huỳnh Hải Lợi",
        "phone": "87479176",
        "address": "Hà Nội",
        "cmnd": "93591969"
      },
      "fileURL": "talk482.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "23s",
      "date": "1/2/2022",
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
              "_id": "62ebc0e08a312c984bbd7367"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7366"
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
              "_id": "62ebc0e08a312c984bbd7369"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7368"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd736b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd736a"
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
              "_id": "62ebc0e08a312c984bbd736d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd736c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd736f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd736e"
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
              "_id": "62ebc0e08a312c984bbd7371"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7370"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd734d",
    "audioID": 482,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 481,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd734f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7350"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7351"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7352"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7353"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7354"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7355"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7356"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7357"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7358"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7359"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd734e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 482,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd735b"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd735c"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd735d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd735e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd735f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7360"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7361"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7362"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7363"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7364"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7365"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd735a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "483",
        "name": "Lê Hữu Ánh",
        "cty": "ABC",
        "hotline": "42401236"
      },
      "customer": {
        "customerID": "483",
        "name": "Trương An Duy",
        "phone": "28252277",
        "address": "Hà Nội",
        "cmnd": "35850110"
      },
      "fileURL": "talk483.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "502s",
      "date": "25/9/2022",
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
              "_id": "62ebc0e08a312c984bbd738c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd738b"
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
              "_id": "62ebc0e08a312c984bbd738e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd738d"
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
              "_id": "62ebc0e08a312c984bbd7390"
            }
          ],
          "_id": "62ebc0e08a312c984bbd738f"
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
              "_id": "62ebc0e08a312c984bbd7392"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7391"
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
              "_id": "62ebc0e08a312c984bbd7394"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7393"
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
              "_id": "62ebc0e08a312c984bbd7396"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7395"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7372",
    "audioID": 483,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 482,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7374"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7375"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7376"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7377"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7378"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7379"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd737a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd737b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd737c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd737d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd737e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7373"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 483,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7380"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7381"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7382"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7383"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7384"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7385"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7386"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7387"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7388"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7389"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd738a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd737f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "484",
        "name": "Nguyễn An Thái Qúy",
        "cty": "ABC",
        "hotline": "92615096"
      },
      "customer": {
        "customerID": "484",
        "name": "Nguyễn Minh Duy",
        "phone": "53101111",
        "address": "Hà Nội",
        "cmnd": "59415124"
      },
      "fileURL": "talk484.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "167s",
      "date": "8/5/2022",
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
              "_id": "62ebc0e08a312c984bbd73b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73b0"
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
              "_id": "62ebc0e08a312c984bbd73b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73b2"
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
              "_id": "62ebc0e08a312c984bbd73b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73b4"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd73b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73b6"
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
              "_id": "62ebc0e08a312c984bbd73b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73b8"
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
              "_id": "62ebc0e08a312c984bbd73bb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73ba"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7397",
    "audioID": 484,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 483,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7399"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd739a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd739b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd739c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd739d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd739e"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd739f"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73a0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd73a1"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73a2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73a3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7398"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 484,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73a5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73a6"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73a7"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73a8"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73a9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73aa"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73ab"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73ac"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd73ad"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd73ae"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd73af"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd73a4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "485",
        "name": "Bùi Khánh Dạ",
        "cty": "ABC",
        "hotline": "80305521"
      },
      "customer": {
        "customerID": "485",
        "name": "Trần Văn Thái Qúy",
        "phone": "33243509",
        "address": "Hà Nội",
        "cmnd": "19753010"
      },
      "fileURL": "talk485.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "35s",
      "date": "29/7/2022",
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
              "_id": "62ebc0e08a312c984bbd73d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73d5"
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
              "_id": "62ebc0e08a312c984bbd73d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73d7"
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
              "_id": "62ebc0e08a312c984bbd73da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73d9"
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
              "_id": "62ebc0e08a312c984bbd73dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73db"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd73de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73dd"
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
              "_id": "62ebc0e08a312c984bbd73e0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73df"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd73bc",
    "audioID": 485,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 484,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd73be"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd73bf"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73c0"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73c1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73c2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73c3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73c4"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73c5"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73c6"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73c7"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73c8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd73bd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 485,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd73ca"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73cb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73cc"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73cd"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73ce"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73cf"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd73d0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73d1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd73d2"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73d3"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd73d4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd73c9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "486",
        "name": "Lê Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "14428075"
      },
      "customer": {
        "customerID": "486",
        "name": "Đặng Dương Ánh",
        "phone": "63330260",
        "address": "Hà Nội",
        "cmnd": "42399522"
      },
      "fileURL": "talk486.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "242s",
      "date": "29/7/2022",
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
              "_id": "62ebc0e08a312c984bbd73fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73fa"
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
              "_id": "62ebc0e08a312c984bbd73fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73fc"
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
              "_id": "62ebc0e08a312c984bbd73ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd73fe"
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
              "_id": "62ebc0e08a312c984bbd7401"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7400"
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
              "_id": "62ebc0e08a312c984bbd7403"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7402"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7405"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7404"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd73e1",
    "audioID": 486,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 485,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd73e3"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd73e4"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73e5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73e6"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73e7"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73e8"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73e9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73ea"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73eb"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73ec"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73ed"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd73e2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 486,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd73ef"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73f0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd73f1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73f2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd73f3"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73f4"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd73f5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd73f6"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd73f7"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd73f8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd73f9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd73ee"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "487",
        "name": "Đặng Hải Duy",
        "cty": "ABC",
        "hotline": "20363635"
      },
      "customer": {
        "customerID": "487",
        "name": "Ngô Hải Lợi",
        "phone": "79631752",
        "address": "Hà Nội",
        "cmnd": "64896107"
      },
      "fileURL": "talk487.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "498s",
      "date": "16/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd7420"
            }
          ],
          "_id": "62ebc0e08a312c984bbd741f"
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
              "_id": "62ebc0e08a312c984bbd7422"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7421"
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
              "_id": "62ebc0e08a312c984bbd7424"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7423"
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
              "_id": "62ebc0e08a312c984bbd7426"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7425"
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
              "_id": "62ebc0e08a312c984bbd7428"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7427"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd742a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7429"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7406",
    "audioID": 487,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 486,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7408"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7409"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd740a"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd740b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd740c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd740d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd740e"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd740f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7410"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7411"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7412"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7407"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 487,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7414"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7415"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7416"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7417"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7418"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7419"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd741a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd741b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd741c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd741d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd741e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7413"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "488",
        "name": "Huỳnh Hải Quyền",
        "cty": "ABC",
        "hotline": "98906865"
      },
      "customer": {
        "customerID": "488",
        "name": "Trần Hữu Quyền",
        "phone": "79007617",
        "address": "Hà Nội",
        "cmnd": "39485873"
      },
      "fileURL": "talk488.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "109s",
      "date": "15/2/2022",
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
              "_id": "62ebc0e08a312c984bbd7445"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7444"
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
              "_id": "62ebc0e08a312c984bbd7447"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7446"
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
              "_id": "62ebc0e08a312c984bbd7449"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7448"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd744b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd744a"
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
              "_id": "62ebc0e08a312c984bbd744d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd744c"
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
              "_id": "62ebc0e08a312c984bbd744f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd744e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd742b",
    "audioID": 488,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 487,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd742d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd742e"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd742f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7430"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7431"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7432"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7433"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7434"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7435"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7436"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7437"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd742c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 488,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7439"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd743a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd743b"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd743c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd743d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd743e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd743f"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7440"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7441"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7442"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7443"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7438"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "489",
        "name": "Bùi Hải Khánh",
        "cty": "ABC",
        "hotline": "60522651"
      },
      "customer": {
        "customerID": "489",
        "name": "Đặng Phương Thái Qúy",
        "phone": "22299257",
        "address": "Hà Nội",
        "cmnd": "77311507"
      },
      "fileURL": "talk489.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "24s",
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
              "_id": "62ebc0e08a312c984bbd746a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7469"
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
              "_id": "62ebc0e08a312c984bbd746c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd746b"
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
              "_id": "62ebc0e08a312c984bbd746e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd746d"
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
              "_id": "62ebc0e08a312c984bbd7470"
            }
          ],
          "_id": "62ebc0e08a312c984bbd746f"
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
              "_id": "62ebc0e08a312c984bbd7472"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7471"
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
              "_id": "62ebc0e08a312c984bbd7474"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7473"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7450",
    "audioID": 489,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 488,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7452"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7453"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7454"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7455"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7456"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7457"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7458"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7459"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd745a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd745b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd745c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7451"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 489,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd745e"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd745f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7460"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7461"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7462"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7463"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7464"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7465"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7466"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7467"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7468"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd745d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "490",
        "name": "Đặng Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "88036158"
      },
      "customer": {
        "customerID": "490",
        "name": "Ngô Phương Cảnh",
        "phone": "81336583",
        "address": "Hà Nội",
        "cmnd": "45134222"
      },
      "fileURL": "talk490.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "437s",
      "date": "16/12/2022",
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
              "_id": "62ebc0e08a312c984bbd748f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd748e"
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
              "_id": "62ebc0e08a312c984bbd7491"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7490"
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
              "_id": "62ebc0e08a312c984bbd7493"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7492"
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
              "_id": "62ebc0e08a312c984bbd7495"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7494"
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
              "_id": "62ebc0e08a312c984bbd7497"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7496"
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
              "_id": "62ebc0e08a312c984bbd7499"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7498"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7475",
    "audioID": 490,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 489,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7477"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7478"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7479"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd747a"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd747b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd747c"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd747d"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd747e"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd747f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7480"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7481"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7476"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 490,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7483"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7484"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7485"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7486"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7487"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7488"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7489"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd748a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd748b"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd748c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd748d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7482"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "491",
        "name": "Trương An Duy",
        "cty": "ABC",
        "hotline": "81907442"
      },
      "customer": {
        "customerID": "491",
        "name": "Bùi An Hồng",
        "phone": "26738773",
        "address": "Hà Nội",
        "cmnd": "60944562"
      },
      "fileURL": "talk491.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "111s",
      "date": "13/2/2022",
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
              "_id": "62ebc0e08a312c984bbd74b4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74b3"
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
              "_id": "62ebc0e08a312c984bbd74b6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74b5"
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
              "_id": "62ebc0e08a312c984bbd74b8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74b7"
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
              "_id": "62ebc0e08a312c984bbd74ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74b9"
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
              "_id": "62ebc0e08a312c984bbd74bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74bb"
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
              "_id": "62ebc0e08a312c984bbd74be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74bd"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd749a",
    "audioID": 491,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 490,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd749c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd749d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd749e"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd749f"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74a0"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd74a1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74a2"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74a3"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74a4"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74a5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74a6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd749b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 491,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74a8"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74a9"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74aa"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74ab"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74ac"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd74ad"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd74ae"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74af"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74b0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd74b1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd74b2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd74a7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "492",
        "name": "Nguyễn Phương Lợi",
        "cty": "ABC",
        "hotline": "55301168"
      },
      "customer": {
        "customerID": "492",
        "name": "Lê Khánh Quyền",
        "phone": "58624799",
        "address": "Hà Nội",
        "cmnd": "67033345"
      },
      "fileURL": "talk492.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "426s",
      "date": "14/11/2022",
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
              "_id": "62ebc0e08a312c984bbd74d9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74d8"
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
              "_id": "62ebc0e08a312c984bbd74db"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74da"
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
              "_id": "62ebc0e08a312c984bbd74dd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74dc"
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
              "_id": "62ebc0e08a312c984bbd74df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74de"
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
              "_id": "62ebc0e08a312c984bbd74e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74e0"
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
              "_id": "62ebc0e08a312c984bbd74e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74e2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd74bf",
    "audioID": 492,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 491,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd74c1"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74c2"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd74c3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74c4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd74c5"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd74c6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74c7"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74c8"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74c9"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd74ca"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd74cb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd74c0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 492,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd74cd"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74ce"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74cf"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74d0"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd74d1"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74d2"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74d3"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74d4"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74d5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74d6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74d7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd74cc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "493",
        "name": "Đặng Khánh An",
        "cty": "ABC",
        "hotline": "58214710"
      },
      "customer": {
        "customerID": "493",
        "name": "Huỳnh Quốc Lợi",
        "phone": "48671981",
        "address": "Hà Nội",
        "cmnd": "91749202"
      },
      "fileURL": "talk493.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "545s",
      "date": "27/12/2022",
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
              "_id": "62ebc0e08a312c984bbd74fe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74fd"
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
              "_id": "62ebc0e08a312c984bbd7500"
            }
          ],
          "_id": "62ebc0e08a312c984bbd74ff"
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
              "_id": "62ebc0e08a312c984bbd7502"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7501"
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
              "_id": "62ebc0e08a312c984bbd7504"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7503"
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
              "_id": "62ebc0e08a312c984bbd7506"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7505"
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
              "_id": "62ebc0e08a312c984bbd7508"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7507"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd74e4",
    "audioID": 493,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 492,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd74e6"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74e7"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd74e8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74e9"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74ea"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74eb"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74ec"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd74ed"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd74ee"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74ef"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd74f0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd74e5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 493,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd74f2"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd74f3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd74f4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd74f5"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd74f6"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd74f7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd74f8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd74f9"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd74fa"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd74fb"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd74fc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd74f1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "494",
        "name": "Nguyễn Minh Khánh",
        "cty": "ABC",
        "hotline": "33874021"
      },
      "customer": {
        "customerID": "494",
        "name": "Nguyễn Minh Thái Qúy",
        "phone": "97765526",
        "address": "Hà Nội",
        "cmnd": "14674019"
      },
      "fileURL": "talk494.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "61s",
      "date": "26/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7523"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7522"
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
              "_id": "62ebc0e08a312c984bbd7525"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7524"
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
              "_id": "62ebc0e08a312c984bbd7527"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7526"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7529"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7528"
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
              "_id": "62ebc0e08a312c984bbd752b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd752a"
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
              "_id": "62ebc0e08a312c984bbd752d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd752c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7509",
    "audioID": 494,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 493,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd750b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd750c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd750d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd750e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd750f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7510"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7511"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7512"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7513"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7514"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7515"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd750a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 494,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7517"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7518"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7519"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd751a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd751b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd751c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd751d"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd751e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd751f"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7520"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7521"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7516"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "495",
        "name": "Huỳnh Phương Hồng",
        "cty": "ABC",
        "hotline": "85544803"
      },
      "customer": {
        "customerID": "495",
        "name": "Lê Quốc Khánh",
        "phone": "92281398",
        "address": "Hà Nội",
        "cmnd": "23188878"
      },
      "fileURL": "talk495.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "572s",
      "date": "11/12/2022",
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
              "_id": "62ebc0e08a312c984bbd7548"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7547"
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
              "_id": "62ebc0e08a312c984bbd754a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7549"
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
              "_id": "62ebc0e08a312c984bbd754c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd754b"
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
              "_id": "62ebc0e08a312c984bbd754e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd754d"
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
              "_id": "62ebc0e08a312c984bbd7550"
            }
          ],
          "_id": "62ebc0e08a312c984bbd754f"
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
              "_id": "62ebc0e08a312c984bbd7552"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7551"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd752e",
    "audioID": 495,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 494,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7530"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7531"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7532"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7533"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7534"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7535"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7536"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7537"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7538"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7539"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd753a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd752f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 495,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd753c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd753d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd753e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd753f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7540"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7541"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7542"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7543"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7544"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7545"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7546"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd753b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "496",
        "name": "Trần Hải Ánh",
        "cty": "ABC",
        "hotline": "75730497"
      },
      "customer": {
        "customerID": "496",
        "name": "Ngô Minh Duy",
        "phone": "49818386",
        "address": "Hà Nội",
        "cmnd": "52383103"
      },
      "fileURL": "talk496.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "71s",
      "date": "28/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd756d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd756c"
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
              "_id": "62ebc0e08a312c984bbd756f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd756e"
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
              "_id": "62ebc0e08a312c984bbd7571"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7570"
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
              "_id": "62ebc0e08a312c984bbd7573"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7572"
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
              "_id": "62ebc0e08a312c984bbd7575"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7574"
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
              "_id": "62ebc0e08a312c984bbd7577"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7576"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7553",
    "audioID": 496,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 495,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7555"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7556"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7557"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7558"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7559"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd755a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd755b"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd755c"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd755d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd755e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd755f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7554"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 496,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7561"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7562"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7563"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7564"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7565"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7566"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7567"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7568"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7569"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd756a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd756b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7560"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "497",
        "name": "Huỳnh Hải Dạ",
        "cty": "ABC",
        "hotline": "39467754"
      },
      "customer": {
        "customerID": "497",
        "name": "Lê Minh An",
        "phone": "92472722",
        "address": "Hà Nội",
        "cmnd": "72544590"
      },
      "fileURL": "talk497.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "239s",
      "date": "15/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7592"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7591"
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
              "_id": "62ebc0e08a312c984bbd7594"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7593"
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
              "_id": "62ebc0e08a312c984bbd7596"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7595"
        },
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
              "_id": "62ebc0e08a312c984bbd7598"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7597"
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
              "_id": "62ebc0e08a312c984bbd759a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7599"
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
              "_id": "62ebc0e08a312c984bbd759c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd759b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7578",
    "audioID": 497,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 496,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd757a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd757b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd757c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd757d"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd757e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd757f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7580"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7581"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7582"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7583"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7584"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7579"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 497,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7586"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7587"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7588"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7589"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd758a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd758b"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd758c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd758d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd758e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd758f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7590"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7585"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "498",
        "name": "Trần Phương Ánh",
        "cty": "ABC",
        "hotline": "97559213"
      },
      "customer": {
        "customerID": "498",
        "name": "Ngô Phương Duy",
        "phone": "71650027",
        "address": "Hà Nội",
        "cmnd": "51663398"
      },
      "fileURL": "talk498.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "142s",
      "date": "30/6/2022",
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
              "_id": "62ebc0e08a312c984bbd75b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75b6"
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
              "_id": "62ebc0e08a312c984bbd75b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75b8"
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
              "_id": "62ebc0e08a312c984bbd75bb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75ba"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd75bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75bc"
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
              "_id": "62ebc0e08a312c984bbd75bf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75be"
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
              "_id": "62ebc0e08a312c984bbd75c1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75c0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd759d",
    "audioID": 498,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 497,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd759f"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75a0"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75a1"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd75a2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd75a3"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75a4"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75a5"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75a6"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd75a7"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75a8"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75a9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd759e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 498,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75ab"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75ac"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75ad"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75ae"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75af"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75b0"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd75b1"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75b2"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75b3"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd75b4"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75b5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd75aa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "499",
        "name": "Huỳnh Hải Dạ",
        "cty": "ABC",
        "hotline": "76934012"
      },
      "customer": {
        "customerID": "499",
        "name": "Trương Hữu Lợi",
        "phone": "10476399",
        "address": "Hà Nội",
        "cmnd": "15554677"
      },
      "fileURL": "talk499.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "284s",
      "date": "21/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd75dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75db"
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
              "_id": "62ebc0e08a312c984bbd75de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75dd"
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
              "_id": "62ebc0e08a312c984bbd75e0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75df"
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
              "_id": "62ebc0e08a312c984bbd75e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75e1"
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
              "_id": "62ebc0e08a312c984bbd75e4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75e3"
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
              "_id": "62ebc0e08a312c984bbd75e6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd75e5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd75c2",
    "audioID": 499,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 498,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd75c4"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75c5"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd75c6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd75c7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75c8"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75c9"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75ca"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd75cb"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75cc"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75cd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75ce"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd75c3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 499,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75d0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd75d1"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75d2"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75d3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75d4"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75d5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75d6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd75d7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd75d8"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75d9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75da"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd75cf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "500",
        "name": "Phan Hải An",
        "cty": "ABC",
        "hotline": "76873681"
      },
      "customer": {
        "customerID": "500",
        "name": "Trương Văn Lợi",
        "phone": "90597785",
        "address": "Hà Nội",
        "cmnd": "69880618"
      },
      "fileURL": "talk500.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "514s",
      "date": "23/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7601"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7600"
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
              "_id": "62ebc0e08a312c984bbd7603"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7602"
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
              "_id": "62ebc0e08a312c984bbd7605"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7604"
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
              "_id": "62ebc0e08a312c984bbd7607"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7606"
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
              "_id": "62ebc0e08a312c984bbd7609"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7608"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd760b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd760a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd75e7",
    "audioID": 500,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 499,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75e9"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75ea"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd75eb"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75ec"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75ed"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75ee"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75ef"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75f0"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd75f1"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd75f2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd75f3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd75e8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 500,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd75f5"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75f6"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd75f7"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75f8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd75f9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd75fa"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd75fb"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd75fc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd75fd"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd75fe"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd75ff"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd75f4"
      }
    ],
    "__v": 0
  }
]

export default FILE5