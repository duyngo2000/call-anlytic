// 20220804202310
// http://localhost:5000/

const FILE4 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "301",
        "name": "Lê Phương Cảnh",
        "cty": "ABC",
        "hotline": "63442366"
      },
      "customer": {
        "customerID": "301",
        "name": "Bùi Minh An",
        "phone": "36578088",
        "address": "Hà Nội",
        "cmnd": "58021806"
      },
      "fileURL": "talk301.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "373s",
      "date": "27/4/2022",
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
              "_id": "62ebc0e08a312c984bbd593e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd593d"
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
              "_id": "62ebc0e08a312c984bbd5940"
            }
          ],
          "_id": "62ebc0e08a312c984bbd593f"
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
              "_id": "62ebc0e08a312c984bbd5942"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5941"
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
              "_id": "62ebc0e08a312c984bbd5944"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5943"
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
              "_id": "62ebc0e08a312c984bbd5946"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5945"
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
              "_id": "62ebc0e08a312c984bbd5948"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5947"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5924",
    "audioID": 301,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 300,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5926"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5927"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5928"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5929"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd592a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd592b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd592c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd592d"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd592e"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd592f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5930"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5925"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 301,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5932"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5933"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5934"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5935"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5936"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5937"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5938"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5939"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd593a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd593b"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd593c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5931"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "302",
        "name": "Lê Dương Khánh",
        "cty": "ABC",
        "hotline": "58671476"
      },
      "customer": {
        "customerID": "302",
        "name": "Lê Quốc Quyền",
        "phone": "77726337",
        "address": "Hà Nội",
        "cmnd": "88147200"
      },
      "fileURL": "talk302.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "313s",
      "date": "1/6/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5963"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5962"
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
              "_id": "62ebc0e08a312c984bbd5965"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5964"
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
              "_id": "62ebc0e08a312c984bbd5967"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5966"
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
              "_id": "62ebc0e08a312c984bbd5969"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5968"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd596b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd596a"
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
              "_id": "62ebc0e08a312c984bbd596d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd596c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5949",
    "audioID": 302,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 301,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd594b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd594c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd594d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd594e"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd594f"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5950"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5951"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5952"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5953"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5954"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5955"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd594a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 302,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5957"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5958"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5959"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd595a"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd595b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd595c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd595d"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd595e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd595f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5960"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5961"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5956"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "303",
        "name": "Đặng Hữu Hồng",
        "cty": "ABC",
        "hotline": "95106135"
      },
      "customer": {
        "customerID": "303",
        "name": "Trần Văn An",
        "phone": "87423498",
        "address": "Hà Nội",
        "cmnd": "47476763"
      },
      "fileURL": "talk303.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "151s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5988"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5987"
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
              "_id": "62ebc0e08a312c984bbd598a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5989"
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
              "_id": "62ebc0e08a312c984bbd598c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd598b"
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
              "_id": "62ebc0e08a312c984bbd598e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd598d"
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
              "_id": "62ebc0e08a312c984bbd5990"
            }
          ],
          "_id": "62ebc0e08a312c984bbd598f"
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
              "_id": "62ebc0e08a312c984bbd5992"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5991"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd596e",
    "audioID": 303,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 302,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5970"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5971"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5972"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5973"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5974"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5975"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5976"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5977"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5978"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5979"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd597a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd596f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 303,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd597c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd597d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd597e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd597f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5980"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5981"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5982"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5983"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5984"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5985"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5986"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd597b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "304",
        "name": "Phan Thị Quyền",
        "cty": "ABC",
        "hotline": "60830093"
      },
      "customer": {
        "customerID": "304",
        "name": "Nguyễn Minh Thái Qúy",
        "phone": "22076267",
        "address": "Hà Nội",
        "cmnd": "69615788"
      },
      "fileURL": "talk304.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "34s",
      "date": "10/9/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd59ad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59ac"
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
              "_id": "62ebc0e08a312c984bbd59af"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59ae"
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
              "_id": "62ebc0e08a312c984bbd59b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59b0"
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
              "_id": "62ebc0e08a312c984bbd59b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59b2"
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
              "_id": "62ebc0e08a312c984bbd59b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59b4"
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
              "_id": "62ebc0e08a312c984bbd59b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59b6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5993",
    "audioID": 304,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 303,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5995"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5996"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5997"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5998"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5999"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd599a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd599b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd599c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd599d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd599e"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd599f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5994"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 304,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59a1"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd59a2"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59a3"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59a4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd59a5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd59a6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59a7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59a8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59a9"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59aa"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59ab"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd59a0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "305",
        "name": "Phạm Văn Dạ",
        "cty": "ABC",
        "hotline": "63961685"
      },
      "customer": {
        "customerID": "305",
        "name": "Huỳnh Quốc Cảnh",
        "phone": "57090118",
        "address": "Hà Nội",
        "cmnd": "81484979"
      },
      "fileURL": "talk305.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "573s",
      "date": "20/8/2022",
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
              "_id": "62ebc0e08a312c984bbd59d2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59d1"
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
              "_id": "62ebc0e08a312c984bbd59d4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59d3"
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
              "_id": "62ebc0e08a312c984bbd59d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59d5"
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
              "_id": "62ebc0e08a312c984bbd59d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59d7"
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
              "_id": "62ebc0e08a312c984bbd59da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59d9"
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
              "_id": "62ebc0e08a312c984bbd59dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59db"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd59b8",
    "audioID": 305,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 304,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59ba"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59bb"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59bc"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59bd"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd59be"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd59bf"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59c0"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59c1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59c2"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59c3"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd59c4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd59b9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 305,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59c6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59c7"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59c8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59c9"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd59ca"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd59cb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59cc"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59cd"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59ce"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59cf"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd59d0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd59c5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "306",
        "name": "Trương Văn An",
        "cty": "ABC",
        "hotline": "10786454"
      },
      "customer": {
        "customerID": "306",
        "name": "Huỳnh Phương Quyền",
        "phone": "81111634",
        "address": "Hà Nội",
        "cmnd": "42413602"
      },
      "fileURL": "talk306.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "275s",
      "date": "19/4/2022",
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
              "_id": "62ebc0e08a312c984bbd59f7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59f6"
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
              "_id": "62ebc0e08a312c984bbd59f9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59f8"
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
              "_id": "62ebc0e08a312c984bbd59fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59fa"
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
              "_id": "62ebc0e08a312c984bbd59fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59fc"
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
              "_id": "62ebc0e08a312c984bbd59ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd59fe"
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
              "_id": "62ebc0e08a312c984bbd5a01"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a00"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd59dd",
    "audioID": 306,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 305,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd59df"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59e0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd59e1"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59e2"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd59e3"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd59e4"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59e5"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd59e6"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59e7"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd59e8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd59e9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd59de"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 306,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59eb"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd59ec"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd59ed"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd59ee"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd59ef"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd59f0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd59f1"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd59f2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59f3"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd59f4"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd59f5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd59ea"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "307",
        "name": "Ngô Văn Lợi",
        "cty": "ABC",
        "hotline": "77698926"
      },
      "customer": {
        "customerID": "307",
        "name": "Trần Quốc Duy",
        "phone": "88018084",
        "address": "Hà Nội",
        "cmnd": "99037651"
      },
      "fileURL": "talk307.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "41s",
      "date": "4/4/2022",
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
              "_id": "62ebc0e08a312c984bbd5a1c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a1b"
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
              "_id": "62ebc0e08a312c984bbd5a1e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a1d"
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
              "_id": "62ebc0e08a312c984bbd5a20"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a1f"
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
              "_id": "62ebc0e08a312c984bbd5a22"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a21"
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
              "_id": "62ebc0e08a312c984bbd5a24"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a23"
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
              "_id": "62ebc0e08a312c984bbd5a26"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a25"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5a02",
    "audioID": 307,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 306,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a04"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a05"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a06"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a07"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a08"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a09"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a0a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a0b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a0c"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a0d"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a0e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a03"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 307,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a10"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a11"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a12"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a13"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a14"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a15"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a16"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a17"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a18"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a19"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a1a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a0f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "308",
        "name": "Bùi Phương Quyền",
        "cty": "ABC",
        "hotline": "21108852"
      },
      "customer": {
        "customerID": "308",
        "name": "Đặng Hải Dạ",
        "phone": "53609852",
        "address": "Hà Nội",
        "cmnd": "48739294"
      },
      "fileURL": "talk308.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "112s",
      "date": "13/8/2022",
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
              "_id": "62ebc0e08a312c984bbd5a41"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a40"
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
              "_id": "62ebc0e08a312c984bbd5a43"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a42"
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
              "_id": "62ebc0e08a312c984bbd5a45"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a44"
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
              "_id": "62ebc0e08a312c984bbd5a47"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a46"
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
              "_id": "62ebc0e08a312c984bbd5a49"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a48"
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
              "_id": "62ebc0e08a312c984bbd5a4b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a4a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5a27",
    "audioID": 308,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 307,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a29"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a2a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a2b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a2c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a2d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a2e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a2f"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a30"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a31"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a32"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a33"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a28"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 308,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a35"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a36"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a37"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a38"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a39"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a3a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a3b"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a3c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a3d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a3e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a3f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a34"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "309",
        "name": "Bùi Hữu An",
        "cty": "ABC",
        "hotline": "10491946"
      },
      "customer": {
        "customerID": "309",
        "name": "Phan Khánh Dạ",
        "phone": "87057615",
        "address": "Hà Nội",
        "cmnd": "54308089"
      },
      "fileURL": "talk309.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "166s",
      "date": "31/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5a66"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a65"
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
              "_id": "62ebc0e08a312c984bbd5a68"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a67"
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
              "_id": "62ebc0e08a312c984bbd5a6a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a69"
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
              "_id": "62ebc0e08a312c984bbd5a6c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a6b"
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
              "_id": "62ebc0e08a312c984bbd5a6e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a6d"
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
              "_id": "62ebc0e08a312c984bbd5a70"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a6f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5a4c",
    "audioID": 309,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 308,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a4e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a4f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a50"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a51"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a52"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a53"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a54"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a55"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a56"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a57"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a58"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a4d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 309,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a5a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a5b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a5c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a5d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a5e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a5f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a60"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a61"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a62"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a63"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a64"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a59"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "310",
        "name": "Huỳnh Quốc Lợi",
        "cty": "ABC",
        "hotline": "61360784"
      },
      "customer": {
        "customerID": "310",
        "name": "Nguyễn Hải Quyền",
        "phone": "46621852",
        "address": "Hà Nội",
        "cmnd": "59661623"
      },
      "fileURL": "talk310.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "570s",
      "date": "9/3/2022",
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
              "_id": "62ebc0e08a312c984bbd5a8b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a8a"
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
              "_id": "62ebc0e08a312c984bbd5a8d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a8c"
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
              "_id": "62ebc0e08a312c984bbd5a8f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a8e"
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
              "_id": "62ebc0e08a312c984bbd5a91"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a90"
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
              "_id": "62ebc0e08a312c984bbd5a93"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a92"
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
              "_id": "62ebc0e08a312c984bbd5a95"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5a94"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5a71",
    "audioID": 310,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 309,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a73"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a74"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a75"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a76"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a77"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a78"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a79"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a7a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5a7b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a7c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a7d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a72"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 310,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5a7f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a80"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a81"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a82"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5a83"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a84"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5a85"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5a86"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a87"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5a88"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a89"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a7e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "311",
        "name": "Ngô Phương Hồng",
        "cty": "ABC",
        "hotline": "56788831"
      },
      "customer": {
        "customerID": "311",
        "name": "Trương An Thái Qúy",
        "phone": "29036022",
        "address": "Hà Nội",
        "cmnd": "31420998"
      },
      "fileURL": "talk311.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "55s",
      "date": "6/4/2022",
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
              "_id": "62ebc0e08a312c984bbd5ab0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5aaf"
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
              "_id": "62ebc0e08a312c984bbd5ab2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ab1"
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
              "_id": "62ebc0e08a312c984bbd5ab4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ab3"
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
              "_id": "62ebc0e08a312c984bbd5ab6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ab5"
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
              "_id": "62ebc0e08a312c984bbd5ab8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ab7"
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
              "_id": "62ebc0e08a312c984bbd5aba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ab9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5a96",
    "audioID": 311,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 310,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a98"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a99"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a9a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a9b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5a9c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5a9d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5a9e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5a9f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aa0"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aa1"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5aa2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5a97"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 311,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5aa4"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5aa5"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5aa6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5aa7"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5aa8"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5aa9"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5aaa"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5aab"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aac"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5aad"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5aae"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5aa3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "312",
        "name": "Trương An Thái Qúy",
        "cty": "ABC",
        "hotline": "13927515"
      },
      "customer": {
        "customerID": "312",
        "name": "Bùi Khánh An",
        "phone": "86331888",
        "address": "Hà Nội",
        "cmnd": "59775581"
      },
      "fileURL": "talk312.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "526s",
      "date": "2/7/2022",
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
              "_id": "62ebc0e08a312c984bbd5ad5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ad4"
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
              "_id": "62ebc0e08a312c984bbd5ad7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ad6"
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
              "_id": "62ebc0e08a312c984bbd5ad9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ad8"
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
              "_id": "62ebc0e08a312c984bbd5adb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ada"
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
              "_id": "62ebc0e08a312c984bbd5add"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5adc"
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
              "_id": "62ebc0e08a312c984bbd5adf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ade"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5abb",
    "audioID": 312,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 311,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5abd"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5abe"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5abf"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ac0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ac1"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ac2"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ac3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ac4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ac5"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ac6"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ac7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5abc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 312,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ac9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aca"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5acb"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5acc"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5acd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ace"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5acf"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ad0"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ad1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ad2"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ad3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ac8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "313",
        "name": "Phan Phương An",
        "cty": "ABC",
        "hotline": "25987148"
      },
      "customer": {
        "customerID": "313",
        "name": "Đặng An Khánh",
        "phone": "63347312",
        "address": "Hà Nội",
        "cmnd": "72656074"
      },
      "fileURL": "talk313.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "328s",
      "date": "4/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5afa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5af9"
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
              "_id": "62ebc0e08a312c984bbd5afc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5afb"
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
              "_id": "62ebc0e08a312c984bbd5afe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5afd"
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
              "_id": "62ebc0e08a312c984bbd5b00"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5aff"
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
              "_id": "62ebc0e08a312c984bbd5b02"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b01"
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
              "_id": "62ebc0e08a312c984bbd5b04"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b03"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5ae0",
    "audioID": 313,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 312,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ae2"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ae3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ae4"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ae5"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ae6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ae7"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ae8"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ae9"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5aea"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aeb"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5aec"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ae1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 313,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5aee"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5aef"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5af0"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5af1"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5af2"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5af3"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5af4"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5af5"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5af6"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5af7"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5af8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5aed"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "314",
        "name": "Trần Khánh Cảnh",
        "cty": "ABC",
        "hotline": "60369941"
      },
      "customer": {
        "customerID": "314",
        "name": "Phạm Hải Cảnh",
        "phone": "84777696",
        "address": "Hà Nội",
        "cmnd": "86194598"
      },
      "fileURL": "talk314.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "209s",
      "date": "8/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5b1f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b1e"
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
              "_id": "62ebc0e08a312c984bbd5b21"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b20"
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
              "_id": "62ebc0e08a312c984bbd5b23"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b22"
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
              "_id": "62ebc0e08a312c984bbd5b25"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b24"
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
              "_id": "62ebc0e08a312c984bbd5b27"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b26"
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
              "_id": "62ebc0e08a312c984bbd5b29"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b28"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5b05",
    "audioID": 314,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 313,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b07"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b08"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b09"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b0a"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b0b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b0c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b0d"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b0e"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b0f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b10"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b11"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b06"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 314,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b13"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5b14"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b15"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b16"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5b17"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b18"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b19"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b1a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b1b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b1c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b1d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b12"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "315",
        "name": "Lê Hải Khánh",
        "cty": "ABC",
        "hotline": "37167016"
      },
      "customer": {
        "customerID": "315",
        "name": "Nguyễn Hải Hồng",
        "phone": "43175351",
        "address": "Hà Nội",
        "cmnd": "71386357"
      },
      "fileURL": "talk315.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "266s",
      "date": "18/4/2022",
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
              "_id": "62ebc0e08a312c984bbd5b44"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b43"
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
              "_id": "62ebc0e08a312c984bbd5b46"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b45"
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
              "_id": "62ebc0e08a312c984bbd5b48"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b47"
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
              "_id": "62ebc0e08a312c984bbd5b4a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b49"
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
              "_id": "62ebc0e08a312c984bbd5b4c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b4b"
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
              "_id": "62ebc0e08a312c984bbd5b4e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b4d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5b2a",
    "audioID": 315,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 314,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b2c"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b2d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b2e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b2f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b30"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b31"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b32"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b33"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b34"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b35"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b36"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b2b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 315,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b38"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5b39"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b3a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b3b"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b3c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b3d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b3e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b3f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b40"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b41"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b42"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b37"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "316",
        "name": "Lê Văn Duy",
        "cty": "ABC",
        "hotline": "47042457"
      },
      "customer": {
        "customerID": "316",
        "name": "Đặng Dương Quyền",
        "phone": "12594068",
        "address": "Hà Nội",
        "cmnd": "39897653"
      },
      "fileURL": "talk316.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "100s",
      "date": "3/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5b69"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b68"
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
              "_id": "62ebc0e08a312c984bbd5b6b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b6a"
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
              "_id": "62ebc0e08a312c984bbd5b6d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b6c"
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
              "_id": "62ebc0e08a312c984bbd5b6f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b6e"
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
              "_id": "62ebc0e08a312c984bbd5b71"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b70"
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
              "_id": "62ebc0e08a312c984bbd5b73"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b72"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5b4f",
    "audioID": 316,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 315,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b51"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b52"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b53"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b54"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b55"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b56"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b57"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b58"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b59"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b5a"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b5b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b50"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 316,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b5d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b5e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b5f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b60"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5b61"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b62"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b63"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b64"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b65"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5b66"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b67"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b5c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "317",
        "name": "Nguyễn Thị Dạ",
        "cty": "ABC",
        "hotline": "14097775"
      },
      "customer": {
        "customerID": "317",
        "name": "Trương Khánh Dạ",
        "phone": "16092870",
        "address": "Hà Nội",
        "cmnd": "30375087"
      },
      "fileURL": "talk317.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "183s",
      "date": "16/5/2022",
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
              "_id": "62ebc0e08a312c984bbd5b8e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b8d"
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
              "_id": "62ebc0e08a312c984bbd5b90"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b8f"
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
              "_id": "62ebc0e08a312c984bbd5b92"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b91"
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
              "_id": "62ebc0e08a312c984bbd5b94"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b93"
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
              "_id": "62ebc0e08a312c984bbd5b96"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b95"
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
              "_id": "62ebc0e08a312c984bbd5b98"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5b97"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5b74",
    "audioID": 317,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 316,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b76"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b77"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b78"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b79"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b7a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b7b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b7c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b7d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b7e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b7f"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5b80"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b75"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 317,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5b82"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b83"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b84"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b85"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b86"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5b87"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b88"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5b89"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b8a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5b8b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5b8c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b81"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "318",
        "name": "Bùi Dương Quyền",
        "cty": "ABC",
        "hotline": "93243895"
      },
      "customer": {
        "customerID": "318",
        "name": "Phạm Minh Dạ",
        "phone": "45870241",
        "address": "Hà Nội",
        "cmnd": "61588524"
      },
      "fileURL": "talk318.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "105s",
      "date": "20/8/2022",
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
              "_id": "62ebc0e08a312c984bbd5bb3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bb2"
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
              "_id": "62ebc0e08a312c984bbd5bb5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bb4"
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
              "_id": "62ebc0e08a312c984bbd5bb7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bb6"
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
              "_id": "62ebc0e08a312c984bbd5bb9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bb8"
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
              "_id": "62ebc0e08a312c984bbd5bbb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bba"
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
              "_id": "62ebc0e08a312c984bbd5bbd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bbc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5b99",
    "audioID": 318,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 317,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b9b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b9c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5b9d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5b9e"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5b9f"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ba0"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ba1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ba2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ba3"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ba4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ba5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5b9a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 318,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ba7"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ba8"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ba9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5baa"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5bab"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bac"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5bad"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5bae"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5baf"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5bb0"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bb1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ba6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "319",
        "name": "Bùi Dương Cảnh",
        "cty": "ABC",
        "hotline": "62954940"
      },
      "customer": {
        "customerID": "319",
        "name": "Nguyễn Hải Cảnh",
        "phone": "90457050",
        "address": "Hà Nội",
        "cmnd": "14116212"
      },
      "fileURL": "talk319.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "166s",
      "date": "8/10/2022",
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
              "_id": "62ebc0e08a312c984bbd5bd8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bd7"
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
              "_id": "62ebc0e08a312c984bbd5bda"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bd9"
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
              "_id": "62ebc0e08a312c984bbd5bdc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bdb"
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
              "_id": "62ebc0e08a312c984bbd5bde"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bdd"
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
              "_id": "62ebc0e08a312c984bbd5be0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bdf"
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
              "_id": "62ebc0e08a312c984bbd5be2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5be1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5bbe",
    "audioID": 319,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 318,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bc0"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bc1"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5bc2"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5bc3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bc4"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bc5"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5bc6"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5bc7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bc8"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5bc9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5bca"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5bbf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 319,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5bcc"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5bcd"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5bce"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bcf"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5bd0"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5bd1"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bd2"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5bd3"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5bd4"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bd5"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5bd6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5bcb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "320",
        "name": "Phạm Hải Lợi",
        "cty": "ABC",
        "hotline": "69526657"
      },
      "customer": {
        "customerID": "320",
        "name": "Trương Hải An",
        "phone": "69928380",
        "address": "Hà Nội",
        "cmnd": "25211328"
      },
      "fileURL": "talk320.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "589s",
      "date": "23/10/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5bfd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bfc"
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
              "_id": "62ebc0e08a312c984bbd5bff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5bfe"
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
              "_id": "62ebc0e08a312c984bbd5c01"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c00"
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
              "_id": "62ebc0e08a312c984bbd5c03"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c02"
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
              "_id": "62ebc0e08a312c984bbd5c05"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c04"
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
              "_id": "62ebc0e08a312c984bbd5c07"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c06"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5be3",
    "audioID": 320,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 319,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5be5"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5be6"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5be7"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5be8"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5be9"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5bea"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5beb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bec"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5bed"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5bee"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5bef"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5be4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 320,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5bf1"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5bf2"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5bf3"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5bf4"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5bf5"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5bf6"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5bf7"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5bf8"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5bf9"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5bfa"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5bfb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5bf0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "321",
        "name": "Phạm An An",
        "cty": "ABC",
        "hotline": "18944234"
      },
      "customer": {
        "customerID": "321",
        "name": "Trần Hữu Thái Qúy",
        "phone": "97077914",
        "address": "Hà Nội",
        "cmnd": "58093647"
      },
      "fileURL": "talk321.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "64s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5c22"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c21"
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
              "_id": "62ebc0e08a312c984bbd5c24"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c23"
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
              "_id": "62ebc0e08a312c984bbd5c26"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c25"
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
              "_id": "62ebc0e08a312c984bbd5c28"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c27"
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
              "_id": "62ebc0e08a312c984bbd5c2a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c29"
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
              "_id": "62ebc0e08a312c984bbd5c2c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c2b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5c08",
    "audioID": 321,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 320,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c0a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c0b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c0c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c0d"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c0e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5c0f"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c10"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c11"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5c12"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c13"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c14"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c09"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 321,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c16"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c17"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c18"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c19"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c1a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c1b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c1c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c1d"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5c1e"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c1f"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c20"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c15"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "322",
        "name": "Phan Hải Hồng",
        "cty": "ABC",
        "hotline": "40296268"
      },
      "customer": {
        "customerID": "322",
        "name": "Lê Hữu Hồng",
        "phone": "52045579",
        "address": "Hà Nội",
        "cmnd": "94727722"
      },
      "fileURL": "talk322.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "573s",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5c47"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c46"
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
              "_id": "62ebc0e08a312c984bbd5c49"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c48"
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
              "_id": "62ebc0e08a312c984bbd5c4b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c4a"
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
              "_id": "62ebc0e08a312c984bbd5c4d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c4c"
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
              "_id": "62ebc0e08a312c984bbd5c4f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c4e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5c51"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c50"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5c2d",
    "audioID": 322,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 321,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c2f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c30"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c31"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c32"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c33"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c34"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c35"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c36"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c37"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c38"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c39"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c2e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 322,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c3b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c3c"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c3d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c3e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c3f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c40"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c41"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c42"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c43"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5c44"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c45"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c3a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "323",
        "name": "Lê Hải Lợi",
        "cty": "ABC",
        "hotline": "97820917"
      },
      "customer": {
        "customerID": "323",
        "name": "Đặng Hải Cảnh",
        "phone": "48562903",
        "address": "Hà Nội",
        "cmnd": "77492069"
      },
      "fileURL": "talk323.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "490s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5c6c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c6b"
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
              "_id": "62ebc0e08a312c984bbd5c6e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c6d"
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
              "_id": "62ebc0e08a312c984bbd5c70"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c6f"
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
              "_id": "62ebc0e08a312c984bbd5c72"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c71"
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
              "_id": "62ebc0e08a312c984bbd5c74"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c73"
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
              "_id": "62ebc0e08a312c984bbd5c76"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c75"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5c52",
    "audioID": 323,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 322,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c54"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c55"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c56"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5c57"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c58"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c59"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c5a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c5b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c5c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c5d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c5e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c53"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 323,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c60"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c61"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c62"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c63"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c64"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c65"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c66"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c67"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c68"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c69"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c6a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c5f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "324",
        "name": "Phan Phương Dạ",
        "cty": "ABC",
        "hotline": "63160335"
      },
      "customer": {
        "customerID": "324",
        "name": "Đặng Thị Lợi",
        "phone": "99786892",
        "address": "Hà Nội",
        "cmnd": "57857153"
      },
      "fileURL": "talk324.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "592s",
      "date": "6/11/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5c91"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c90"
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
              "_id": "62ebc0e08a312c984bbd5c93"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c92"
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
              "_id": "62ebc0e08a312c984bbd5c95"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c94"
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
              "_id": "62ebc0e08a312c984bbd5c97"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c96"
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
              "_id": "62ebc0e08a312c984bbd5c99"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c98"
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
              "_id": "62ebc0e08a312c984bbd5c9b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5c9a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5c77",
    "audioID": 324,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 323,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c79"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c7a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c7b"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c7c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c7d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c7e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c7f"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5c80"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c81"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c82"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c83"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c78"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 324,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c85"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5c86"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c87"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5c88"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c89"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c8a"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c8b"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5c8c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5c8d"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5c8e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5c8f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c84"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "325",
        "name": "Ngô Phương Quyền",
        "cty": "ABC",
        "hotline": "64799616"
      },
      "customer": {
        "customerID": "325",
        "name": "Trương Dương Ánh",
        "phone": "71388936",
        "address": "Hà Nội",
        "cmnd": "45270430"
      },
      "fileURL": "talk325.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "544s",
      "date": "4/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5cb6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cb5"
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
              "_id": "62ebc0e08a312c984bbd5cb8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cb7"
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
              "_id": "62ebc0e08a312c984bbd5cba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cb9"
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
              "_id": "62ebc0e08a312c984bbd5cbc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cbb"
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
              "_id": "62ebc0e08a312c984bbd5cbe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cbd"
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
              "_id": "62ebc0e08a312c984bbd5cc0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cbf"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5c9c",
    "audioID": 325,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 324,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5c9e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5c9f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ca0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ca1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ca2"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ca3"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ca4"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ca5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ca6"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ca7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ca8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5c9d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 325,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5caa"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cab"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cac"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5cad"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5cae"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5caf"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cb0"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cb1"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cb2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5cb3"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cb4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ca9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "326",
        "name": "Phạm Dương Quyền",
        "cty": "ABC",
        "hotline": "92920536"
      },
      "customer": {
        "customerID": "326",
        "name": "Ngô Minh Hồng",
        "phone": "23065035",
        "address": "Hà Nội",
        "cmnd": "14649898"
      },
      "fileURL": "talk326.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "294s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5cdb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cda"
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
              "_id": "62ebc0e08a312c984bbd5cdd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cdc"
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
              "_id": "62ebc0e08a312c984bbd5cdf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cde"
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
              "_id": "62ebc0e08a312c984bbd5ce1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ce0"
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
              "_id": "62ebc0e08a312c984bbd5ce3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ce2"
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
              "_id": "62ebc0e08a312c984bbd5ce5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ce4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5cc1",
    "audioID": 326,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 325,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cc3"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5cc4"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cc5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cc6"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5cc7"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5cc8"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5cc9"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cca"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ccb"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ccc"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ccd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5cc2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 326,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ccf"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5cd0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cd1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cd2"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5cd3"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5cd4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5cd5"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5cd6"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5cd7"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5cd8"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5cd9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5cce"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "327",
        "name": "Phan Dương Lợi",
        "cty": "ABC",
        "hotline": "55501673"
      },
      "customer": {
        "customerID": "327",
        "name": "Lê Phương An",
        "phone": "13129688",
        "address": "Hà Nội",
        "cmnd": "21064543"
      },
      "fileURL": "talk327.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "516s",
      "date": "12/3/2022",
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
              "_id": "62ebc0e08a312c984bbd5d00"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5cff"
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
              "_id": "62ebc0e08a312c984bbd5d02"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d01"
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
              "_id": "62ebc0e08a312c984bbd5d04"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d03"
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
              "_id": "62ebc0e08a312c984bbd5d06"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d05"
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
              "_id": "62ebc0e08a312c984bbd5d08"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d07"
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
              "_id": "62ebc0e08a312c984bbd5d0a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d09"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5ce6",
    "audioID": 327,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 326,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ce8"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ce9"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5cea"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ceb"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5cec"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ced"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5cee"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5cef"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5cf0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cf1"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5cf2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ce7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 327,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cf4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cf5"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5cf6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5cf7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5cf8"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5cf9"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5cfa"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5cfb"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5cfc"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5cfd"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5cfe"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5cf3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "328",
        "name": "Trần Quốc An",
        "cty": "ABC",
        "hotline": "73695140"
      },
      "customer": {
        "customerID": "328",
        "name": "Huỳnh An Quyền",
        "phone": "49989163",
        "address": "Hà Nội",
        "cmnd": "42559487"
      },
      "fileURL": "talk328.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "517s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5d25"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d24"
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
              "_id": "62ebc0e08a312c984bbd5d27"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d26"
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
              "_id": "62ebc0e08a312c984bbd5d29"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d28"
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
              "_id": "62ebc0e08a312c984bbd5d2b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d2a"
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
              "_id": "62ebc0e08a312c984bbd5d2d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d2c"
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
              "_id": "62ebc0e08a312c984bbd5d2f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d2e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5d0b",
    "audioID": 328,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 327,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d0d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d0e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d0f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d10"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d11"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d12"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d13"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d14"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d15"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d16"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d17"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d0c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 328,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d19"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d1a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d1b"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d1c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d1d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d1e"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d1f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d20"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d21"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d22"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d23"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d18"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "329",
        "name": "Trần Dương Duy",
        "cty": "ABC",
        "hotline": "31445925"
      },
      "customer": {
        "customerID": "329",
        "name": "Bùi Văn Khánh",
        "phone": "71663931",
        "address": "Hà Nội",
        "cmnd": "15110935"
      },
      "fileURL": "talk329.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "141s",
      "date": "1/2/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5d4a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d49"
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
              "_id": "62ebc0e08a312c984bbd5d4c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d4b"
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
              "_id": "62ebc0e08a312c984bbd5d4e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d4d"
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
              "_id": "62ebc0e08a312c984bbd5d50"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d4f"
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
              "_id": "62ebc0e08a312c984bbd5d52"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d51"
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
              "_id": "62ebc0e08a312c984bbd5d54"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d53"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5d30",
    "audioID": 329,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 328,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d32"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d33"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d34"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d35"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d36"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d37"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d38"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d39"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d3a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d3b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d3c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d31"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 329,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d3e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d3f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d40"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d41"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d42"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d43"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d44"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d45"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d46"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d47"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d48"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d3d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "330",
        "name": "Trần An Dạ",
        "cty": "ABC",
        "hotline": "84095809"
      },
      "customer": {
        "customerID": "330",
        "name": "Nguyễn Khánh Ánh",
        "phone": "42562067",
        "address": "Hà Nội",
        "cmnd": "38764166"
      },
      "fileURL": "talk330.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "195s",
      "date": "8/11/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5d6f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d6e"
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
              "_id": "62ebc0e08a312c984bbd5d71"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d70"
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
              "_id": "62ebc0e08a312c984bbd5d73"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d72"
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
              "_id": "62ebc0e08a312c984bbd5d75"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d74"
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
              "_id": "62ebc0e08a312c984bbd5d77"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d76"
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
              "_id": "62ebc0e08a312c984bbd5d79"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d78"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5d55",
    "audioID": 330,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 329,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d57"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d58"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d59"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d5a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d5b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d5c"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d5d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d5e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d5f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d60"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d61"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d56"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 330,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d63"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d64"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d65"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d66"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d67"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d68"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d69"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d6a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d6b"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d6c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d6d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d62"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "331",
        "name": "Trương Khánh Dạ",
        "cty": "ABC",
        "hotline": "52825316"
      },
      "customer": {
        "customerID": "331",
        "name": "Phan Phương Dạ",
        "phone": "55025935",
        "address": "Hà Nội",
        "cmnd": "59126824"
      },
      "fileURL": "talk331.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "279s",
      "date": "19/12/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5d94"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d93"
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
              "_id": "62ebc0e08a312c984bbd5d96"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d95"
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
              "_id": "62ebc0e08a312c984bbd5d98"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d97"
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
              "_id": "62ebc0e08a312c984bbd5d9a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d99"
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
              "_id": "62ebc0e08a312c984bbd5d9c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d9b"
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
              "_id": "62ebc0e08a312c984bbd5d9e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5d9d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5d7a",
    "audioID": 331,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 330,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d7c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d7d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d7e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d7f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d80"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5d81"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5d82"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d83"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5d84"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d85"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d86"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d7b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 331,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d88"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d89"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5d8a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5d8b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d8c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5d8d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d8e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5d8f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5d90"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5d91"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5d92"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5d87"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "332",
        "name": "Ngô Khánh Duy",
        "cty": "ABC",
        "hotline": "17401939"
      },
      "customer": {
        "customerID": "332",
        "name": "Trương Hải Lợi",
        "phone": "20633253",
        "address": "Hà Nội",
        "cmnd": "88192804"
      },
      "fileURL": "talk332.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "509s",
      "date": "6/7/2022",
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
              "_id": "62ebc0e08a312c984bbd5db9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5db8"
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
              "_id": "62ebc0e08a312c984bbd5dbb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5dba"
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
              "_id": "62ebc0e08a312c984bbd5dbd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5dbc"
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
              "_id": "62ebc0e08a312c984bbd5dbf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5dbe"
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
              "_id": "62ebc0e08a312c984bbd5dc1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5dc0"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5dc3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5dc2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5d9f",
    "audioID": 332,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 331,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5da1"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5da2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5da3"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5da4"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5da5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5da6"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5da7"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5da8"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5da9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5daa"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5dab"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5da0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 332,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5dad"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5dae"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5daf"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5db0"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5db1"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5db2"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5db3"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5db4"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5db5"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5db6"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5db7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5dac"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "333",
        "name": "Đặng Thị Ánh",
        "cty": "ABC",
        "hotline": "59302644"
      },
      "customer": {
        "customerID": "333",
        "name": "Phạm Khánh Ánh",
        "phone": "27154280",
        "address": "Hà Nội",
        "cmnd": "34256286"
      },
      "fileURL": "talk333.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "31s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5dde"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ddd"
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
              "_id": "62ebc0e08a312c984bbd5de0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ddf"
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
              "_id": "62ebc0e08a312c984bbd5de2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5de1"
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
              "_id": "62ebc0e08a312c984bbd5de4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5de3"
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
              "_id": "62ebc0e08a312c984bbd5de6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5de5"
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
              "_id": "62ebc0e08a312c984bbd5de8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5de7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5dc4",
    "audioID": 333,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 332,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dc6"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dc7"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5dc8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5dc9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5dca"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5dcb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5dcc"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5dcd"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5dce"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5dcf"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5dd0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5dc5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 333,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5dd2"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5dd3"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5dd4"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dd5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5dd6"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dd7"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5dd8"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dd9"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5dda"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5ddb"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ddc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5dd1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "334",
        "name": "Huỳnh Dương Dạ",
        "cty": "ABC",
        "hotline": "26717342"
      },
      "customer": {
        "customerID": "334",
        "name": "Ngô Quốc Quyền",
        "phone": "95473825",
        "address": "Hà Nội",
        "cmnd": "70183001"
      },
      "fileURL": "talk334.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "397s",
      "date": "30/3/2022",
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
              "_id": "62ebc0e08a312c984bbd5e03"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e02"
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
              "_id": "62ebc0e08a312c984bbd5e05"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e04"
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
              "_id": "62ebc0e08a312c984bbd5e07"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e06"
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
              "_id": "62ebc0e08a312c984bbd5e09"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e08"
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
              "_id": "62ebc0e08a312c984bbd5e0b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e0a"
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
              "_id": "62ebc0e08a312c984bbd5e0d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e0c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5de9",
    "audioID": 334,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 333,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5deb"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5dec"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ded"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5dee"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5def"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5df0"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5df1"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5df2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5df3"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5df4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5df5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5dea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 334,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5df7"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5df8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5df9"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5dfa"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5dfb"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5dfc"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5dfd"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5dfe"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5dff"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e00"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e01"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5df6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "335",
        "name": "Trần Minh Hồng",
        "cty": "ABC",
        "hotline": "92439346"
      },
      "customer": {
        "customerID": "335",
        "name": "Đặng An Duy",
        "phone": "47052355",
        "address": "Hà Nội",
        "cmnd": "97456095"
      },
      "fileURL": "talk335.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "398s",
      "date": "19/9/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5e28"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e27"
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
              "_id": "62ebc0e08a312c984bbd5e2a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e29"
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
              "_id": "62ebc0e08a312c984bbd5e2c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e2b"
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
              "_id": "62ebc0e08a312c984bbd5e2e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e2d"
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
              "_id": "62ebc0e08a312c984bbd5e30"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e2f"
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
              "_id": "62ebc0e08a312c984bbd5e32"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e31"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5e0e",
    "audioID": 335,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 334,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e10"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e11"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e12"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e13"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e14"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e15"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e16"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e17"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e18"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e19"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e1a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e0f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 335,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e1c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e1d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e1e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e1f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e20"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e21"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e22"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e23"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e24"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e25"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e26"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e1b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "336",
        "name": "Lê Quốc Cảnh",
        "cty": "ABC",
        "hotline": "65192793"
      },
      "customer": {
        "customerID": "336",
        "name": "Phạm Dương Dạ",
        "phone": "85475811",
        "address": "Hà Nội",
        "cmnd": "45847061"
      },
      "fileURL": "talk336.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "319s",
      "date": "9/8/2022",
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
              "_id": "62ebc0e08a312c984bbd5e4d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e4c"
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
              "_id": "62ebc0e08a312c984bbd5e4f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e4e"
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
              "_id": "62ebc0e08a312c984bbd5e51"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e50"
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
              "_id": "62ebc0e08a312c984bbd5e53"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e52"
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
              "_id": "62ebc0e08a312c984bbd5e55"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e54"
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
              "_id": "62ebc0e08a312c984bbd5e57"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e56"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5e33",
    "audioID": 336,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 335,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e35"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e36"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e37"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e38"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5e39"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e3a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e3b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e3c"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e3d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e3e"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e3f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e34"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 336,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e41"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e42"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e43"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e44"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e45"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e46"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e47"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5e48"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e49"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e4a"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e4b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e40"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "337",
        "name": "Phan Minh Cảnh",
        "cty": "ABC",
        "hotline": "26094738"
      },
      "customer": {
        "customerID": "337",
        "name": "Nguyễn Dương Lợi",
        "phone": "87704507",
        "address": "Hà Nội",
        "cmnd": "44905224"
      },
      "fileURL": "talk337.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "543s",
      "date": "18/9/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5e72"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e71"
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
              "_id": "62ebc0e08a312c984bbd5e74"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e73"
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
              "_id": "62ebc0e08a312c984bbd5e76"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e75"
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
              "_id": "62ebc0e08a312c984bbd5e78"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e77"
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
              "_id": "62ebc0e08a312c984bbd5e7a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e79"
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
              "_id": "62ebc0e08a312c984bbd5e7c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e7b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5e58",
    "audioID": 337,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 336,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e5a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e5b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e5c"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e5d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e5e"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e5f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e60"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e61"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e62"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e63"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e64"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e59"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 337,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e66"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e67"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e68"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e69"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e6a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e6b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e6c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5e6d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5e6e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e6f"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e70"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e65"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "338",
        "name": "Trần Thị Lợi",
        "cty": "ABC",
        "hotline": "26868463"
      },
      "customer": {
        "customerID": "338",
        "name": "Lê Quốc Ánh",
        "phone": "22757254",
        "address": "Hà Nội",
        "cmnd": "45562581"
      },
      "fileURL": "talk338.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "585s",
      "date": "9/4/2022",
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
              "_id": "62ebc0e08a312c984bbd5e97"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e96"
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
              "_id": "62ebc0e08a312c984bbd5e99"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e98"
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
              "_id": "62ebc0e08a312c984bbd5e9b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e9a"
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
              "_id": "62ebc0e08a312c984bbd5e9d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e9c"
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
              "_id": "62ebc0e08a312c984bbd5e9f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5e9e"
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
              "_id": "62ebc0e08a312c984bbd5ea1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ea0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5e7d",
    "audioID": 338,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 337,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e7f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e80"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e81"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e82"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e83"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5e84"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e85"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5e86"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e87"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e88"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e89"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e7e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 338,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e8b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e8c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5e8d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5e8e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5e8f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5e90"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e91"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5e92"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5e93"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5e94"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5e95"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5e8a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "339",
        "name": "Trương Hữu Cảnh",
        "cty": "ABC",
        "hotline": "64414450"
      },
      "customer": {
        "customerID": "339",
        "name": "Ngô Văn Khánh",
        "phone": "37448692",
        "address": "Hà Nội",
        "cmnd": "77370186"
      },
      "fileURL": "talk339.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "106s",
      "date": "3/12/2022",
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
              "_id": "62ebc0e08a312c984bbd5ebc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ebb"
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
              "_id": "62ebc0e08a312c984bbd5ebe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ebd"
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
              "_id": "62ebc0e08a312c984bbd5ec0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ebf"
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
              "_id": "62ebc0e08a312c984bbd5ec2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ec1"
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
              "_id": "62ebc0e08a312c984bbd5ec4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ec3"
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
              "_id": "62ebc0e08a312c984bbd5ec6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ec5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5ea2",
    "audioID": 339,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 338,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ea4"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ea5"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ea6"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ea7"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ea8"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ea9"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5eaa"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5eab"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5eac"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ead"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5eae"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ea3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 339,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5eb0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5eb1"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5eb2"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5eb3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5eb4"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5eb5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5eb6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5eb7"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5eb8"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5eb9"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5eba"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5eaf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "340",
        "name": "Nguyễn An Khánh",
        "cty": "ABC",
        "hotline": "51788742"
      },
      "customer": {
        "customerID": "340",
        "name": "Trương Quốc Lợi",
        "phone": "50449823",
        "address": "Hà Nội",
        "cmnd": "60525420"
      },
      "fileURL": "talk340.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "48s",
      "date": "16/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd5ee1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ee0"
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
              "_id": "62ebc0e08a312c984bbd5ee3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ee2"
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
              "_id": "62ebc0e08a312c984bbd5ee5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ee4"
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
              "_id": "62ebc0e08a312c984bbd5ee7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ee6"
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
              "_id": "62ebc0e08a312c984bbd5ee9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5ee8"
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
              "_id": "62ebc0e08a312c984bbd5eeb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5eea"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5ec7",
    "audioID": 340,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 339,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ec9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5eca"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ecb"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ecc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ecd"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ece"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ecf"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ed0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ed1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ed2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5ed3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ec8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 340,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ed5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ed6"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ed7"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ed8"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ed9"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5eda"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5edb"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5edc"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5edd"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ede"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5edf"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ed4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "341",
        "name": "Bùi Phương Ánh",
        "cty": "ABC",
        "hotline": "89347384"
      },
      "customer": {
        "customerID": "341",
        "name": "Phan Dương Duy",
        "phone": "47153566",
        "address": "Hà Nội",
        "cmnd": "79504244"
      },
      "fileURL": "talk341.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "562s",
      "date": "26/12/2022",
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
              "_id": "62ebc0e08a312c984bbd5f06"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f05"
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
              "_id": "62ebc0e08a312c984bbd5f08"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f07"
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
              "_id": "62ebc0e08a312c984bbd5f0a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f09"
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
              "_id": "62ebc0e08a312c984bbd5f0c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f0b"
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
              "_id": "62ebc0e08a312c984bbd5f0e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f0d"
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
              "_id": "62ebc0e08a312c984bbd5f10"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f0f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5eec",
    "audioID": 341,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 340,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5eee"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5eef"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5ef0"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ef1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ef2"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ef3"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ef4"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ef5"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5ef6"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ef7"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ef8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5eed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 341,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5efa"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5efb"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5efc"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5efd"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5efe"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5eff"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f00"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f01"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f02"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f03"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f04"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ef9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "342",
        "name": "Huỳnh Hải Lợi",
        "cty": "ABC",
        "hotline": "28037965"
      },
      "customer": {
        "customerID": "342",
        "name": "Phạm Khánh Thái Qúy",
        "phone": "18244205",
        "address": "Hà Nội",
        "cmnd": "71380608"
      },
      "fileURL": "talk342.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "369s",
      "date": "4/7/2022",
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
              "_id": "62ebc0e08a312c984bbd5f2b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f2a"
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
              "_id": "62ebc0e08a312c984bbd5f2d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f2c"
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
              "_id": "62ebc0e08a312c984bbd5f2f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f2e"
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
              "_id": "62ebc0e08a312c984bbd5f31"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f30"
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
              "_id": "62ebc0e08a312c984bbd5f33"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f32"
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
              "_id": "62ebc0e08a312c984bbd5f35"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f34"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5f11",
    "audioID": 342,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 341,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f13"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f14"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f15"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f16"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f17"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f18"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f19"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f1a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f1b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f1c"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f1d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f12"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 342,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f1f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f20"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f21"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f22"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f23"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f24"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f25"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f26"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f27"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f28"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f29"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f1e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "343",
        "name": "Trần Thị Cảnh",
        "cty": "ABC",
        "hotline": "41011217"
      },
      "customer": {
        "customerID": "343",
        "name": "Huỳnh Thị Quyền",
        "phone": "53310861",
        "address": "Hà Nội",
        "cmnd": "80553593"
      },
      "fileURL": "talk343.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "151s",
      "date": "15/9/2022",
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
              "_id": "62ebc0e08a312c984bbd5f50"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f4f"
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
              "_id": "62ebc0e08a312c984bbd5f52"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f51"
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
              "_id": "62ebc0e08a312c984bbd5f54"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f53"
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
              "_id": "62ebc0e08a312c984bbd5f56"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f55"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5f58"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f57"
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
              "_id": "62ebc0e08a312c984bbd5f5a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f59"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5f36",
    "audioID": 343,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 342,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f38"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f39"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f3a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f3b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f3c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f3d"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f3e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f3f"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f40"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f41"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f42"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f37"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 343,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f44"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f45"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f46"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f47"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f48"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f49"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f4a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f4b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f4c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f4d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f4e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f43"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "344",
        "name": "Ngô Khánh Khánh",
        "cty": "ABC",
        "hotline": "53272232"
      },
      "customer": {
        "customerID": "344",
        "name": "Trần Quốc Khánh",
        "phone": "56457630",
        "address": "Hà Nội",
        "cmnd": "50287053"
      },
      "fileURL": "talk344.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "39s",
      "date": "30/6/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5f75"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f74"
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
              "_id": "62ebc0e08a312c984bbd5f77"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f76"
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
              "_id": "62ebc0e08a312c984bbd5f79"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f78"
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
              "_id": "62ebc0e08a312c984bbd5f7b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f7a"
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
              "_id": "62ebc0e08a312c984bbd5f7d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f7c"
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
              "_id": "62ebc0e08a312c984bbd5f7f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f7e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5f5b",
    "audioID": 344,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 343,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f5d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f5e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f5f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f60"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f61"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f62"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f63"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f64"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f65"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f66"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f67"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f5c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 344,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f69"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f6a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f6b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f6c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f6d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f6e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f6f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f70"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f71"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f72"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f73"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f68"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "345",
        "name": "Trương Quốc Lợi",
        "cty": "ABC",
        "hotline": "70467495"
      },
      "customer": {
        "customerID": "345",
        "name": "Bùi Minh Khánh",
        "phone": "41953050",
        "address": "Hà Nội",
        "cmnd": "78508432"
      },
      "fileURL": "talk345.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "371s",
      "date": "13/10/2022",
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
              "_id": "62ebc0e08a312c984bbd5f9a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f99"
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
              "_id": "62ebc0e08a312c984bbd5f9c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f9b"
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
              "_id": "62ebc0e08a312c984bbd5f9e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f9d"
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
              "_id": "62ebc0e08a312c984bbd5fa0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5f9f"
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
              "_id": "62ebc0e08a312c984bbd5fa2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fa1"
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
              "_id": "62ebc0e08a312c984bbd5fa4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fa3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5f80",
    "audioID": 345,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 344,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f82"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f83"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5f84"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f85"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f86"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f87"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f88"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f89"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f8a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5f8b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5f8c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f81"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 345,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f8e"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f8f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f90"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5f91"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5f92"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f93"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5f94"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5f95"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5f96"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5f97"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5f98"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5f8d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "346",
        "name": "Trương Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "63468903"
      },
      "customer": {
        "customerID": "346",
        "name": "Lê Quốc Duy",
        "phone": "96260114",
        "address": "Hà Nội",
        "cmnd": "66632094"
      },
      "fileURL": "talk346.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "268s",
      "date": "2/12/2022",
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
              "_id": "62ebc0e08a312c984bbd5fbf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fbe"
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
              "_id": "62ebc0e08a312c984bbd5fc1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fc0"
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
              "_id": "62ebc0e08a312c984bbd5fc3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fc2"
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
              "_id": "62ebc0e08a312c984bbd5fc5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fc4"
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
              "_id": "62ebc0e08a312c984bbd5fc7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fc6"
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
              "_id": "62ebc0e08a312c984bbd5fc9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fc8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5fa5",
    "audioID": 346,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 345,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5fa7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fa8"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5fa9"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5faa"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5fab"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fac"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5fad"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5fae"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5faf"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5fb0"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5fb1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5fa6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 346,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5fb3"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5fb4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5fb5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5fb6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fb7"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5fb8"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5fb9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5fba"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5fbb"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5fbc"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5fbd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5fb2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "347",
        "name": "Nguyễn Minh Cảnh",
        "cty": "ABC",
        "hotline": "76328139"
      },
      "customer": {
        "customerID": "347",
        "name": "Ngô Hải Ánh",
        "phone": "16287472",
        "address": "Hà Nội",
        "cmnd": "92240844"
      },
      "fileURL": "talk347.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "233s",
      "date": "9/2/2022",
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
              "_id": "62ebc0e08a312c984bbd5fe4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fe3"
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
              "_id": "62ebc0e08a312c984bbd5fe6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fe5"
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
              "_id": "62ebc0e08a312c984bbd5fe8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fe7"
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
              "_id": "62ebc0e08a312c984bbd5fea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fe9"
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
              "_id": "62ebc0e08a312c984bbd5fec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5feb"
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
              "_id": "62ebc0e08a312c984bbd5fee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5fed"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5fca",
    "audioID": 347,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 346,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fcc"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5fcd"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5fce"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5fcf"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5fd0"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5fd1"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5fd2"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5fd3"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5fd4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fd5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5fd6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5fcb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 347,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5fd8"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5fd9"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5fda"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5fdb"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5fdc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5fdd"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5fde"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5fdf"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5fe0"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5fe1"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5fe2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5fd7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "348",
        "name": "Nguyễn Hải An",
        "cty": "ABC",
        "hotline": "93569891"
      },
      "customer": {
        "customerID": "348",
        "name": "Phan Hữu Hồng",
        "phone": "30837226",
        "address": "Hà Nội",
        "cmnd": "10387466"
      },
      "fileURL": "talk348.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "535s",
      "date": "6/5/2022",
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
              "_id": "62ebc0e08a312c984bbd6009"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6008"
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
              "_id": "62ebc0e08a312c984bbd600b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd600a"
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
              "_id": "62ebc0e08a312c984bbd600d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd600c"
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
              "_id": "62ebc0e08a312c984bbd600f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd600e"
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
              "_id": "62ebc0e08a312c984bbd6011"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6010"
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
              "_id": "62ebc0e08a312c984bbd6013"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6012"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5fef",
    "audioID": 348,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 347,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ff1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5ff2"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ff3"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ff4"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ff5"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5ff6"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ff7"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ff8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5ff9"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ffa"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5ffb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ff0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 348,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5ffd"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5ffe"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5fff"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6000"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6001"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6002"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6003"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6004"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6005"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6006"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6007"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5ffc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "349",
        "name": "Phạm An Thái Qúy",
        "cty": "ABC",
        "hotline": "40058493"
      },
      "customer": {
        "customerID": "349",
        "name": "Trần Hải Khánh",
        "phone": "34391164",
        "address": "Hà Nội",
        "cmnd": "77464643"
      },
      "fileURL": "talk349.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "481s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd602e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd602d"
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
              "_id": "62ebc0e08a312c984bbd6030"
            }
          ],
          "_id": "62ebc0e08a312c984bbd602f"
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
              "_id": "62ebc0e08a312c984bbd6032"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6031"
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
              "_id": "62ebc0e08a312c984bbd6034"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6033"
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
              "_id": "62ebc0e08a312c984bbd6036"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6035"
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
              "_id": "62ebc0e08a312c984bbd6038"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6037"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6014",
    "audioID": 349,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 348,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6016"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6017"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6018"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6019"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd601a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd601b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd601c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd601d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd601e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd601f"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6020"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6015"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 349,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6022"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6023"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6024"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6025"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6026"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6027"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6028"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6029"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd602a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd602b"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd602c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6021"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "350",
        "name": "Huỳnh Phương Quyền",
        "cty": "ABC",
        "hotline": "64506687"
      },
      "customer": {
        "customerID": "350",
        "name": "Nguyễn An Thái Qúy",
        "phone": "59865058",
        "address": "Hà Nội",
        "cmnd": "63715116"
      },
      "fileURL": "talk350.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "365s",
      "date": "17/11/2022",
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
              "_id": "62ebc0e08a312c984bbd6053"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6052"
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
              "_id": "62ebc0e08a312c984bbd6055"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6054"
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
              "_id": "62ebc0e08a312c984bbd6057"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6056"
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
              "_id": "62ebc0e08a312c984bbd6059"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6058"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd605b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd605a"
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
              "_id": "62ebc0e08a312c984bbd605d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd605c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6039",
    "audioID": 350,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 349,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd603b"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd603c"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd603d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd603e"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd603f"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6040"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6041"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6042"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6043"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6044"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6045"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd603a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 350,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6047"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6048"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6049"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd604a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd604b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd604c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd604d"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd604e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd604f"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6050"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6051"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6046"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "351",
        "name": "Bùi Thị Lợi",
        "cty": "ABC",
        "hotline": "75651091"
      },
      "customer": {
        "customerID": "351",
        "name": "Trần Văn Dạ",
        "phone": "81272242",
        "address": "Hà Nội",
        "cmnd": "44437753"
      },
      "fileURL": "talk351.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "63s",
      "date": "6/6/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6078"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6077"
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
              "_id": "62ebc0e08a312c984bbd607a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6079"
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
              "_id": "62ebc0e08a312c984bbd607c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd607b"
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
              "_id": "62ebc0e08a312c984bbd607e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd607d"
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
              "_id": "62ebc0e08a312c984bbd6080"
            }
          ],
          "_id": "62ebc0e08a312c984bbd607f"
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
              "_id": "62ebc0e08a312c984bbd6082"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6081"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd605e",
    "audioID": 351,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 350,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6060"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6061"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6062"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6063"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6064"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6065"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6066"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6067"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6068"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6069"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd606a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd605f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 351,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd606c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd606d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd606e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd606f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6070"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6071"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6072"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6073"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6074"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6075"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6076"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd606b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "352",
        "name": "Phan Văn Cảnh",
        "cty": "ABC",
        "hotline": "54329366"
      },
      "customer": {
        "customerID": "352",
        "name": "Phan Văn Lợi",
        "phone": "59516381",
        "address": "Hà Nội",
        "cmnd": "34212328"
      },
      "fileURL": "talk352.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "566s",
      "date": "20/5/2022",
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
              "_id": "62ebc0e08a312c984bbd609d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd609c"
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
              "_id": "62ebc0e08a312c984bbd609f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd609e"
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
              "_id": "62ebc0e08a312c984bbd60a1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60a0"
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
              "_id": "62ebc0e08a312c984bbd60a3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60a2"
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
              "_id": "62ebc0e08a312c984bbd60a5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60a4"
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
              "_id": "62ebc0e08a312c984bbd60a7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60a6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6083",
    "audioID": 352,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 351,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6085"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6086"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6087"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6088"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6089"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd608a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd608b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd608c"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd608d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd608e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd608f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6084"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 352,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6091"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6092"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6093"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6094"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6095"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6096"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6097"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6098"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6099"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd609a"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd609b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6090"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "353",
        "name": "Huỳnh Quốc Quyền",
        "cty": "ABC",
        "hotline": "57604783"
      },
      "customer": {
        "customerID": "353",
        "name": "Trương Khánh Cảnh",
        "phone": "28203757",
        "address": "Hà Nội",
        "cmnd": "31100769"
      },
      "fileURL": "talk353.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "258s",
      "date": "30/9/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd60c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60c1"
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
              "_id": "62ebc0e08a312c984bbd60c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60c3"
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
              "_id": "62ebc0e08a312c984bbd60c6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60c5"
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
              "_id": "62ebc0e08a312c984bbd60c8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60c7"
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
              "_id": "62ebc0e08a312c984bbd60ca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60c9"
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
              "_id": "62ebc0e08a312c984bbd60cc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60cb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd60a8",
    "audioID": 353,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 352,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60aa"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd60ab"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60ac"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60ad"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60ae"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd60af"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60b0"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60b1"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd60b2"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60b3"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd60b4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60a9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 353,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60b6"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd60b7"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60b8"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60b9"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60ba"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd60bb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60bc"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60bd"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd60be"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd60bf"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60c0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60b5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "354",
        "name": "Bùi Quốc Cảnh",
        "cty": "ABC",
        "hotline": "22273712"
      },
      "customer": {
        "customerID": "354",
        "name": "Bùi Văn Khánh",
        "phone": "14101501",
        "address": "Hà Nội",
        "cmnd": "59183793"
      },
      "fileURL": "talk354.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "53s",
      "date": "31/12/2022",
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
              "_id": "62ebc0e08a312c984bbd60e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60e6"
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
              "_id": "62ebc0e08a312c984bbd60e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60e8"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd60eb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60ea"
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
              "_id": "62ebc0e08a312c984bbd60ed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60ec"
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
              "_id": "62ebc0e08a312c984bbd60ef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60ee"
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
              "_id": "62ebc0e08a312c984bbd60f1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd60f0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd60cd",
    "audioID": 354,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 353,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60cf"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60d0"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60d1"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60d2"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60d3"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60d4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60d5"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60d6"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd60d7"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd60d8"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60d9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60ce"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 354,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd60db"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd60dc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd60dd"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd60de"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60df"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60e0"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd60e1"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd60e2"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd60e3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd60e4"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd60e5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60da"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "355",
        "name": "Nguyễn Hữu Duy",
        "cty": "ABC",
        "hotline": "26990488"
      },
      "customer": {
        "customerID": "355",
        "name": "Phạm Khánh Duy",
        "phone": "31522966",
        "address": "Hà Nội",
        "cmnd": "85328480"
      },
      "fileURL": "talk355.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "19s",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd610c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd610b"
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
              "_id": "62ebc0e08a312c984bbd610e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd610d"
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
              "_id": "62ebc0e08a312c984bbd6110"
            }
          ],
          "_id": "62ebc0e08a312c984bbd610f"
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
              "_id": "62ebc0e08a312c984bbd6112"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6111"
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
              "_id": "62ebc0e08a312c984bbd6114"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6113"
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
              "_id": "62ebc0e08a312c984bbd6116"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6115"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd60f2",
    "audioID": 355,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 354,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd60f4"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60f5"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd60f6"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60f7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60f8"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd60f9"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd60fa"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd60fb"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd60fc"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd60fd"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd60fe"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60f3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 355,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6100"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6101"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6102"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6103"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6104"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6105"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6106"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6107"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6108"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6109"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd610a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd60ff"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "356",
        "name": "Đặng Khánh Duy",
        "cty": "ABC",
        "hotline": "73160436"
      },
      "customer": {
        "customerID": "356",
        "name": "Trần Quốc Thái Qúy",
        "phone": "96443827",
        "address": "Hà Nội",
        "cmnd": "44056171"
      },
      "fileURL": "talk356.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "541s",
      "date": "10/12/2022",
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
              "_id": "62ebc0e08a312c984bbd6131"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6130"
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
              "_id": "62ebc0e08a312c984bbd6133"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6132"
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
              "_id": "62ebc0e08a312c984bbd6135"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6134"
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
              "_id": "62ebc0e08a312c984bbd6137"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6136"
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
              "_id": "62ebc0e08a312c984bbd6139"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6138"
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
              "_id": "62ebc0e08a312c984bbd613b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd613a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6117",
    "audioID": 356,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 355,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6119"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd611a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd611b"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd611c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd611d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd611e"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd611f"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6120"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6121"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6122"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6123"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6118"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 356,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6125"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6126"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6127"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6128"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6129"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd612a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd612b"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd612c"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd612d"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd612e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd612f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6124"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "357",
        "name": "Huỳnh Văn Lợi",
        "cty": "ABC",
        "hotline": "91077686"
      },
      "customer": {
        "customerID": "357",
        "name": "Ngô Phương Ánh",
        "phone": "37664763",
        "address": "Hà Nội",
        "cmnd": "55985447"
      },
      "fileURL": "talk357.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "222s",
      "date": "24/7/2022",
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
              "_id": "62ebc0e08a312c984bbd6156"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6155"
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
              "_id": "62ebc0e08a312c984bbd6158"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6157"
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
              "_id": "62ebc0e08a312c984bbd615a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6159"
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
              "_id": "62ebc0e08a312c984bbd615c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd615b"
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
              "_id": "62ebc0e08a312c984bbd615e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd615d"
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
              "_id": "62ebc0e08a312c984bbd6160"
            }
          ],
          "_id": "62ebc0e08a312c984bbd615f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd613c",
    "audioID": 357,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 356,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd613e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd613f"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6140"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6141"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6142"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6143"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6144"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6145"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6146"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6147"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6148"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd613d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 357,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd614a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd614b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd614c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd614d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd614e"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd614f"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6150"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6151"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6152"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6153"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6154"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6149"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "358",
        "name": "Ngô Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "12881531"
      },
      "customer": {
        "customerID": "358",
        "name": "Trương Hữu Hồng",
        "phone": "57928830",
        "address": "Hà Nội",
        "cmnd": "77305984"
      },
      "fileURL": "talk358.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "441s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd617b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd617a"
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
              "_id": "62ebc0e08a312c984bbd617d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd617c"
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
              "_id": "62ebc0e08a312c984bbd617f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd617e"
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
              "_id": "62ebc0e08a312c984bbd6181"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6180"
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
              "_id": "62ebc0e08a312c984bbd6183"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6182"
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
              "_id": "62ebc0e08a312c984bbd6185"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6184"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6161",
    "audioID": 358,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 357,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6163"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6164"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6165"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6166"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6167"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6168"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6169"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd616a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd616b"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd616c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd616d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6162"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 358,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd616f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6170"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6171"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6172"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6173"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6174"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6175"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6176"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6177"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6178"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6179"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd616e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "359",
        "name": "Lê Hải Quyền",
        "cty": "ABC",
        "hotline": "72794019"
      },
      "customer": {
        "customerID": "359",
        "name": "Phan Văn Lợi",
        "phone": "70028667",
        "address": "Hà Nội",
        "cmnd": "75433318"
      },
      "fileURL": "talk359.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "97s",
      "date": "9/4/2022",
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
              "_id": "62ebc0e08a312c984bbd61a0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd619f"
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
              "_id": "62ebc0e08a312c984bbd61a2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61a1"
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
              "_id": "62ebc0e08a312c984bbd61a4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61a3"
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
              "_id": "62ebc0e08a312c984bbd61a6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61a5"
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
              "_id": "62ebc0e08a312c984bbd61a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61a7"
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
              "_id": "62ebc0e08a312c984bbd61aa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61a9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6186",
    "audioID": 359,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 358,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6188"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6189"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd618a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd618b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd618c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd618d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd618e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd618f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6190"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6191"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6192"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6187"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 359,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6194"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6195"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6196"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6197"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6198"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6199"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd619a"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd619b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd619c"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd619d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd619e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6193"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "360",
        "name": "Trần Quốc Cảnh",
        "cty": "ABC",
        "hotline": "17310616"
      },
      "customer": {
        "customerID": "360",
        "name": "Phan Văn Quyền",
        "phone": "19206163",
        "address": "Hà Nội",
        "cmnd": "35353155"
      },
      "fileURL": "talk360.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "493s",
      "date": "3/4/2022",
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
              "_id": "62ebc0e08a312c984bbd61c5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61c4"
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
              "_id": "62ebc0e08a312c984bbd61c7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61c6"
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
              "_id": "62ebc0e08a312c984bbd61c9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61c8"
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
              "_id": "62ebc0e08a312c984bbd61cb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61ca"
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
              "_id": "62ebc0e08a312c984bbd61cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61cc"
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
              "_id": "62ebc0e08a312c984bbd61cf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61ce"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd61ab",
    "audioID": 360,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 359,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61ad"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd61ae"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61af"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61b0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61b1"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61b2"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61b3"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61b4"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61b5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd61b6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61b7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd61ac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 360,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd61b9"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd61ba"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61bb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd61bc"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61bd"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61be"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61bf"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd61c0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61c1"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61c2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61c3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd61b8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "361",
        "name": "Phan An Lợi",
        "cty": "ABC",
        "hotline": "27412401"
      },
      "customer": {
        "customerID": "361",
        "name": "Ngô An Thái Qúy",
        "phone": "83471468",
        "address": "Hà Nội",
        "cmnd": "35213369"
      },
      "fileURL": "talk361.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "398s",
      "date": "21/9/2022",
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
              "_id": "62ebc0e08a312c984bbd61ea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61e9"
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
              "_id": "62ebc0e08a312c984bbd61ec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61eb"
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
              "_id": "62ebc0e08a312c984bbd61ee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61ed"
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
              "_id": "62ebc0e08a312c984bbd61f0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61ef"
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
              "_id": "62ebc0e08a312c984bbd61f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61f1"
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
              "_id": "62ebc0e08a312c984bbd61f4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd61f3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd61d0",
    "audioID": 361,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 360,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd61d2"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61d3"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd61d4"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61d5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61d6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61d7"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61d8"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61d9"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61da"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61db"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61dc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd61d1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 361,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd61de"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd61df"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61e0"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd61e1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd61e2"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61e3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61e4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61e5"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61e6"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd61e7"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd61e8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd61dd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "362",
        "name": "Nguyễn Hữu Cảnh",
        "cty": "ABC",
        "hotline": "88167766"
      },
      "customer": {
        "customerID": "362",
        "name": "Lê Minh Cảnh",
        "phone": "75079389",
        "address": "Hà Nội",
        "cmnd": "19891502"
      },
      "fileURL": "talk362.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "400s",
      "date": "1/4/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd620f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd620e"
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
              "_id": "62ebc0e08a312c984bbd6211"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6210"
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
              "_id": "62ebc0e08a312c984bbd6213"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6212"
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
              "_id": "62ebc0e08a312c984bbd6215"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6214"
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
              "_id": "62ebc0e08a312c984bbd6217"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6216"
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
              "_id": "62ebc0e08a312c984bbd6219"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6218"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd61f5",
    "audioID": 362,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 361,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd61f7"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd61f8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61f9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd61fa"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61fb"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61fc"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd61fd"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd61fe"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd61ff"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6200"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6201"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd61f6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 362,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6203"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6204"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6205"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6206"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6207"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6208"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6209"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd620a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd620b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd620c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd620d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6202"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "363",
        "name": "Trương Văn Quyền",
        "cty": "ABC",
        "hotline": "55511113"
      },
      "customer": {
        "customerID": "363",
        "name": "Huỳnh Minh Khánh",
        "phone": "25261686",
        "address": "Hà Nội",
        "cmnd": "24251502"
      },
      "fileURL": "talk363.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "187s",
      "date": "29/9/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6234"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6233"
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
              "_id": "62ebc0e08a312c984bbd6236"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6235"
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
              "_id": "62ebc0e08a312c984bbd6238"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6237"
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
              "_id": "62ebc0e08a312c984bbd623a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6239"
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
              "_id": "62ebc0e08a312c984bbd623c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd623b"
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
              "_id": "62ebc0e08a312c984bbd623e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd623d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd621a",
    "audioID": 363,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 362,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd621c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd621d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd621e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd621f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6220"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6221"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6222"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6223"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6224"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6225"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6226"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd621b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 363,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6228"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6229"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd622a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd622b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd622c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd622d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd622e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd622f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6230"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6231"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6232"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6227"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "364",
        "name": "Ngô Minh Lợi",
        "cty": "ABC",
        "hotline": "73602824"
      },
      "customer": {
        "customerID": "364",
        "name": "Trần Văn Ánh",
        "phone": "19685708",
        "address": "Hà Nội",
        "cmnd": "82745374"
      },
      "fileURL": "talk364.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "430s",
      "date": "21/4/2022",
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
              "_id": "62ebc0e08a312c984bbd6259"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6258"
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
              "_id": "62ebc0e08a312c984bbd625b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd625a"
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
              "_id": "62ebc0e08a312c984bbd625d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd625c"
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
              "_id": "62ebc0e08a312c984bbd625f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd625e"
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
              "_id": "62ebc0e08a312c984bbd6261"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6260"
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
              "_id": "62ebc0e08a312c984bbd6263"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6262"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd623f",
    "audioID": 364,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 363,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6241"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6242"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6243"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6244"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6245"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6246"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6247"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6248"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6249"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd624a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd624b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6240"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 364,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd624d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd624e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd624f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6250"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6251"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6252"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6253"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6254"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6255"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6256"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6257"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd624c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "365",
        "name": "Phan Dương Dạ",
        "cty": "ABC",
        "hotline": "73511895"
      },
      "customer": {
        "customerID": "365",
        "name": "Ngô Hữu Cảnh",
        "phone": "39251181",
        "address": "Hà Nội",
        "cmnd": "58943121"
      },
      "fileURL": "talk365.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "408s",
      "date": "16/2/2022",
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
              "_id": "62ebc0e08a312c984bbd627e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd627d"
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
              "_id": "62ebc0e08a312c984bbd6280"
            }
          ],
          "_id": "62ebc0e08a312c984bbd627f"
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
              "_id": "62ebc0e08a312c984bbd6282"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6281"
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
              "_id": "62ebc0e08a312c984bbd6284"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6283"
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
              "_id": "62ebc0e08a312c984bbd6286"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6285"
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
              "_id": "62ebc0e08a312c984bbd6288"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6287"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6264",
    "audioID": 365,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 364,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6266"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6267"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6268"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6269"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd626a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd626b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd626c"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd626d"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd626e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd626f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6270"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6265"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 365,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6272"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6273"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6274"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6275"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6276"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6277"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6278"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6279"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd627a"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd627b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd627c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6271"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "366",
        "name": "Trương Khánh Hồng",
        "cty": "ABC",
        "hotline": "26882785"
      },
      "customer": {
        "customerID": "366",
        "name": "Đặng Thị Cảnh",
        "phone": "24317400",
        "address": "Hà Nội",
        "cmnd": "14864948"
      },
      "fileURL": "talk366.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "188s",
      "date": "18/4/2022",
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
              "_id": "62ebc0e08a312c984bbd62a3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62a2"
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
              "_id": "62ebc0e08a312c984bbd62a5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62a4"
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
              "_id": "62ebc0e08a312c984bbd62a7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62a6"
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
              "_id": "62ebc0e08a312c984bbd62a9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62a8"
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
              "_id": "62ebc0e08a312c984bbd62ab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62aa"
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
              "_id": "62ebc0e08a312c984bbd62ad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62ac"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6289",
    "audioID": 366,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 365,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd628b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd628c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd628d"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd628e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd628f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6290"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6291"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6292"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6293"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6294"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6295"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd628a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 366,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6297"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6298"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6299"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd629a"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd629b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd629c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd629d"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd629e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd629f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62a0"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62a1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6296"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "367",
        "name": "Bùi Hữu Ánh",
        "cty": "ABC",
        "hotline": "52759755"
      },
      "customer": {
        "customerID": "367",
        "name": "Trương Hải Lợi",
        "phone": "18883058",
        "address": "Hà Nội",
        "cmnd": "73888542"
      },
      "fileURL": "talk367.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "564s",
      "date": "13/9/2022",
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
              "_id": "62ebc0e08a312c984bbd62c8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62c7"
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
              "_id": "62ebc0e08a312c984bbd62ca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62c9"
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
              "_id": "62ebc0e08a312c984bbd62cc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62cb"
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
              "_id": "62ebc0e08a312c984bbd62ce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62cd"
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
              "_id": "62ebc0e08a312c984bbd62d0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62cf"
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
              "_id": "62ebc0e08a312c984bbd62d2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62d1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd62ae",
    "audioID": 367,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 366,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd62b0"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd62b1"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62b2"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62b3"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62b4"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62b5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62b6"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62b7"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd62b8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd62b9"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62ba"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd62af"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 367,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62bc"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62bd"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd62be"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd62bf"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62c0"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62c1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd62c2"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62c3"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd62c4"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd62c5"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd62c6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd62bb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "368",
        "name": "Phạm Dương Khánh",
        "cty": "ABC",
        "hotline": "73712776"
      },
      "customer": {
        "customerID": "368",
        "name": "Bùi Hải Ánh",
        "phone": "44401590",
        "address": "Hà Nội",
        "cmnd": "72311238"
      },
      "fileURL": "talk368.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "55s",
      "date": "20/12/2022",
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
              "_id": "62ebc0e08a312c984bbd62ed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62ec"
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
              "_id": "62ebc0e08a312c984bbd62ef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62ee"
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
              "_id": "62ebc0e08a312c984bbd62f1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62f0"
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
              "_id": "62ebc0e08a312c984bbd62f3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62f2"
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
              "_id": "62ebc0e08a312c984bbd62f5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62f4"
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
              "_id": "62ebc0e08a312c984bbd62f7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd62f6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd62d3",
    "audioID": 368,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 367,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62d5"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62d6"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd62d7"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62d8"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62d9"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62da"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62db"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd62dc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62dd"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62de"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62df"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd62d4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 368,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62e1"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62e2"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd62e3"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd62e4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62e5"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd62e6"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62e7"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62e8"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd62e9"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd62ea"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62eb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd62e0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "369",
        "name": "Phạm Văn An",
        "cty": "ABC",
        "hotline": "22552048"
      },
      "customer": {
        "customerID": "369",
        "name": "Trương Quốc Cảnh",
        "phone": "96450172",
        "address": "Hà Nội",
        "cmnd": "12522132"
      },
      "fileURL": "talk369.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "351s",
      "date": "20/10/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6312"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6311"
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
              "_id": "62ebc0e08a312c984bbd6314"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6313"
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
              "_id": "62ebc0e08a312c984bbd6316"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6315"
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
              "_id": "62ebc0e08a312c984bbd6318"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6317"
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
              "_id": "62ebc0e08a312c984bbd631a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6319"
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
              "_id": "62ebc0e08a312c984bbd631c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd631b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd62f8",
    "audioID": 369,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 368,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd62fa"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd62fb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62fc"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd62fd"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62fe"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd62ff"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6300"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6301"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6302"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6303"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6304"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd62f9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 369,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6306"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6307"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6308"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6309"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd630a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd630b"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd630c"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd630d"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd630e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd630f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6310"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6305"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "370",
        "name": "Huỳnh Dương Cảnh",
        "cty": "ABC",
        "hotline": "29718033"
      },
      "customer": {
        "customerID": "370",
        "name": "Bùi Hữu Hồng",
        "phone": "61892298",
        "address": "Hà Nội",
        "cmnd": "31891353"
      },
      "fileURL": "talk370.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "595s",
      "date": "2/10/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6337"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6336"
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
              "_id": "62ebc0e08a312c984bbd6339"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6338"
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
              "_id": "62ebc0e08a312c984bbd633b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd633a"
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
              "_id": "62ebc0e08a312c984bbd633d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd633c"
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
              "_id": "62ebc0e08a312c984bbd633f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd633e"
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
              "_id": "62ebc0e08a312c984bbd6341"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6340"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd631d",
    "audioID": 370,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 369,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd631f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6320"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6321"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6322"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6323"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6324"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6325"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6326"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6327"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6328"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6329"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd631e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 370,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd632b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd632c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd632d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd632e"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd632f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6330"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6331"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6332"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6333"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6334"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6335"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd632a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "371",
        "name": "Trương Văn Khánh",
        "cty": "ABC",
        "hotline": "31335500"
      },
      "customer": {
        "customerID": "371",
        "name": "Bùi Dương Lợi",
        "phone": "84750409",
        "address": "Hà Nội",
        "cmnd": "51281587"
      },
      "fileURL": "talk371.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "126s",
      "date": "8/1/2022",
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
              "_id": "62ebc0e08a312c984bbd635c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd635b"
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
              "_id": "62ebc0e08a312c984bbd635e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd635d"
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
              "_id": "62ebc0e08a312c984bbd6360"
            }
          ],
          "_id": "62ebc0e08a312c984bbd635f"
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
              "_id": "62ebc0e08a312c984bbd6362"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6361"
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
              "_id": "62ebc0e08a312c984bbd6364"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6363"
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
              "_id": "62ebc0e08a312c984bbd6366"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6365"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6342",
    "audioID": 371,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 370,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6344"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6345"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6346"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6347"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6348"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6349"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd634a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd634b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd634c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd634d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd634e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6343"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 371,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6350"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6351"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6352"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6353"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6354"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6355"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6356"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6357"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6358"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6359"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd635a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd634f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "372",
        "name": "Nguyễn Khánh Duy",
        "cty": "ABC",
        "hotline": "38779046"
      },
      "customer": {
        "customerID": "372",
        "name": "Trương Quốc Hồng",
        "phone": "73413931",
        "address": "Hà Nội",
        "cmnd": "41979723"
      },
      "fileURL": "talk372.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "194s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6381"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6380"
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
              "_id": "62ebc0e08a312c984bbd6383"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6382"
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
              "_id": "62ebc0e08a312c984bbd6385"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6384"
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
              "_id": "62ebc0e08a312c984bbd6387"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6386"
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
              "_id": "62ebc0e08a312c984bbd6389"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6388"
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
              "_id": "62ebc0e08a312c984bbd638b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd638a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6367",
    "audioID": 372,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 371,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6369"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd636a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd636b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd636c"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd636d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd636e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd636f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6370"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6371"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6372"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6373"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6368"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 372,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6375"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6376"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6377"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6378"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6379"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd637a"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd637b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd637c"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd637d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd637e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd637f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6374"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "373",
        "name": "Nguyễn An Hồng",
        "cty": "ABC",
        "hotline": "12416648"
      },
      "customer": {
        "customerID": "373",
        "name": "Huỳnh Dương Duy",
        "phone": "49011166",
        "address": "Hà Nội",
        "cmnd": "11698910"
      },
      "fileURL": "talk373.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "369s",
      "date": "9/4/2022",
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
              "_id": "62ebc0e08a312c984bbd63a6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63a5"
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
              "_id": "62ebc0e08a312c984bbd63a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63a7"
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
              "_id": "62ebc0e08a312c984bbd63aa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63a9"
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
              "_id": "62ebc0e08a312c984bbd63ac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63ab"
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
              "_id": "62ebc0e08a312c984bbd63ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63ad"
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
              "_id": "62ebc0e08a312c984bbd63b0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63af"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd638c",
    "audioID": 373,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 372,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd638e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd638f"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6390"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6391"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6392"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6393"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6394"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6395"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6396"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6397"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6398"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd638d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 373,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd639a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd639b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd639c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd639d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd639e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd639f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd63a0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63a1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63a2"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63a3"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd63a4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6399"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "374",
        "name": "Ngô Văn Thái Qúy",
        "cty": "ABC",
        "hotline": "47545073"
      },
      "customer": {
        "customerID": "374",
        "name": "Đặng Phương Lợi",
        "phone": "15457034",
        "address": "Hà Nội",
        "cmnd": "93454203"
      },
      "fileURL": "talk374.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "301s",
      "date": "21/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd63cb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63ca"
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
              "_id": "62ebc0e08a312c984bbd63cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63cc"
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
              "_id": "62ebc0e08a312c984bbd63cf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63ce"
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
              "_id": "62ebc0e08a312c984bbd63d1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63d0"
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
              "_id": "62ebc0e08a312c984bbd63d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63d2"
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
              "_id": "62ebc0e08a312c984bbd63d5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63d4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd63b1",
    "audioID": 374,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 373,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd63b3"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd63b4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd63b5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63b6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63b7"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63b8"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63b9"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd63ba"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63bb"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd63bc"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63bd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd63b2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 374,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd63bf"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd63c0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd63c1"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63c2"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd63c3"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63c4"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63c5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63c6"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd63c7"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd63c8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd63c9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd63be"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "375",
        "name": "Phan Dương Ánh",
        "cty": "ABC",
        "hotline": "66073687"
      },
      "customer": {
        "customerID": "375",
        "name": "Trương Hải Khánh",
        "phone": "72891991",
        "address": "Hà Nội",
        "cmnd": "70685839"
      },
      "fileURL": "talk375.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "188s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd63f0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63ef"
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
              "_id": "62ebc0e08a312c984bbd63f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63f1"
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
              "_id": "62ebc0e08a312c984bbd63f4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63f3"
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
              "_id": "62ebc0e08a312c984bbd63f6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63f5"
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
              "_id": "62ebc0e08a312c984bbd63f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63f7"
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
              "_id": "62ebc0e08a312c984bbd63fa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd63f9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd63d6",
    "audioID": 375,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 374,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd63d8"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd63d9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd63da"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63db"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63dc"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd63dd"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63de"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd63df"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd63e0"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63e1"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd63e2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd63d7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 375,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63e4"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63e5"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63e6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd63e7"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd63e8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63e9"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd63ea"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63eb"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd63ec"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd63ed"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd63ee"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd63e3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "376",
        "name": "Phạm Văn Quyền",
        "cty": "ABC",
        "hotline": "24520101"
      },
      "customer": {
        "customerID": "376",
        "name": "Lê Hữu Lợi",
        "phone": "27317679",
        "address": "Hà Nội",
        "cmnd": "46580870"
      },
      "fileURL": "talk376.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "428s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6415"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6414"
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
              "_id": "62ebc0e08a312c984bbd6417"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6416"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6419"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6418"
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
              "_id": "62ebc0e08a312c984bbd641b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd641a"
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
              "_id": "62ebc0e08a312c984bbd641d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd641c"
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
              "_id": "62ebc0e08a312c984bbd641f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd641e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd63fb",
    "audioID": 376,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 375,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd63fd"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd63fe"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd63ff"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6400"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6401"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6402"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6403"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6404"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6405"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6406"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6407"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd63fc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 376,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6409"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd640a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd640b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd640c"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd640d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd640e"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd640f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6410"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6411"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6412"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6413"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6408"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "377",
        "name": "Phạm Văn Dạ",
        "cty": "ABC",
        "hotline": "85885807"
      },
      "customer": {
        "customerID": "377",
        "name": "Trương Dương Duy",
        "phone": "18317167",
        "address": "Hà Nội",
        "cmnd": "43287616"
      },
      "fileURL": "talk377.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "67s",
      "date": "20/3/2022",
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
              "_id": "62ebc0e08a312c984bbd643a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6439"
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
              "_id": "62ebc0e08a312c984bbd643c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd643b"
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
              "_id": "62ebc0e08a312c984bbd643e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd643d"
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
              "_id": "62ebc0e08a312c984bbd6440"
            }
          ],
          "_id": "62ebc0e08a312c984bbd643f"
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
              "_id": "62ebc0e08a312c984bbd6442"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6441"
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
              "_id": "62ebc0e08a312c984bbd6444"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6443"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6420",
    "audioID": 377,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 376,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6422"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6423"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6424"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6425"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6426"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6427"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6428"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6429"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd642a"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd642b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd642c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6421"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 377,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd642e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd642f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6430"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6431"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6432"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6433"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6434"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6435"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6436"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6437"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6438"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd642d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "378",
        "name": "Phạm Minh Hồng",
        "cty": "ABC",
        "hotline": "92549545"
      },
      "customer": {
        "customerID": "378",
        "name": "Nguyễn Dương Dạ",
        "phone": "67964445",
        "address": "Hà Nội",
        "cmnd": "96832296"
      },
      "fileURL": "talk378.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "50s",
      "date": "12/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd645f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd645e"
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
              "_id": "62ebc0e08a312c984bbd6461"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6460"
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
              "_id": "62ebc0e08a312c984bbd6463"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6462"
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
              "_id": "62ebc0e08a312c984bbd6465"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6464"
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
              "_id": "62ebc0e08a312c984bbd6467"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6466"
        },
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
              "_id": "62ebc0e08a312c984bbd6469"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6468"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6445",
    "audioID": 378,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 377,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6447"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6448"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6449"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd644a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd644b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd644c"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd644d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd644e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd644f"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6450"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6451"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6446"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 378,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6453"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6454"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6455"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6456"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6457"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6458"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6459"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd645a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd645b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd645c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd645d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6452"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "379",
        "name": "Đặng Thị Ánh",
        "cty": "ABC",
        "hotline": "75640054"
      },
      "customer": {
        "customerID": "379",
        "name": "Đặng Phương Cảnh",
        "phone": "38249211",
        "address": "Hà Nội",
        "cmnd": "97041850"
      },
      "fileURL": "talk379.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "133s",
      "date": "29/9/2022",
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
              "_id": "62ebc0e08a312c984bbd6484"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6483"
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
              "_id": "62ebc0e08a312c984bbd6486"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6485"
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
              "_id": "62ebc0e08a312c984bbd6488"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6487"
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
              "_id": "62ebc0e08a312c984bbd648a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6489"
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
              "_id": "62ebc0e08a312c984bbd648c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd648b"
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
              "_id": "62ebc0e08a312c984bbd648e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd648d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd646a",
    "audioID": 379,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 378,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd646c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd646d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd646e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd646f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6470"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6471"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6472"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6473"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6474"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6475"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6476"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd646b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 379,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6478"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6479"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd647a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd647b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd647c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd647d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd647e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd647f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6480"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6481"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6482"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6477"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "380",
        "name": "Ngô Dương Lợi",
        "cty": "ABC",
        "hotline": "45094448"
      },
      "customer": {
        "customerID": "380",
        "name": "Ngô Hữu An",
        "phone": "63890366",
        "address": "Hà Nội",
        "cmnd": "13029949"
      },
      "fileURL": "talk380.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "125s",
      "date": "16/10/2022",
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
              "_id": "62ebc0e08a312c984bbd64a9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64a8"
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
              "_id": "62ebc0e08a312c984bbd64ab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64aa"
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
              "_id": "62ebc0e08a312c984bbd64ad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64ac"
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
              "_id": "62ebc0e08a312c984bbd64af"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64ae"
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
              "_id": "62ebc0e08a312c984bbd64b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64b0"
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
              "_id": "62ebc0e08a312c984bbd64b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64b2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd648f",
    "audioID": 380,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 379,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6491"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6492"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6493"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6494"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6495"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6496"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6497"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6498"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6499"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd649a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd649b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6490"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 380,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd649d"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd649e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd649f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd64a0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd64a1"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd64a2"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64a3"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd64a4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64a5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd64a6"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd64a7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd649c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "381",
        "name": "Ngô An Lợi",
        "cty": "ABC",
        "hotline": "54717511"
      },
      "customer": {
        "customerID": "381",
        "name": "Phan Hải Dạ",
        "phone": "37097218",
        "address": "Hà Nội",
        "cmnd": "43245872"
      },
      "fileURL": "talk381.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "21s",
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
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd64ce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64cd"
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
              "_id": "62ebc0e08a312c984bbd64d0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64cf"
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
              "_id": "62ebc0e08a312c984bbd64d2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64d1"
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
              "_id": "62ebc0e08a312c984bbd64d4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64d3"
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
              "_id": "62ebc0e08a312c984bbd64d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64d5"
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
              "_id": "62ebc0e08a312c984bbd64d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64d7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd64b4",
    "audioID": 381,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 380,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64b6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64b7"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd64b8"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd64b9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64ba"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd64bb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd64bc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd64bd"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64be"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64bf"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64c0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd64b5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 381,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64c2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64c3"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd64c4"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd64c5"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd64c6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64c7"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd64c8"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd64c9"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd64ca"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd64cb"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd64cc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd64c1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "382",
        "name": "Phan Quốc Dạ",
        "cty": "ABC",
        "hotline": "14375112"
      },
      "customer": {
        "customerID": "382",
        "name": "Phan Hải Hồng",
        "phone": "93959141",
        "address": "Hà Nội",
        "cmnd": "20725490"
      },
      "fileURL": "talk382.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "147s",
      "date": "10/6/2022",
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
              "_id": "62ebc0e08a312c984bbd64f3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64f2"
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
              "_id": "62ebc0e08a312c984bbd64f5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64f4"
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
              "_id": "62ebc0e08a312c984bbd64f7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64f6"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd64f9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64f8"
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
              "_id": "62ebc0e08a312c984bbd64fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64fa"
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
              "_id": "62ebc0e08a312c984bbd64fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd64fc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd64d9",
    "audioID": 382,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 381,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd64db"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd64dc"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64dd"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64de"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd64df"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64e0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd64e1"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd64e2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd64e3"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64e4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd64e5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd64da"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 382,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64e7"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64e8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd64e9"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd64ea"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd64eb"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd64ec"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd64ed"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd64ee"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd64ef"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd64f0"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd64f1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd64e6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "383",
        "name": "Phạm Quốc Lợi",
        "cty": "ABC",
        "hotline": "21328177"
      },
      "customer": {
        "customerID": "383",
        "name": "Đặng Phương An",
        "phone": "87770756",
        "address": "Hà Nội",
        "cmnd": "64668508"
      },
      "fileURL": "talk383.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "242s",
      "date": "22/1/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6518"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6517"
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
              "_id": "62ebc0e08a312c984bbd651a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6519"
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
              "_id": "62ebc0e08a312c984bbd651c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd651b"
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
              "_id": "62ebc0e08a312c984bbd651e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd651d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6520"
            }
          ],
          "_id": "62ebc0e08a312c984bbd651f"
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
              "_id": "62ebc0e08a312c984bbd6522"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6521"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd64fe",
    "audioID": 383,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 382,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6500"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6501"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6502"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6503"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6504"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6505"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6506"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6507"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6508"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6509"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd650a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd64ff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 383,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd650c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd650d"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd650e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd650f"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6510"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6511"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6512"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6513"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6514"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6515"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6516"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd650b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "384",
        "name": "Phạm An Lợi",
        "cty": "ABC",
        "hotline": "51391078"
      },
      "customer": {
        "customerID": "384",
        "name": "Huỳnh Phương Quyền",
        "phone": "87510033",
        "address": "Hà Nội",
        "cmnd": "31749429"
      },
      "fileURL": "talk384.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "247s",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd653d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd653c"
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
              "_id": "62ebc0e08a312c984bbd653f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd653e"
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
              "_id": "62ebc0e08a312c984bbd6541"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6540"
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
              "_id": "62ebc0e08a312c984bbd6543"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6542"
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
              "_id": "62ebc0e08a312c984bbd6545"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6544"
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
              "_id": "62ebc0e08a312c984bbd6547"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6546"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6523",
    "audioID": 384,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 383,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6525"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6526"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6527"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6528"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6529"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd652a"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd652b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd652c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd652d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd652e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd652f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6524"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 384,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6531"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6532"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6533"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6534"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6535"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6536"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6537"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6538"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6539"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd653a"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd653b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6530"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "385",
        "name": "Trương Khánh Dạ",
        "cty": "ABC",
        "hotline": "44193088"
      },
      "customer": {
        "customerID": "385",
        "name": "Trần Khánh Lợi",
        "phone": "94766652",
        "address": "Hà Nội",
        "cmnd": "33908693"
      },
      "fileURL": "talk385.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "157s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6562"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6561"
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
              "_id": "62ebc0e08a312c984bbd6564"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6563"
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
              "_id": "62ebc0e08a312c984bbd6566"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6565"
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
              "_id": "62ebc0e08a312c984bbd6568"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6567"
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
              "_id": "62ebc0e08a312c984bbd656a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6569"
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
              "_id": "62ebc0e08a312c984bbd656c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd656b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6548",
    "audioID": 385,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 384,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd654a"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd654b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd654c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd654d"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd654e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd654f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6550"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6551"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6552"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6553"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6554"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6549"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 385,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6556"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6557"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6558"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6559"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd655a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd655b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd655c"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd655d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd655e"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd655f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6560"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6555"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "386",
        "name": "Nguyễn An Quyền",
        "cty": "ABC",
        "hotline": "86397645"
      },
      "customer": {
        "customerID": "386",
        "name": "Nguyễn Khánh Ánh",
        "phone": "33657520",
        "address": "Hà Nội",
        "cmnd": "90106028"
      },
      "fileURL": "talk386.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "560s",
      "date": "13/5/2022",
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
              "_id": "62ebc0e08a312c984bbd6587"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6586"
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
              "_id": "62ebc0e08a312c984bbd6589"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6588"
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
              "_id": "62ebc0e08a312c984bbd658b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd658a"
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
              "_id": "62ebc0e08a312c984bbd658d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd658c"
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
              "_id": "62ebc0e08a312c984bbd658f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd658e"
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
              "_id": "62ebc0e08a312c984bbd6591"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6590"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd656d",
    "audioID": 386,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 385,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd656f"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6570"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6571"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6572"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6573"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6574"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6575"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6576"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6577"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6578"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6579"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd656e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 386,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd657b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd657c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd657d"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd657e"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd657f"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6580"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6581"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6582"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6583"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6584"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6585"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd657a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "387",
        "name": "Huỳnh Dương Khánh",
        "cty": "ABC",
        "hotline": "35217911"
      },
      "customer": {
        "customerID": "387",
        "name": "Trương Quốc Cảnh",
        "phone": "54187846",
        "address": "Hà Nội",
        "cmnd": "29387167"
      },
      "fileURL": "talk387.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "92s",
      "date": "25/5/2022",
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
              "_id": "62ebc0e08a312c984bbd65ac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65ab"
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
              "_id": "62ebc0e08a312c984bbd65ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65ad"
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
              "_id": "62ebc0e08a312c984bbd65b0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65af"
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
              "_id": "62ebc0e08a312c984bbd65b2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65b1"
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
              "_id": "62ebc0e08a312c984bbd65b4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65b3"
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
              "_id": "62ebc0e08a312c984bbd65b6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65b5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6592",
    "audioID": 387,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 386,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6594"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6595"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6596"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6597"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6598"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6599"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd659a"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd659b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd659c"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd659d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd659e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6593"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 387,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65a0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65a1"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65a2"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd65a3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65a4"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65a5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd65a6"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65a7"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65a8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd65a9"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd65aa"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd659f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "388",
        "name": "Đặng Minh Ánh",
        "cty": "ABC",
        "hotline": "56249774"
      },
      "customer": {
        "customerID": "388",
        "name": "Nguyễn Hữu Lợi",
        "phone": "92621449",
        "address": "Hà Nội",
        "cmnd": "14910926"
      },
      "fileURL": "talk388.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "13s",
      "date": "6/5/2022",
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
              "_id": "62ebc0e08a312c984bbd65d1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65d0"
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
              "_id": "62ebc0e08a312c984bbd65d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65d2"
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
              "_id": "62ebc0e08a312c984bbd65d5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65d4"
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
              "_id": "62ebc0e08a312c984bbd65d7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65d6"
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
              "_id": "62ebc0e08a312c984bbd65d9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65d8"
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
              "_id": "62ebc0e08a312c984bbd65db"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65da"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd65b7",
    "audioID": 388,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 387,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65b9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65ba"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65bb"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65bc"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65bd"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65be"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd65bf"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65c0"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65c1"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65c2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65c3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd65b8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 388,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65c5"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65c6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd65c7"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd65c8"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65c9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65ca"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65cb"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd65cc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65cd"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65ce"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65cf"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd65c4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "389",
        "name": "Huỳnh Phương Khánh",
        "cty": "ABC",
        "hotline": "67949380"
      },
      "customer": {
        "customerID": "389",
        "name": "Bùi Quốc An",
        "phone": "54587612",
        "address": "Hà Nội",
        "cmnd": "31524967"
      },
      "fileURL": "talk389.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "279s",
      "date": "30/12/2022",
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
              "_id": "62ebc0e08a312c984bbd65f6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65f5"
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
              "_id": "62ebc0e08a312c984bbd65f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65f7"
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
              "_id": "62ebc0e08a312c984bbd65fa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65f9"
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
              "_id": "62ebc0e08a312c984bbd65fc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65fb"
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
              "_id": "62ebc0e08a312c984bbd65fe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65fd"
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
              "_id": "62ebc0e08a312c984bbd6600"
            }
          ],
          "_id": "62ebc0e08a312c984bbd65ff"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd65dc",
    "audioID": 389,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 388,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65de"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65df"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65e0"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65e1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd65e2"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65e3"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65e4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65e5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65e6"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd65e7"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65e8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd65dd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 389,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd65ea"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd65eb"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65ec"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd65ed"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65ee"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd65ef"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd65f0"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd65f1"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd65f2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd65f3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd65f4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd65e9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "390",
        "name": "Trương An Cảnh",
        "cty": "ABC",
        "hotline": "62575381"
      },
      "customer": {
        "customerID": "390",
        "name": "Bùi Văn Hồng",
        "phone": "56074846",
        "address": "Hà Nội",
        "cmnd": "76407857"
      },
      "fileURL": "talk390.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "111s",
      "date": "16/8/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd661b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd661a"
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
              "_id": "62ebc0e08a312c984bbd661d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd661c"
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
              "_id": "62ebc0e08a312c984bbd661f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd661e"
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
              "_id": "62ebc0e08a312c984bbd6621"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6620"
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
              "_id": "62ebc0e08a312c984bbd6623"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6622"
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
              "_id": "62ebc0e08a312c984bbd6625"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6624"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6601",
    "audioID": 390,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 389,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6603"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6604"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6605"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6606"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6607"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6608"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6609"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd660a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd660b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd660c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd660d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6602"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 390,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd660f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6610"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6611"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6612"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6613"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6614"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6615"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6616"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6617"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6618"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6619"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd660e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "391",
        "name": "Trần Khánh Dạ",
        "cty": "ABC",
        "hotline": "73727333"
      },
      "customer": {
        "customerID": "391",
        "name": "Ngô Dương Cảnh",
        "phone": "44436642",
        "address": "Hà Nội",
        "cmnd": "94571215"
      },
      "fileURL": "talk391.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "71s",
      "date": "24/4/2022",
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
              "_id": "62ebc0e08a312c984bbd6640"
            }
          ],
          "_id": "62ebc0e08a312c984bbd663f"
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
              "_id": "62ebc0e08a312c984bbd6642"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6641"
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
              "_id": "62ebc0e08a312c984bbd6644"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6643"
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
              "_id": "62ebc0e08a312c984bbd6646"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6645"
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
              "_id": "62ebc0e08a312c984bbd6648"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6647"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd664a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6649"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6626",
    "audioID": 391,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 390,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6628"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6629"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd662a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd662b"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd662c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd662d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd662e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd662f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6630"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6631"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6632"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6627"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 391,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6634"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6635"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6636"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6637"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6638"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6639"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd663a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd663b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd663c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd663d"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd663e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6633"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "392",
        "name": "Lê Dương Ánh",
        "cty": "ABC",
        "hotline": "58458992"
      },
      "customer": {
        "customerID": "392",
        "name": "Lê Phương Lợi",
        "phone": "78941758",
        "address": "Hà Nội",
        "cmnd": "20401827"
      },
      "fileURL": "talk392.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "22s",
      "date": "23/9/2022",
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
              "_id": "62ebc0e08a312c984bbd6665"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6664"
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
              "_id": "62ebc0e08a312c984bbd6667"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6666"
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
              "_id": "62ebc0e08a312c984bbd6669"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6668"
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
              "_id": "62ebc0e08a312c984bbd666b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd666a"
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
              "_id": "62ebc0e08a312c984bbd666d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd666c"
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
              "_id": "62ebc0e08a312c984bbd666f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd666e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd664b",
    "audioID": 392,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 391,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd664d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd664e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd664f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6650"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6651"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6652"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6653"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6654"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6655"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6656"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6657"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd664c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 392,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6659"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd665a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd665b"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd665c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd665d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd665e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd665f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6660"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6661"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6662"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6663"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6658"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "393",
        "name": "Nguyễn Quốc Dạ",
        "cty": "ABC",
        "hotline": "68008505"
      },
      "customer": {
        "customerID": "393",
        "name": "Phạm Văn An",
        "phone": "46670141",
        "address": "Hà Nội",
        "cmnd": "65999200"
      },
      "fileURL": "talk393.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "413s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd668a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6689"
        },
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
              "_id": "62ebc0e08a312c984bbd668c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd668b"
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
              "_id": "62ebc0e08a312c984bbd668e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd668d"
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
              "_id": "62ebc0e08a312c984bbd6690"
            }
          ],
          "_id": "62ebc0e08a312c984bbd668f"
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
              "_id": "62ebc0e08a312c984bbd6692"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6691"
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
              "_id": "62ebc0e08a312c984bbd6694"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6693"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6670",
    "audioID": 393,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 392,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6672"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6673"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6674"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6675"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6676"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6677"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6678"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6679"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd667a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd667b"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd667c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6671"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 393,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd667e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd667f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6680"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6681"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6682"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6683"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6684"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6685"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6686"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6687"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6688"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd667d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "394",
        "name": "Đặng Hải Ánh",
        "cty": "ABC",
        "hotline": "14429805"
      },
      "customer": {
        "customerID": "394",
        "name": "Huỳnh An An",
        "phone": "39646137",
        "address": "Hà Nội",
        "cmnd": "66830213"
      },
      "fileURL": "talk394.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "209s",
      "date": "4/8/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd66af"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66ae"
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
              "_id": "62ebc0e08a312c984bbd66b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66b0"
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
              "_id": "62ebc0e08a312c984bbd66b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66b2"
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
              "_id": "62ebc0e08a312c984bbd66b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66b4"
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
              "_id": "62ebc0e08a312c984bbd66b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66b6"
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
              "_id": "62ebc0e08a312c984bbd66b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66b8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6695",
    "audioID": 394,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 393,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6697"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6698"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6699"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd669a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd669b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd669c"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd669d"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd669e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd669f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66a0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd66a1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6696"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 394,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66a3"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66a4"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66a5"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd66a6"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd66a7"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66a8"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66a9"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd66aa"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66ab"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66ac"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66ad"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd66a2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "395",
        "name": "Đặng Phương Duy",
        "cty": "ABC",
        "hotline": "70859753"
      },
      "customer": {
        "customerID": "395",
        "name": "Phạm Hữu Thái Qúy",
        "phone": "13842104",
        "address": "Hà Nội",
        "cmnd": "35110685"
      },
      "fileURL": "talk395.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "528s",
      "date": "25/6/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd66d4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66d3"
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
              "_id": "62ebc0e08a312c984bbd66d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66d5"
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
              "_id": "62ebc0e08a312c984bbd66d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66d7"
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
              "_id": "62ebc0e08a312c984bbd66da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66d9"
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
              "_id": "62ebc0e08a312c984bbd66dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66db"
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
              "_id": "62ebc0e08a312c984bbd66de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66dd"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd66ba",
    "audioID": 395,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 394,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66bc"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd66bd"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66be"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66bf"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd66c0"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66c1"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66c2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66c3"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd66c4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd66c5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66c6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd66bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 395,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66c8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd66c9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66ca"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd66cb"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66cc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66cd"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66ce"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66cf"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd66d0"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66d1"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd66d2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd66c7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "396",
        "name": "Trần An Dạ",
        "cty": "ABC",
        "hotline": "72395523"
      },
      "customer": {
        "customerID": "396",
        "name": "Ngô Phương Duy",
        "phone": "64537538",
        "address": "Hà Nội",
        "cmnd": "39183463"
      },
      "fileURL": "talk396.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "251s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd66f9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66f8"
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
              "_id": "62ebc0e08a312c984bbd66fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66fa"
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
              "_id": "62ebc0e08a312c984bbd66fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66fc"
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
              "_id": "62ebc0e08a312c984bbd66ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd66fe"
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
              "_id": "62ebc0e08a312c984bbd6701"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6700"
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
              "_id": "62ebc0e08a312c984bbd6703"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6702"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd66df",
    "audioID": 396,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 395,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd66e1"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd66e2"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd66e3"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd66e4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd66e5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66e6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66e7"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd66e8"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66e9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd66ea"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd66eb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd66e0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 396,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66ed"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd66ee"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd66ef"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd66f0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd66f1"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd66f2"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66f3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd66f4"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66f5"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd66f6"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd66f7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd66ec"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "397",
        "name": "Nguyễn Hải Cảnh",
        "cty": "ABC",
        "hotline": "16349693"
      },
      "customer": {
        "customerID": "397",
        "name": "Lê Minh Duy",
        "phone": "97522789",
        "address": "Hà Nội",
        "cmnd": "50325156"
      },
      "fileURL": "talk397.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "256s",
      "date": "22/12/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd671e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd671d"
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
              "_id": "62ebc0e08a312c984bbd6720"
            }
          ],
          "_id": "62ebc0e08a312c984bbd671f"
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
              "_id": "62ebc0e08a312c984bbd6722"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6721"
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
              "_id": "62ebc0e08a312c984bbd6724"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6723"
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
              "_id": "62ebc0e08a312c984bbd6726"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6725"
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
              "_id": "62ebc0e08a312c984bbd6728"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6727"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6704",
    "audioID": 397,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 396,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6706"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6707"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6708"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6709"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd670a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd670b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd670c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd670d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd670e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd670f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6710"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6705"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 397,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6712"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6713"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6714"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6715"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6716"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6717"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6718"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6719"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd671a"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd671b"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd671c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6711"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "398",
        "name": "Nguyễn Quốc Ánh",
        "cty": "ABC",
        "hotline": "35784977"
      },
      "customer": {
        "customerID": "398",
        "name": "Trương Khánh Ánh",
        "phone": "46907330",
        "address": "Hà Nội",
        "cmnd": "21442227"
      },
      "fileURL": "talk398.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "522s",
      "date": "8/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd6743"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6742"
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
              "_id": "62ebc0e08a312c984bbd6745"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6744"
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
              "_id": "62ebc0e08a312c984bbd6747"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6746"
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
              "_id": "62ebc0e08a312c984bbd6749"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6748"
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
              "_id": "62ebc0e08a312c984bbd674b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd674a"
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
              "_id": "62ebc0e08a312c984bbd674d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd674c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6729",
    "audioID": 398,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 397,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd672b"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd672c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd672d"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd672e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd672f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6730"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6731"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6732"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6733"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6734"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6735"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd672a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 398,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6737"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6738"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6739"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd673a"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd673b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd673c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd673d"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd673e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd673f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6740"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6741"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6736"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "399",
        "name": "Trần Hữu Dạ",
        "cty": "ABC",
        "hotline": "31749294"
      },
      "customer": {
        "customerID": "399",
        "name": "Trương Quốc Duy",
        "phone": "79894178",
        "address": "Hà Nội",
        "cmnd": "44801513"
      },
      "fileURL": "talk399.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "537s",
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
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd6768"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6767"
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
              "_id": "62ebc0e08a312c984bbd676a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6769"
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
              "_id": "62ebc0e08a312c984bbd676c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd676b"
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
              "_id": "62ebc0e08a312c984bbd676e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd676d"
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
              "_id": "62ebc0e08a312c984bbd6770"
            }
          ],
          "_id": "62ebc0e08a312c984bbd676f"
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
              "_id": "62ebc0e08a312c984bbd6772"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6771"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd674e",
    "audioID": 399,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 398,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6750"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6751"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6752"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6753"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6754"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6755"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6756"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6757"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6758"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6759"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd675a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd674f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 399,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd675c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd675d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd675e"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd675f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6760"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6761"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6762"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6763"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6764"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6765"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6766"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd675b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "400",
        "name": "Nguyễn Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "73871049"
      },
      "customer": {
        "customerID": "400",
        "name": "Phan Hữu Hồng",
        "phone": "16731961",
        "address": "Hà Nội",
        "cmnd": "23030777"
      },
      "fileURL": "talk400.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "566s",
      "date": "25/8/2022",
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
              "_id": "62ebc0e08a312c984bbd678d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd678c"
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
              "_id": "62ebc0e08a312c984bbd678f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd678e"
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
              "_id": "62ebc0e08a312c984bbd6791"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6790"
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
              "_id": "62ebc0e08a312c984bbd6793"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6792"
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
              "_id": "62ebc0e08a312c984bbd6795"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6794"
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
              "_id": "62ebc0e08a312c984bbd6797"
            }
          ],
          "_id": "62ebc0e08a312c984bbd6796"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd6773",
    "audioID": 400,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 399,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd6775"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd6776"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd6777"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6778"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd6779"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd677a"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd677b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd677c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd677d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd677e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd677f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6774"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 400,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6781"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd6782"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6783"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd6784"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6785"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd6786"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd6787"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd6788"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd6789"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd678a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd678b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd6780"
      }
    ],
    "__v": 0
  }
]
export default FILE4