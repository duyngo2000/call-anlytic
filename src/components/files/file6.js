// 20220804202340
// http://localhost:5000/

const FILE6 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "501",
        "name": "Ngô Thị Dạ",
        "cty": "ABC",
        "hotline": "87910935"
      },
      "customer": {
        "customerID": "501",
        "name": "Bùi Dương Duy",
        "phone": "56667825",
        "address": "Hà Nội",
        "cmnd": "30237644"
      },
      "fileURL": "talk501.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "42s",
      "date": "10/3/2022",
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
              "_id": "62ebc0e08a312c984bbd7626"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7625"
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
              "_id": "62ebc0e08a312c984bbd7628"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7627"
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
              "_id": "62ebc0e08a312c984bbd762a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7629"
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
              "_id": "62ebc0e08a312c984bbd762c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd762b"
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
              "_id": "62ebc0e08a312c984bbd762e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd762d"
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
              "_id": "62ebc0e08a312c984bbd7630"
            }
          ],
          "_id": "62ebc0e08a312c984bbd762f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd760c",
    "audioID": 501,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 500,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd760e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd760f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7610"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7611"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7612"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7613"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7614"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7615"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7616"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7617"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7618"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd760d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 501,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd761a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd761b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd761c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd761d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd761e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd761f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7620"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7621"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7622"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7623"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7624"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7619"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "502",
        "name": "Phan Hải Duy",
        "cty": "ABC",
        "hotline": "13735415"
      },
      "customer": {
        "customerID": "502",
        "name": "Trần Khánh Quyền",
        "phone": "12477861",
        "address": "Hà Nội",
        "cmnd": "48895704"
      },
      "fileURL": "talk502.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "162s",
      "date": "17/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd764b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd764a"
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
              "_id": "62ebc0e08a312c984bbd764d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd764c"
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
              "_id": "62ebc0e08a312c984bbd764f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd764e"
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
              "_id": "62ebc0e08a312c984bbd7651"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7650"
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
              "_id": "62ebc0e08a312c984bbd7653"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7652"
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
              "_id": "62ebc0e08a312c984bbd7655"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7654"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7631",
    "audioID": 502,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 501,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7633"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7634"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7635"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7636"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7637"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7638"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7639"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd763a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd763b"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd763c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd763d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7632"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 502,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd763f"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7640"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7641"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7642"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7643"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7644"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7645"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7646"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7647"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7648"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7649"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd763e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "503",
        "name": "Trần Minh Hồng",
        "cty": "ABC",
        "hotline": "21353359"
      },
      "customer": {
        "customerID": "503",
        "name": "Trương Thị Ánh",
        "phone": "90719778",
        "address": "Hà Nội",
        "cmnd": "90518032"
      },
      "fileURL": "talk503.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "44s",
      "date": "24/11/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7670"
            }
          ],
          "_id": "62ebc0e08a312c984bbd766f"
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
              "_id": "62ebc0e08a312c984bbd7672"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7671"
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
              "_id": "62ebc0e08a312c984bbd7674"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7673"
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
              "_id": "62ebc0e08a312c984bbd7676"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7675"
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
              "_id": "62ebc0e08a312c984bbd7678"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7677"
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
              "_id": "62ebc0e08a312c984bbd767a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7679"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7656",
    "audioID": 503,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 502,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7658"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7659"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd765a"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd765b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd765c"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd765d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd765e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd765f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7660"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7661"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7662"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7657"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 503,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7664"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7665"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7666"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7667"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7668"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7669"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd766a"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd766b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd766c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd766d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd766e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7663"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "504",
        "name": "Trần Khánh Khánh",
        "cty": "ABC",
        "hotline": "59675237"
      },
      "customer": {
        "customerID": "504",
        "name": "Trần Hải Hồng",
        "phone": "26189390",
        "address": "Hà Nội",
        "cmnd": "63127559"
      },
      "fileURL": "talk504.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "431s",
      "date": "29/12/2022",
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
              "_id": "62ebc0e08a312c984bbd7695"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7694"
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
              "_id": "62ebc0e08a312c984bbd7697"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7696"
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
              "_id": "62ebc0e08a312c984bbd7699"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7698"
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
              "_id": "62ebc0e08a312c984bbd769b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd769a"
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
              "_id": "62ebc0e08a312c984bbd769d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd769c"
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
              "_id": "62ebc0e08a312c984bbd769f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd769e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd767b",
    "audioID": 504,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 503,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd767d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd767e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd767f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7680"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7681"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7682"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7683"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7684"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7685"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7686"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7687"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd767c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 504,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7689"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd768a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd768b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd768c"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd768d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd768e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd768f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7690"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7691"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7692"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7693"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7688"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "505",
        "name": "Trương Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "51440886"
      },
      "customer": {
        "customerID": "505",
        "name": "Phan An Lợi",
        "phone": "35775170",
        "address": "Hà Nội",
        "cmnd": "17763301"
      },
      "fileURL": "talk505.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "443s",
      "date": "25/3/2022",
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
              "_id": "62ebc0e08a312c984bbd76ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76b9"
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
              "_id": "62ebc0e08a312c984bbd76bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76bb"
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
              "_id": "62ebc0e08a312c984bbd76be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76bd"
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
              "_id": "62ebc0e08a312c984bbd76c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76bf"
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
              "_id": "62ebc0e08a312c984bbd76c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76c1"
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
              "_id": "62ebc0e08a312c984bbd76c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76c3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd76a0",
    "audioID": 505,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 504,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76a2"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76a3"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76a4"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76a5"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76a6"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd76a7"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd76a8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76a9"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76aa"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76ab"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76ac"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76a1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 505,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76ae"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76af"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd76b0"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd76b1"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76b2"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd76b3"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76b4"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76b5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd76b6"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76b7"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76b8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76ad"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "506",
        "name": "Bùi Hữu An",
        "cty": "ABC",
        "hotline": "31927452"
      },
      "customer": {
        "customerID": "506",
        "name": "Huỳnh Hải Lợi",
        "phone": "88551738",
        "address": "Hà Nội",
        "cmnd": "63442995"
      },
      "fileURL": "talk506.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "22s",
      "date": "5/8/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd76df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76de"
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
              "_id": "62ebc0e08a312c984bbd76e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76e0"
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
              "_id": "62ebc0e08a312c984bbd76e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76e2"
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
              "_id": "62ebc0e08a312c984bbd76e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76e4"
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
              "_id": "62ebc0e08a312c984bbd76e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76e6"
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
              "_id": "62ebc0e08a312c984bbd76e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd76e8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd76c5",
    "audioID": 506,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 505,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76c7"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76c8"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd76c9"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76ca"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76cb"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76cc"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76cd"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76ce"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76cf"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76d0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd76d1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76c6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 506,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76d3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76d4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76d5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76d6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76d7"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76d8"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76d9"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76da"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd76db"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76dc"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76dd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76d2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "507",
        "name": "Ngô Thị Cảnh",
        "cty": "ABC",
        "hotline": "73386907"
      },
      "customer": {
        "customerID": "507",
        "name": "Lê Dương Hồng",
        "phone": "10246635",
        "address": "Hà Nội",
        "cmnd": "12846410"
      },
      "fileURL": "talk507.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "564s",
      "date": "14/8/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7704"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7703"
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
              "_id": "62ebc0e08a312c984bbd7706"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7705"
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
              "_id": "62ebc0e08a312c984bbd7708"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7707"
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
              "_id": "62ebc0e08a312c984bbd770a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7709"
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
              "_id": "62ebc0e08a312c984bbd770c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd770b"
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
              "_id": "62ebc0e08a312c984bbd770e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd770d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd76ea",
    "audioID": 507,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 506,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76ec"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76ed"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76ee"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd76ef"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76f0"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd76f1"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76f2"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd76f3"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76f4"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd76f5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd76f6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76eb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 507,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76f8"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76f9"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76fa"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd76fb"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd76fc"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd76fd"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd76fe"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd76ff"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7700"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7701"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7702"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd76f7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "508",
        "name": "Lê An Ánh",
        "cty": "ABC",
        "hotline": "57553516"
      },
      "customer": {
        "customerID": "508",
        "name": "Phan Hải Duy",
        "phone": "91994742",
        "address": "Hà Nội",
        "cmnd": "34864959"
      },
      "fileURL": "talk508.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "70s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7729"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7728"
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
              "_id": "62ebc0e08a312c984bbd772b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd772a"
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
              "_id": "62ebc0e08a312c984bbd772d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd772c"
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
              "_id": "62ebc0e08a312c984bbd772f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd772e"
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
              "_id": "62ebc0e08a312c984bbd7731"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7730"
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
              "_id": "62ebc0e08a312c984bbd7733"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7732"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd770f",
    "audioID": 508,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 507,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7711"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7712"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7713"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7714"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7715"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7716"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7717"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7718"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7719"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd771a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd771b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7710"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 508,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd771d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd771e"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd771f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7720"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7721"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7722"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7723"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7724"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7725"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7726"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7727"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd771c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "509",
        "name": "Huỳnh Minh Duy",
        "cty": "ABC",
        "hotline": "53288909"
      },
      "customer": {
        "customerID": "509",
        "name": "Lê Quốc Lợi",
        "phone": "40137845",
        "address": "Hà Nội",
        "cmnd": "51060031"
      },
      "fileURL": "talk509.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "352s",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd774e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd774d"
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
              "_id": "62ebc0e08a312c984bbd7750"
            }
          ],
          "_id": "62ebc0e08a312c984bbd774f"
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
              "_id": "62ebc0e08a312c984bbd7752"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7751"
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
              "_id": "62ebc0e08a312c984bbd7754"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7753"
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
              "_id": "62ebc0e08a312c984bbd7756"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7755"
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
              "_id": "62ebc0e08a312c984bbd7758"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7757"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7734",
    "audioID": 509,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 508,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7736"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7737"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7738"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7739"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd773a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd773b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd773c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd773d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd773e"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd773f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7740"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7735"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 509,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7742"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7743"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7744"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7745"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7746"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7747"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7748"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7749"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd774a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd774b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd774c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7741"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "510",
        "name": "Phan Minh Quyền",
        "cty": "ABC",
        "hotline": "65064213"
      },
      "customer": {
        "customerID": "510",
        "name": "Trần Thị Quyền",
        "phone": "93555910",
        "address": "Hà Nội",
        "cmnd": "95260118"
      },
      "fileURL": "talk510.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "47s",
      "date": "3/9/2022",
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
              "_id": "62ebc0e08a312c984bbd7773"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7772"
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
              "_id": "62ebc0e08a312c984bbd7775"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7774"
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
              "_id": "62ebc0e08a312c984bbd7777"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7776"
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
              "_id": "62ebc0e08a312c984bbd7779"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7778"
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
              "_id": "62ebc0e08a312c984bbd777b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd777a"
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
              "_id": "62ebc0e08a312c984bbd777d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd777c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7759",
    "audioID": 510,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 509,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd775b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd775c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd775d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd775e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd775f"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7760"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7761"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7762"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7763"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7764"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7765"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd775a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 510,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7767"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7768"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7769"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd776a"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd776b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd776c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd776d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd776e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd776f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7770"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7771"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7766"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "511",
        "name": "Phan Phương Lợi",
        "cty": "ABC",
        "hotline": "29472786"
      },
      "customer": {
        "customerID": "511",
        "name": "Bùi Minh Quyền",
        "phone": "71378028",
        "address": "Hà Nội",
        "cmnd": "85961954"
      },
      "fileURL": "talk511.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "559s",
      "date": "19/1/2022",
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
              "_id": "62ebc0e08a312c984bbd7798"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7797"
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
              "_id": "62ebc0e08a312c984bbd779a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7799"
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
              "_id": "62ebc0e08a312c984bbd779c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd779b"
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
              "_id": "62ebc0e08a312c984bbd779e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd779d"
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
              "_id": "62ebc0e08a312c984bbd77a0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd779f"
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
              "_id": "62ebc0e08a312c984bbd77a2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77a1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd777e",
    "audioID": 511,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 510,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7780"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7781"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7782"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7783"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7784"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7785"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7786"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7787"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7788"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7789"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd778a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd777f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 511,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd778c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd778d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd778e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd778f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7790"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7791"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7792"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7793"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7794"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7795"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7796"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd778b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "512",
        "name": "Phan Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "13512755"
      },
      "customer": {
        "customerID": "512",
        "name": "Phạm Văn Dạ",
        "phone": "36839138",
        "address": "Hà Nội",
        "cmnd": "43015535"
      },
      "fileURL": "talk512.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "134s",
      "date": "17/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd77bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77bc"
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
              "_id": "62ebc0e08a312c984bbd77bf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77be"
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
              "_id": "62ebc0e08a312c984bbd77c1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77c0"
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
              "_id": "62ebc0e08a312c984bbd77c3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77c2"
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
              "_id": "62ebc0e08a312c984bbd77c5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77c4"
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
              "_id": "62ebc0e08a312c984bbd77c7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77c6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd77a3",
    "audioID": 512,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 511,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd77a5"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77a6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77a7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77a8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77a9"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77aa"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77ab"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77ac"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd77ad"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd77ae"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77af"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77a4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 512,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77b1"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77b2"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77b3"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77b4"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77b5"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77b6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd77b7"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77b8"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77b9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77ba"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77bb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77b0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "513",
        "name": "Lê Thị Khánh",
        "cty": "ABC",
        "hotline": "53824725"
      },
      "customer": {
        "customerID": "513",
        "name": "Huỳnh Dương Dạ",
        "phone": "79274457",
        "address": "Hà Nội",
        "cmnd": "12554837"
      },
      "fileURL": "talk513.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "490s",
      "date": "4/10/2022",
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
              "_id": "62ebc0e08a312c984bbd77e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77e1"
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
              "_id": "62ebc0e08a312c984bbd77e4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77e3"
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
              "_id": "62ebc0e08a312c984bbd77e6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77e5"
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
              "_id": "62ebc0e08a312c984bbd77e8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77e7"
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
              "_id": "62ebc0e08a312c984bbd77ea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77e9"
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
              "_id": "62ebc0e08a312c984bbd77ec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd77eb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd77c8",
    "audioID": 513,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 512,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77ca"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77cb"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd77cc"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77cd"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77ce"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77cf"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77d0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77d1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77d2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77d3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd77d4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77c9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 513,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77d6"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77d7"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77d8"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77d9"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77da"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77db"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77dc"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77dd"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd77de"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd77df"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77e0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77d5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "514",
        "name": "Lê Văn Khánh",
        "cty": "ABC",
        "hotline": "83608186"
      },
      "customer": {
        "customerID": "514",
        "name": "Nguyễn Phương Quyền",
        "phone": "36385944",
        "address": "Hà Nội",
        "cmnd": "99008726"
      },
      "fileURL": "talk514.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "55s",
      "date": "18/2/2022",
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
              "_id": "62ebc0e08a312c984bbd7807"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7806"
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
              "_id": "62ebc0e08a312c984bbd7809"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7808"
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
              "_id": "62ebc0e08a312c984bbd780b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd780a"
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
              "_id": "62ebc0e08a312c984bbd780d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd780c"
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
              "_id": "62ebc0e08a312c984bbd780f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd780e"
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
              "_id": "62ebc0e08a312c984bbd7811"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7810"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd77ed",
    "audioID": 514,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 513,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77ef"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77f0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd77f1"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77f2"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77f3"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77f4"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd77f5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77f6"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77f7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd77f8"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd77f9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77ee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 514,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd77fb"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd77fc"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd77fd"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd77fe"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd77ff"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7800"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7801"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7802"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7803"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7804"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7805"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd77fa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "515",
        "name": "Phan Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "98362487"
      },
      "customer": {
        "customerID": "515",
        "name": "Bùi Dương Quyền",
        "phone": "70602452",
        "address": "Hà Nội",
        "cmnd": "31115728"
      },
      "fileURL": "talk515.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "108s",
      "date": "3/7/2022",
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
              "_id": "62ebc0e08a312c984bbd782c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd782b"
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
              "_id": "62ebc0e08a312c984bbd782e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd782d"
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
              "_id": "62ebc0e08a312c984bbd7830"
            }
          ],
          "_id": "62ebc0e08a312c984bbd782f"
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
              "_id": "62ebc0e08a312c984bbd7832"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7831"
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
              "_id": "62ebc0e08a312c984bbd7834"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7833"
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
              "_id": "62ebc0e08a312c984bbd7836"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7835"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7812",
    "audioID": 515,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 514,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7814"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7815"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7816"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7817"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7818"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7819"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd781a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd781b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd781c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd781d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd781e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7813"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 515,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7820"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7821"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7822"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7823"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7824"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7825"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7826"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7827"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7828"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7829"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd782a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd781f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "516",
        "name": "Phan Minh An",
        "cty": "ABC",
        "hotline": "88589653"
      },
      "customer": {
        "customerID": "516",
        "name": "Bùi Phương Hồng",
        "phone": "39188516",
        "address": "Hà Nội",
        "cmnd": "53929589"
      },
      "fileURL": "talk516.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "522s",
      "date": "20/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7851"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7850"
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
              "_id": "62ebc0e08a312c984bbd7853"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7852"
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
              "_id": "62ebc0e08a312c984bbd7855"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7854"
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
              "_id": "62ebc0e08a312c984bbd7857"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7856"
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
              "_id": "62ebc0e08a312c984bbd7859"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7858"
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
              "_id": "62ebc0e08a312c984bbd785b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd785a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7837",
    "audioID": 516,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 515,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7839"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd783a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd783b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd783c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd783d"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd783e"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd783f"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7840"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7841"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7842"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7843"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7838"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 516,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7845"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7846"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7847"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7848"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7849"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd784a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd784b"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd784c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd784d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd784e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd784f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7844"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "517",
        "name": "Nguyễn Minh Hồng",
        "cty": "ABC",
        "hotline": "73884952"
      },
      "customer": {
        "customerID": "517",
        "name": "Đặng Dương Cảnh",
        "phone": "45644149",
        "address": "Hà Nội",
        "cmnd": "15270424"
      },
      "fileURL": "talk517.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "24s",
      "date": "10/4/2022",
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
              "_id": "62ebc0e08a312c984bbd7876"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7875"
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
              "_id": "62ebc0e08a312c984bbd7878"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7877"
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
              "_id": "62ebc0e08a312c984bbd787a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7879"
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
              "_id": "62ebc0e08a312c984bbd787c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd787b"
        },
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
              "_id": "62ebc0e08a312c984bbd787e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd787d"
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
              "_id": "62ebc0e08a312c984bbd7880"
            }
          ],
          "_id": "62ebc0e08a312c984bbd787f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd785c",
    "audioID": 517,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 516,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd785e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd785f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7860"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7861"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7862"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7863"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7864"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7865"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7866"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7867"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7868"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd785d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 517,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd786a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd786b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd786c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd786d"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd786e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd786f"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7870"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7871"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7872"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7873"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7874"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7869"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "518",
        "name": "Trần Văn Duy",
        "cty": "ABC",
        "hotline": "30815733"
      },
      "customer": {
        "customerID": "518",
        "name": "Phạm An Dạ",
        "phone": "70687921",
        "address": "Hà Nội",
        "cmnd": "59892829"
      },
      "fileURL": "talk518.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "333s",
      "date": "11/5/2022",
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
              "_id": "62ebc0e08a312c984bbd789b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd789a"
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
              "_id": "62ebc0e08a312c984bbd789d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd789c"
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
              "_id": "62ebc0e08a312c984bbd789f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd789e"
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
              "_id": "62ebc0e08a312c984bbd78a1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78a0"
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
              "_id": "62ebc0e08a312c984bbd78a3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78a2"
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
              "_id": "62ebc0e08a312c984bbd78a5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78a4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7881",
    "audioID": 518,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 517,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7883"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7884"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7885"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7886"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7887"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7888"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7889"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd788a"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd788b"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd788c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd788d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7882"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 518,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd788f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7890"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7891"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7892"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7893"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7894"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7895"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7896"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7897"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7898"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7899"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd788e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "519",
        "name": "Huỳnh An Ánh",
        "cty": "ABC",
        "hotline": "16488152"
      },
      "customer": {
        "customerID": "519",
        "name": "Trần Văn Duy",
        "phone": "97926703",
        "address": "Hà Nội",
        "cmnd": "96264642"
      },
      "fileURL": "talk519.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "546s",
      "date": "28/8/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd78c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78bf"
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
              "_id": "62ebc0e08a312c984bbd78c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78c1"
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
              "_id": "62ebc0e08a312c984bbd78c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78c3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd78c6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78c5"
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
              "_id": "62ebc0e08a312c984bbd78c8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78c7"
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
              "_id": "62ebc0e08a312c984bbd78ca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78c9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd78a6",
    "audioID": 519,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 518,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78a8"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78a9"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78aa"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd78ab"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd78ac"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78ad"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78ae"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78af"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78b0"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78b1"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78b2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78a7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 519,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78b4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78b5"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd78b6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd78b7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd78b8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd78b9"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78ba"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78bb"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78bc"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78bd"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78be"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78b3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "520",
        "name": "Phạm Quốc Duy",
        "cty": "ABC",
        "hotline": "52245081"
      },
      "customer": {
        "customerID": "520",
        "name": "Bùi Khánh Ánh",
        "phone": "18561620",
        "address": "Hà Nội",
        "cmnd": "86256031"
      },
      "fileURL": "talk520.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "549s",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd78e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78e4"
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
              "_id": "62ebc0e08a312c984bbd78e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78e6"
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
              "_id": "62ebc0e08a312c984bbd78e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78e8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd78eb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78ea"
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
              "_id": "62ebc0e08a312c984bbd78ed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78ec"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd78ef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd78ee"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd78cb",
    "audioID": 520,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 519,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78cd"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78ce"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78cf"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78d0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78d1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd78d2"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78d3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd78d4"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78d5"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd78d6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd78d7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78cc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 520,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78d9"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78da"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78db"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78dc"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd78dd"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd78de"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78df"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78e0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78e1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78e2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd78e3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78d8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "521",
        "name": "Nguyễn Phương Duy",
        "cty": "ABC",
        "hotline": "14153599"
      },
      "customer": {
        "customerID": "521",
        "name": "Bùi Hữu Cảnh",
        "phone": "78218778",
        "address": "Hà Nội",
        "cmnd": "18382621"
      },
      "fileURL": "talk521.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "190s",
      "date": "4/6/2022",
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
              "_id": "62ebc0e08a312c984bbd790a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7909"
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
              "_id": "62ebc0e08a312c984bbd790c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd790b"
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
              "_id": "62ebc0e08a312c984bbd790e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd790d"
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
              "_id": "62ebc0e08a312c984bbd7910"
            }
          ],
          "_id": "62ebc0e08a312c984bbd790f"
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
              "_id": "62ebc0e08a312c984bbd7912"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7911"
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
              "_id": "62ebc0e08a312c984bbd7914"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7913"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd78f0",
    "audioID": 521,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 520,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78f2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd78f3"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd78f4"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd78f5"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78f6"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78f7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd78f8"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78f9"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd78fa"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd78fb"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd78fc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78f1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 521,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd78fe"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd78ff"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7900"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7901"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7902"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7903"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7904"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7905"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7906"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7907"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7908"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd78fd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "522",
        "name": "Huỳnh Hải Ánh",
        "cty": "ABC",
        "hotline": "44700721"
      },
      "customer": {
        "customerID": "522",
        "name": "Phạm Hữu Cảnh",
        "phone": "67521497",
        "address": "Hà Nội",
        "cmnd": "84058066"
      },
      "fileURL": "talk522.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "365s",
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
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd792f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd792e"
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
              "_id": "62ebc0e08a312c984bbd7931"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7930"
        },
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
              "_id": "62ebc0e08a312c984bbd7933"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7932"
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
              "_id": "62ebc0e08a312c984bbd7935"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7934"
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
              "_id": "62ebc0e08a312c984bbd7937"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7936"
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
              "_id": "62ebc0e08a312c984bbd7939"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7938"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7915",
    "audioID": 522,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 521,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7917"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7918"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7919"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd791a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd791b"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd791c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd791d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd791e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd791f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7920"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7921"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7916"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 522,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7923"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7924"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7925"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7926"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7927"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7928"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7929"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd792a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd792b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd792c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd792d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7922"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "523",
        "name": "Huỳnh Dương Hồng",
        "cty": "ABC",
        "hotline": "62231717"
      },
      "customer": {
        "customerID": "523",
        "name": "Trương Hải Hồng",
        "phone": "36553477",
        "address": "Hà Nội",
        "cmnd": "16896483"
      },
      "fileURL": "talk523.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "197s",
      "date": "11/5/2022",
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
              "_id": "62ebc0e08a312c984bbd7954"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7953"
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
              "_id": "62ebc0e08a312c984bbd7956"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7955"
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
              "_id": "62ebc0e08a312c984bbd7958"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7957"
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
              "_id": "62ebc0e08a312c984bbd795a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7959"
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
              "_id": "62ebc0e08a312c984bbd795c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd795b"
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
              "_id": "62ebc0e08a312c984bbd795e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd795d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd793a",
    "audioID": 523,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 522,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd793c"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd793d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd793e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd793f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7940"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7941"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7942"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7943"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7944"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7945"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7946"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd793b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 523,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7948"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7949"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd794a"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd794b"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd794c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd794d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd794e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd794f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7950"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7951"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7952"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7947"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "524",
        "name": "Ngô Thị Lợi",
        "cty": "ABC",
        "hotline": "99400589"
      },
      "customer": {
        "customerID": "524",
        "name": "Lê Dương Lợi",
        "phone": "35832607",
        "address": "Hà Nội",
        "cmnd": "77208041"
      },
      "fileURL": "talk524.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "343s",
      "date": "26/11/2022",
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
              "_id": "62ebc0e08a312c984bbd7979"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7978"
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
              "_id": "62ebc0e08a312c984bbd797b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd797a"
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
              "_id": "62ebc0e08a312c984bbd797d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd797c"
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
              "_id": "62ebc0e08a312c984bbd797f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd797e"
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
              "_id": "62ebc0e08a312c984bbd7981"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7980"
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
              "_id": "62ebc0e08a312c984bbd7983"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7982"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd795f",
    "audioID": 524,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 523,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7961"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7962"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7963"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7964"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7965"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7966"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7967"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7968"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7969"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd796a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd796b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7960"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 524,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd796d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd796e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd796f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7970"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7971"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7972"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7973"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7974"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7975"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7976"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7977"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd796c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "525",
        "name": "Phạm Dương Khánh",
        "cty": "ABC",
        "hotline": "51616570"
      },
      "customer": {
        "customerID": "525",
        "name": "Bùi Dương Cảnh",
        "phone": "72071531",
        "address": "Hà Nội",
        "cmnd": "25640933"
      },
      "fileURL": "talk525.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "509s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd799e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd799d"
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
              "_id": "62ebc0e08a312c984bbd79a0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd799f"
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
              "_id": "62ebc0e08a312c984bbd79a2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79a1"
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
              "_id": "62ebc0e08a312c984bbd79a4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79a3"
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
              "_id": "62ebc0e08a312c984bbd79a6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79a5"
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
              "_id": "62ebc0e08a312c984bbd79a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79a7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7984",
    "audioID": 525,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 524,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7986"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7987"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7988"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7989"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd798a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd798b"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd798c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd798d"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd798e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd798f"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7990"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7985"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 525,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7992"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7993"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7994"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7995"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7996"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7997"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7998"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7999"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd799a"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd799b"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd799c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7991"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "526",
        "name": "Bùi Dương Hồng",
        "cty": "ABC",
        "hotline": "27652724"
      },
      "customer": {
        "customerID": "526",
        "name": "Lê Thị Thái Qúy",
        "phone": "77573003",
        "address": "Hà Nội",
        "cmnd": "96449214"
      },
      "fileURL": "talk526.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "299s",
      "date": "10/4/2022",
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
              "_id": "62ebc0e08a312c984bbd79c3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79c2"
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
              "_id": "62ebc0e08a312c984bbd79c5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79c4"
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
              "_id": "62ebc0e08a312c984bbd79c7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79c6"
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
              "_id": "62ebc0e08a312c984bbd79c9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79c8"
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
              "_id": "62ebc0e08a312c984bbd79cb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79ca"
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
              "_id": "62ebc0e08a312c984bbd79cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79cc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd79a9",
    "audioID": 526,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 525,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79ab"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79ac"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79ad"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79ae"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79af"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79b0"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79b1"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79b2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd79b3"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd79b4"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79b5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd79aa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 526,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79b7"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79b8"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79b9"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79ba"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79bb"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79bc"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79bd"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd79be"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd79bf"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79c0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79c1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd79b6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "527",
        "name": "Phạm Văn Cảnh",
        "cty": "ABC",
        "hotline": "91711194"
      },
      "customer": {
        "customerID": "527",
        "name": "Trần Hữu Cảnh",
        "phone": "15293120",
        "address": "Hà Nội",
        "cmnd": "88979818"
      },
      "fileURL": "talk527.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "422s",
      "date": "12/2/2022",
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
              "_id": "62ebc0e08a312c984bbd79e8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79e7"
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
              "_id": "62ebc0e08a312c984bbd79ea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79e9"
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
              "_id": "62ebc0e08a312c984bbd79ec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79eb"
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
              "_id": "62ebc0e08a312c984bbd79ee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79ed"
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
              "_id": "62ebc0e08a312c984bbd79f0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79ef"
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
              "_id": "62ebc0e08a312c984bbd79f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd79f1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd79ce",
    "audioID": 527,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 526,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79d0"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79d1"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79d2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79d3"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79d4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79d5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79d6"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd79d7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79d8"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd79d9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd79da"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd79cf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 527,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79dc"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79dd"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd79de"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd79df"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79e0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd79e1"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79e2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd79e3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79e4"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79e5"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79e6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd79db"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "528",
        "name": "Đặng An Dạ",
        "cty": "ABC",
        "hotline": "99535689"
      },
      "customer": {
        "customerID": "528",
        "name": "Lê Phương Duy",
        "phone": "88785119",
        "address": "Hà Nội",
        "cmnd": "23517800"
      },
      "fileURL": "talk528.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "298s",
      "date": "30/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7a0d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a0c"
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
              "_id": "62ebc0e08a312c984bbd7a0f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a0e"
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
              "_id": "62ebc0e08a312c984bbd7a11"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a10"
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
              "_id": "62ebc0e08a312c984bbd7a13"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a12"
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
              "_id": "62ebc0e08a312c984bbd7a15"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a14"
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
              "_id": "62ebc0e08a312c984bbd7a17"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a16"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd79f3",
    "audioID": 528,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 527,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79f5"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd79f6"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79f7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79f8"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd79f9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd79fa"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd79fb"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd79fc"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd79fd"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd79fe"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd79ff"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd79f4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 528,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a01"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a02"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a03"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a04"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a05"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a06"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a07"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a08"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a09"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a0a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a0b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a00"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "529",
        "name": "Phan An Dạ",
        "cty": "ABC",
        "hotline": "33188861"
      },
      "customer": {
        "customerID": "529",
        "name": "Đặng Văn Dạ",
        "phone": "37043334",
        "address": "Hà Nội",
        "cmnd": "74517940"
      },
      "fileURL": "talk529.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "586s",
      "date": "21/9/2022",
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
              "_id": "62ebc0e08a312c984bbd7a32"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a31"
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
              "_id": "62ebc0e08a312c984bbd7a34"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a33"
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
              "_id": "62ebc0e08a312c984bbd7a36"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a35"
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
              "_id": "62ebc0e08a312c984bbd7a38"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a37"
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
              "_id": "62ebc0e08a312c984bbd7a3a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a39"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7a3c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a3b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7a18",
    "audioID": 529,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 528,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a1a"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a1b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a1c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a1d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a1e"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a1f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a20"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a21"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7a22"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a23"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7a24"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a19"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 529,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a26"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a27"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a28"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a29"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a2a"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a2b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a2c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a2d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a2e"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a2f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a30"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a25"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "530",
        "name": "Phạm Khánh Lợi",
        "cty": "ABC",
        "hotline": "19661973"
      },
      "customer": {
        "customerID": "530",
        "name": "Bùi Phương Ánh",
        "phone": "67324803",
        "address": "Hà Nội",
        "cmnd": "18619043"
      },
      "fileURL": "talk530.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "576s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7a57"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a56"
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
              "_id": "62ebc0e08a312c984bbd7a59"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a58"
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
              "_id": "62ebc0e08a312c984bbd7a5b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a5a"
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
              "_id": "62ebc0e08a312c984bbd7a5d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a5c"
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
              "_id": "62ebc0e08a312c984bbd7a5f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a5e"
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
              "_id": "62ebc0e08a312c984bbd7a61"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a60"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7a3d",
    "audioID": 530,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 529,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a3f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a40"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a41"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a42"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a43"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a44"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7a45"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a46"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a47"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a48"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7a49"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a3e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 530,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a4b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a4c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a4d"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a4e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a4f"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a50"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a51"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a52"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a53"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a54"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a55"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a4a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "531",
        "name": "Nguyễn An Lợi",
        "cty": "ABC",
        "hotline": "59079368"
      },
      "customer": {
        "customerID": "531",
        "name": "Ngô Quốc Khánh",
        "phone": "83539749",
        "address": "Hà Nội",
        "cmnd": "24266633"
      },
      "fileURL": "talk531.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "559s",
      "date": "15/9/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7a7c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a7b"
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
              "_id": "62ebc0e08a312c984bbd7a7e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a7d"
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
              "_id": "62ebc0e08a312c984bbd7a80"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a7f"
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
              "_id": "62ebc0e08a312c984bbd7a82"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a81"
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
              "_id": "62ebc0e08a312c984bbd7a84"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a83"
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
              "_id": "62ebc0e08a312c984bbd7a86"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7a85"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7a62",
    "audioID": 531,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 530,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a64"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a65"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a66"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a67"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7a68"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a69"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a6a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a6b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a6c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a6d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a6e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a63"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 531,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a70"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a71"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a72"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a73"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a74"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a75"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7a76"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a77"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7a78"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a79"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a7a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a6f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "532",
        "name": "Bùi Thị Quyền",
        "cty": "ABC",
        "hotline": "48941929"
      },
      "customer": {
        "customerID": "532",
        "name": "Nguyễn An Thái Qúy",
        "phone": "43927718",
        "address": "Hà Nội",
        "cmnd": "26480120"
      },
      "fileURL": "talk532.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "538s",
      "date": "17/3/2022",
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
              "_id": "62ebc0e08a312c984bbd7aa1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aa0"
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
              "_id": "62ebc0e08a312c984bbd7aa3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aa2"
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
              "_id": "62ebc0e08a312c984bbd7aa5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aa4"
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
              "_id": "62ebc0e08a312c984bbd7aa7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aa6"
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
              "_id": "62ebc0e08a312c984bbd7aa9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aa8"
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
              "_id": "62ebc0e08a312c984bbd7aab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aaa"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7a87",
    "audioID": 532,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 531,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a89"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a8a"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a8b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a8c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a8d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a8e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a8f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a90"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7a91"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7a92"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a93"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a88"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 532,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a95"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a96"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a97"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a98"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a99"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7a9a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7a9b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7a9c"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7a9d"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7a9e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7a9f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7a94"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "533",
        "name": "Trương Hải Ánh",
        "cty": "ABC",
        "hotline": "61179170"
      },
      "customer": {
        "customerID": "533",
        "name": "Đặng Phương Thái Qúy",
        "phone": "34652146",
        "address": "Hà Nội",
        "cmnd": "91067389"
      },
      "fileURL": "talk533.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "597s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7ac6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ac5"
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
              "_id": "62ebc0e08a312c984bbd7ac8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ac7"
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
              "_id": "62ebc0e08a312c984bbd7aca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ac9"
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
              "_id": "62ebc0e08a312c984bbd7acc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7acb"
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
              "_id": "62ebc0e08a312c984bbd7ace"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7acd"
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
              "_id": "62ebc0e08a312c984bbd7ad0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7acf"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7aac",
    "audioID": 533,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 532,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7aae"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7aaf"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ab0"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ab1"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ab2"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ab3"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ab4"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ab5"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ab6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ab7"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ab8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7aad"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 533,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7aba"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7abb"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7abc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7abd"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7abe"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7abf"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ac0"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ac1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ac2"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ac3"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ac4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ab9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "534",
        "name": "Nguyễn Minh Hồng",
        "cty": "ABC",
        "hotline": "83581289"
      },
      "customer": {
        "customerID": "534",
        "name": "Ngô An Duy",
        "phone": "21747128",
        "address": "Hà Nội",
        "cmnd": "80458415"
      },
      "fileURL": "talk534.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "163s",
      "date": "3/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7aeb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aea"
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
              "_id": "62ebc0e08a312c984bbd7aed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aec"
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
              "_id": "62ebc0e08a312c984bbd7aef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7aee"
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
              "_id": "62ebc0e08a312c984bbd7af1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7af0"
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
              "_id": "62ebc0e08a312c984bbd7af3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7af2"
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
              "_id": "62ebc0e08a312c984bbd7af5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7af4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7ad1",
    "audioID": 534,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 533,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ad3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ad4"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ad5"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ad6"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ad7"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ad8"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ad9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ada"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7adb"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7adc"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7add"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ad2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 534,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7adf"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ae0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ae1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ae2"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ae3"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ae4"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ae5"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ae6"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ae7"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ae8"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ae9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ade"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "535",
        "name": "Lê Dương Lợi",
        "cty": "ABC",
        "hotline": "31682922"
      },
      "customer": {
        "customerID": "535",
        "name": "Đặng Hữu Thái Qúy",
        "phone": "47636438",
        "address": "Hà Nội",
        "cmnd": "22589490"
      },
      "fileURL": "talk535.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "591s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7b10"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b0f"
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
              "_id": "62ebc0e08a312c984bbd7b12"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b11"
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
              "_id": "62ebc0e08a312c984bbd7b14"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b13"
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
              "_id": "62ebc0e08a312c984bbd7b16"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b15"
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
              "_id": "62ebc0e08a312c984bbd7b18"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b17"
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
              "_id": "62ebc0e08a312c984bbd7b1a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b19"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7af6",
    "audioID": 535,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 534,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7af8"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7af9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7afa"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7afb"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7afc"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7afd"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7afe"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7aff"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b00"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b01"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b02"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7af7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 535,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b04"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b05"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b06"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b07"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b08"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b09"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7b0a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b0b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b0c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b0d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b0e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b03"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "536",
        "name": "Ngô Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "78157333"
      },
      "customer": {
        "customerID": "536",
        "name": "Bùi Dương Khánh",
        "phone": "13812148",
        "address": "Hà Nội",
        "cmnd": "91311698"
      },
      "fileURL": "talk536.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "295s",
      "date": "3/5/2022",
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
              "_id": "62ebc0e08a312c984bbd7b35"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b34"
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
              "_id": "62ebc0e08a312c984bbd7b37"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b36"
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
              "_id": "62ebc0e08a312c984bbd7b39"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b38"
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
              "_id": "62ebc0e08a312c984bbd7b3b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b3a"
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
              "_id": "62ebc0e08a312c984bbd7b3d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b3c"
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
              "_id": "62ebc0e08a312c984bbd7b3f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b3e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7b1b",
    "audioID": 536,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 535,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b1d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b1e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b1f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b20"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b21"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b22"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b23"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b24"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b25"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b26"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b27"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b1c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 536,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b29"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b2a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b2b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b2c"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b2d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b2e"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7b2f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b30"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b31"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b32"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b33"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b28"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "537",
        "name": "Huỳnh Minh Khánh",
        "cty": "ABC",
        "hotline": "61876453"
      },
      "customer": {
        "customerID": "537",
        "name": "Trương Quốc Quyền",
        "phone": "13415545",
        "address": "Hà Nội",
        "cmnd": "55651803"
      },
      "fileURL": "talk537.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "431s",
      "date": "20/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7b5a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b59"
        },
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
              "_id": "62ebc0e08a312c984bbd7b5c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b5b"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7b5e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b5d"
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
              "_id": "62ebc0e08a312c984bbd7b60"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b5f"
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
              "_id": "62ebc0e08a312c984bbd7b62"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b61"
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
              "_id": "62ebc0e08a312c984bbd7b64"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b63"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7b40",
    "audioID": 537,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 536,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b42"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b43"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b44"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b45"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b46"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b47"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b48"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b49"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b4a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b4b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b4c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b41"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 537,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b4e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b4f"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7b50"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b51"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b52"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b53"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b54"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b55"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b56"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b57"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b58"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b4d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "538",
        "name": "Huỳnh Thị Duy",
        "cty": "ABC",
        "hotline": "47732172"
      },
      "customer": {
        "customerID": "538",
        "name": "Trương Dương Thái Qúy",
        "phone": "52019917",
        "address": "Hà Nội",
        "cmnd": "17236231"
      },
      "fileURL": "talk538.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "504s",
      "date": "27/2/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7b7f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b7e"
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
              "_id": "62ebc0e08a312c984bbd7b81"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b80"
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
              "_id": "62ebc0e08a312c984bbd7b83"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b82"
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
              "_id": "62ebc0e08a312c984bbd7b85"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b84"
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
              "_id": "62ebc0e08a312c984bbd7b87"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b86"
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
              "_id": "62ebc0e08a312c984bbd7b89"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7b88"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7b65",
    "audioID": 538,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 537,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b67"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b68"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b69"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b6a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b6b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b6c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b6d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b6e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b6f"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b70"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b71"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b66"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 538,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b73"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b74"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b75"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b76"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b77"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b78"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b79"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b7a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b7b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7b7c"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b7d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b72"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "539",
        "name": "Trần Khánh An",
        "cty": "ABC",
        "hotline": "18726571"
      },
      "customer": {
        "customerID": "539",
        "name": "Bùi Thị Hồng",
        "phone": "78398523",
        "address": "Hà Nội",
        "cmnd": "37581522"
      },
      "fileURL": "talk539.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "61s",
      "date": "3/2/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7ba4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ba3"
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
              "_id": "62ebc0e08a312c984bbd7ba6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ba5"
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
              "_id": "62ebc0e08a312c984bbd7ba8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ba7"
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
              "_id": "62ebc0e08a312c984bbd7baa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ba9"
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
              "_id": "62ebc0e08a312c984bbd7bac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bab"
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
              "_id": "62ebc0e08a312c984bbd7bae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bad"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7b8a",
    "audioID": 539,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 538,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7b8c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b8d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b8e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b8f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b90"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b91"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b92"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7b93"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7b94"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b95"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b96"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b8b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 539,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b98"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7b99"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7b9a"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b9b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b9c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7b9d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7b9e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7b9f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ba0"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ba1"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ba2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7b97"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "540",
        "name": "Trương Thị Lợi",
        "cty": "ABC",
        "hotline": "38918523"
      },
      "customer": {
        "customerID": "540",
        "name": "Lê Phương An",
        "phone": "98900516",
        "address": "Hà Nội",
        "cmnd": "98607976"
      },
      "fileURL": "talk540.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "170s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7bc9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bc8"
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
              "_id": "62ebc0e08a312c984bbd7bcb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bca"
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
              "_id": "62ebc0e08a312c984bbd7bcd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bcc"
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
              "_id": "62ebc0e08a312c984bbd7bcf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bce"
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
              "_id": "62ebc0e08a312c984bbd7bd1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bd0"
        },
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
              "_id": "62ebc0e08a312c984bbd7bd3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bd2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7baf",
    "audioID": 540,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 539,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7bb1"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7bb2"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7bb3"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7bb4"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7bb5"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7bb6"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bb7"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7bb8"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7bb9"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bba"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7bbb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7bb0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 540,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7bbd"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bbe"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7bbf"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bc0"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7bc1"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7bc2"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7bc3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7bc4"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7bc5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7bc6"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7bc7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7bbc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "541",
        "name": "Ngô Minh Quyền",
        "cty": "ABC",
        "hotline": "37227887"
      },
      "customer": {
        "customerID": "541",
        "name": "Nguyễn Minh Khánh",
        "phone": "83986373",
        "address": "Hà Nội",
        "cmnd": "12511369"
      },
      "fileURL": "talk541.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "59s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7bee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bed"
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
              "_id": "62ebc0e08a312c984bbd7bf0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bef"
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
              "_id": "62ebc0e08a312c984bbd7bf2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bf1"
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
              "_id": "62ebc0e08a312c984bbd7bf4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bf3"
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
              "_id": "62ebc0e08a312c984bbd7bf6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bf5"
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
              "_id": "62ebc0e08a312c984bbd7bf8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7bf7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7bd4",
    "audioID": 541,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 540,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7bd6"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7bd7"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7bd8"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7bd9"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7bda"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7bdb"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7bdc"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bdd"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7bde"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7bdf"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7be0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7bd5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 541,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7be2"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7be3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7be4"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7be5"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7be6"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7be7"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7be8"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7be9"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7bea"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7beb"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7bec"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7be1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "542",
        "name": "Nguyễn Văn Hồng",
        "cty": "ABC",
        "hotline": "89238246"
      },
      "customer": {
        "customerID": "542",
        "name": "Huỳnh Văn Ánh",
        "phone": "55805369",
        "address": "Hà Nội",
        "cmnd": "54432786"
      },
      "fileURL": "talk542.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "595s",
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
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7c13"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c12"
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
              "_id": "62ebc0e08a312c984bbd7c15"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c14"
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
              "_id": "62ebc0e08a312c984bbd7c17"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c16"
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
              "_id": "62ebc0e08a312c984bbd7c19"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c18"
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
              "_id": "62ebc0e08a312c984bbd7c1b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c1a"
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
              "_id": "62ebc0e08a312c984bbd7c1d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c1c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7bf9",
    "audioID": 542,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 541,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7bfb"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7bfc"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7bfd"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7bfe"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7bff"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c00"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c01"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c02"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c03"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c04"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c05"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7bfa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 542,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c07"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c08"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c09"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c0a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c0b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c0c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c0d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c0e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c0f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c10"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c11"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c06"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "543",
        "name": "Phạm Văn An",
        "cty": "ABC",
        "hotline": "40192795"
      },
      "customer": {
        "customerID": "543",
        "name": "Trương Hữu Ánh",
        "phone": "28429932",
        "address": "Hà Nội",
        "cmnd": "28630974"
      },
      "fileURL": "talk543.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "375s",
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
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7c38"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c37"
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
              "_id": "62ebc0e08a312c984bbd7c3a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c39"
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
              "_id": "62ebc0e08a312c984bbd7c3c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c3b"
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
              "_id": "62ebc0e08a312c984bbd7c3e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c3d"
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
              "_id": "62ebc0e08a312c984bbd7c40"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c3f"
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
              "_id": "62ebc0e08a312c984bbd7c42"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c41"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7c1e",
    "audioID": 543,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 542,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c20"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c21"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c22"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c23"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c24"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c25"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c26"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7c27"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c28"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7c29"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c2a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c1f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 543,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c2c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c2d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c2e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c2f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c30"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c31"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c32"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c33"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c34"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c35"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7c36"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c2b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "544",
        "name": "Bùi Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "85319765"
      },
      "customer": {
        "customerID": "544",
        "name": "Phạm Thị Thái Qúy",
        "phone": "63157432",
        "address": "Hà Nội",
        "cmnd": "38791099"
      },
      "fileURL": "talk544.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "565s",
      "date": "3/6/2022",
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
              "_id": "62ebc0e08a312c984bbd7c5d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c5c"
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
              "_id": "62ebc0e08a312c984bbd7c5f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c5e"
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
              "_id": "62ebc0e08a312c984bbd7c61"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c60"
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
              "_id": "62ebc0e08a312c984bbd7c63"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c62"
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
              "_id": "62ebc0e08a312c984bbd7c65"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c64"
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
              "_id": "62ebc0e08a312c984bbd7c67"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c66"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7c43",
    "audioID": 544,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 543,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c45"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c46"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c47"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c48"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c49"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c4a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7c4b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c4c"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c4d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c4e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c4f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c44"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 544,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c51"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c52"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c53"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c54"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c55"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c56"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c57"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c58"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c59"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c5a"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c5b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c50"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "545",
        "name": "Huỳnh Phương Hồng",
        "cty": "ABC",
        "hotline": "64072810"
      },
      "customer": {
        "customerID": "545",
        "name": "Phạm Minh Cảnh",
        "phone": "46230435",
        "address": "Hà Nội",
        "cmnd": "91288063"
      },
      "fileURL": "talk545.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "281s",
      "date": "7/4/2022",
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
              "_id": "62ebc0e08a312c984bbd7c82"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c81"
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
              "_id": "62ebc0e08a312c984bbd7c84"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c83"
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
              "_id": "62ebc0e08a312c984bbd7c86"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c85"
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
              "_id": "62ebc0e08a312c984bbd7c88"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c87"
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
              "_id": "62ebc0e08a312c984bbd7c8a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c89"
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
              "_id": "62ebc0e08a312c984bbd7c8c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7c8b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7c68",
    "audioID": 545,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 544,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c6a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c6b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c6c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c6d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c6e"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c6f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c70"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c71"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c72"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c73"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c74"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c69"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 545,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7c76"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c77"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c78"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c79"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c7a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7c7b"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c7c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c7d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c7e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c7f"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c80"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c75"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "546",
        "name": "Nguyễn Phương An",
        "cty": "ABC",
        "hotline": "87412636"
      },
      "customer": {
        "customerID": "546",
        "name": "Phan An Lợi",
        "phone": "56053054",
        "address": "Hà Nội",
        "cmnd": "80993213"
      },
      "fileURL": "talk546.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "461s",
      "date": "17/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7ca7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ca6"
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
              "_id": "62ebc0e08a312c984bbd7ca9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ca8"
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
              "_id": "62ebc0e08a312c984bbd7cab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7caa"
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
              "_id": "62ebc0e08a312c984bbd7cad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cac"
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
              "_id": "62ebc0e08a312c984bbd7caf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cae"
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
              "_id": "62ebc0e08a312c984bbd7cb1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cb0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7c8d",
    "audioID": 546,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 545,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c8f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c90"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c91"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c92"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c93"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c94"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7c95"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7c96"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7c97"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7c98"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c99"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c8e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 546,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7c9b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c9c"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7c9d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7c9e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7c9f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ca0"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ca1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ca2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ca3"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ca4"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ca5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7c9a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "547",
        "name": "Trương Quốc Quyền",
        "cty": "ABC",
        "hotline": "32052691"
      },
      "customer": {
        "customerID": "547",
        "name": "Trần Minh Duy",
        "phone": "92612489",
        "address": "Hà Nội",
        "cmnd": "45823369"
      },
      "fileURL": "talk547.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "502s",
      "date": "24/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd7ccc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ccb"
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
              "_id": "62ebc0e08a312c984bbd7cce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ccd"
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
              "_id": "62ebc0e08a312c984bbd7cd0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ccf"
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
              "_id": "62ebc0e08a312c984bbd7cd2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cd1"
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
              "_id": "62ebc0e08a312c984bbd7cd4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cd3"
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
              "_id": "62ebc0e08a312c984bbd7cd6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cd5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7cb2",
    "audioID": 547,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 546,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cb4"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cb5"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cb6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7cb7"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7cb8"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cb9"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cba"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7cbb"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7cbc"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7cbd"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cbe"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7cb3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 547,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7cc0"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7cc1"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cc2"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7cc3"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7cc4"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7cc5"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cc6"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cc7"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7cc8"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7cc9"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7cca"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7cbf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "548",
        "name": "Trương Thị Dạ",
        "cty": "ABC",
        "hotline": "83449650"
      },
      "customer": {
        "customerID": "548",
        "name": "Phan Minh Khánh",
        "phone": "18687623",
        "address": "Hà Nội",
        "cmnd": "90056048"
      },
      "fileURL": "talk548.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "68s",
      "date": "7/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7cf1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cf0"
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
              "_id": "62ebc0e08a312c984bbd7cf3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cf2"
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
              "_id": "62ebc0e08a312c984bbd7cf5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cf4"
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
              "_id": "62ebc0e08a312c984bbd7cf7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cf6"
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
              "_id": "62ebc0e08a312c984bbd7cf9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cf8"
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
              "_id": "62ebc0e08a312c984bbd7cfb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7cfa"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7cd7",
    "audioID": 548,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 547,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7cd9"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7cda"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cdb"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7cdc"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cdd"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7cde"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7cdf"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ce0"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ce1"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ce2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ce3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7cd8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 548,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ce5"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ce6"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ce7"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ce8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ce9"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7cea"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ceb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cec"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ced"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7cee"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7cef"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ce4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "549",
        "name": "Trần An Ánh",
        "cty": "ABC",
        "hotline": "88731538"
      },
      "customer": {
        "customerID": "549",
        "name": "Nguyễn Khánh Dạ",
        "phone": "78033032",
        "address": "Hà Nội",
        "cmnd": "76991533"
      },
      "fileURL": "talk549.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "26s",
      "date": "22/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7d16"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d15"
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
              "_id": "62ebc0e08a312c984bbd7d18"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d17"
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
              "_id": "62ebc0e08a312c984bbd7d1a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d19"
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
              "_id": "62ebc0e08a312c984bbd7d1c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d1b"
        },
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
              "_id": "62ebc0e08a312c984bbd7d1e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d1d"
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
              "_id": "62ebc0e08a312c984bbd7d20"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d1f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7cfc",
    "audioID": 549,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 548,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7cfe"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7cff"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d00"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d01"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d02"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d03"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d04"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d05"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d06"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d07"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d08"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7cfd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 549,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d0a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d0b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d0c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d0d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d0e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d0f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d10"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d11"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d12"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d13"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d14"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d09"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "550",
        "name": "Nguyễn Minh Lợi",
        "cty": "ABC",
        "hotline": "94802186"
      },
      "customer": {
        "customerID": "550",
        "name": "Nguyễn Dương Quyền",
        "phone": "28460996",
        "address": "Hà Nội",
        "cmnd": "70724831"
      },
      "fileURL": "talk550.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "377s",
      "date": "2/2/2022",
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
              "_id": "62ebc0e08a312c984bbd7d3b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d3a"
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
              "_id": "62ebc0e08a312c984bbd7d3d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d3c"
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
              "_id": "62ebc0e08a312c984bbd7d3f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d3e"
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
              "_id": "62ebc0e08a312c984bbd7d41"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d40"
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
              "_id": "62ebc0e08a312c984bbd7d43"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d42"
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
              "_id": "62ebc0e08a312c984bbd7d45"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d44"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7d21",
    "audioID": 550,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 549,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d23"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d24"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d25"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d26"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d27"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d28"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d29"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d2a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d2b"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d2c"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d2d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d22"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 550,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d2f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d30"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d31"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d32"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d33"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d34"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d35"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d36"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d37"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d38"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d39"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d2e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "551",
        "name": "Nguyễn Dương Hồng",
        "cty": "ABC",
        "hotline": "46228773"
      },
      "customer": {
        "customerID": "551",
        "name": "Bùi Thị An",
        "phone": "43008132",
        "address": "Hà Nội",
        "cmnd": "15541620"
      },
      "fileURL": "talk551.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "472s",
      "date": "22/5/2022",
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
              "_id": "62ebc0e08a312c984bbd7d60"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d5f"
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
              "_id": "62ebc0e08a312c984bbd7d62"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d61"
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
              "_id": "62ebc0e08a312c984bbd7d64"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d63"
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
              "_id": "62ebc0e08a312c984bbd7d66"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d65"
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
              "_id": "62ebc0e08a312c984bbd7d68"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d67"
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
              "_id": "62ebc0e08a312c984bbd7d6a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d69"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7d46",
    "audioID": 551,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 550,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d48"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d49"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d4a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d4b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d4c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d4d"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d4e"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d4f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d50"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d51"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d52"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d47"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 551,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d54"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d55"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d56"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d57"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d58"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d59"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d5a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d5b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d5c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d5d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d5e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d53"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "552",
        "name": "Bùi An Hồng",
        "cty": "ABC",
        "hotline": "31221890"
      },
      "customer": {
        "customerID": "552",
        "name": "Bùi Thị Khánh",
        "phone": "65240258",
        "address": "Hà Nội",
        "cmnd": "87578368"
      },
      "fileURL": "talk552.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "260s",
      "date": "19/1/2022",
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
              "_id": "62ebc0e08a312c984bbd7d85"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d84"
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
              "_id": "62ebc0e08a312c984bbd7d87"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d86"
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
              "_id": "62ebc0e08a312c984bbd7d89"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d88"
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
              "_id": "62ebc0e08a312c984bbd7d8b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d8a"
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
              "_id": "62ebc0e08a312c984bbd7d8d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d8c"
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
              "_id": "62ebc0e08a312c984bbd7d8f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7d8e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7d6b",
    "audioID": 552,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 551,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d6d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d6e"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d6f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d70"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d71"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d72"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d73"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d74"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d75"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d76"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d77"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d6c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 552,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d79"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d7a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d7b"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7d7c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d7d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d7e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d7f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d80"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d81"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d82"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d83"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d78"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "553",
        "name": "Nguyễn Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "75102453"
      },
      "customer": {
        "customerID": "553",
        "name": "Lê Phương Quyền",
        "phone": "98988655",
        "address": "Hà Nội",
        "cmnd": "36037089"
      },
      "fileURL": "talk553.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "216s",
      "date": "3/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7daa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7da9"
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
              "_id": "62ebc0e08a312c984bbd7dac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dab"
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
              "_id": "62ebc0e08a312c984bbd7dae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dad"
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
              "_id": "62ebc0e08a312c984bbd7db0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7daf"
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
              "_id": "62ebc0e08a312c984bbd7db2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7db1"
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
              "_id": "62ebc0e08a312c984bbd7db4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7db3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7d90",
    "audioID": 553,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 552,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7d92"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d93"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7d94"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7d95"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d96"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7d97"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7d98"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7d99"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7d9a"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d9b"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d9c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d91"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 553,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7d9e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7d9f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7da0"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7da1"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7da2"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7da3"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7da4"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7da5"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7da6"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7da7"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7da8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7d9d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "554",
        "name": "Phạm An Duy",
        "cty": "ABC",
        "hotline": "64184925"
      },
      "customer": {
        "customerID": "554",
        "name": "Huỳnh Hải Ánh",
        "phone": "45505845",
        "address": "Hà Nội",
        "cmnd": "79477452"
      },
      "fileURL": "talk554.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "114s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7dcf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dce"
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
              "_id": "62ebc0e08a312c984bbd7dd1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dd0"
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
              "_id": "62ebc0e08a312c984bbd7dd3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dd2"
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
              "_id": "62ebc0e08a312c984bbd7dd5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dd4"
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
              "_id": "62ebc0e08a312c984bbd7dd7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dd6"
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
              "_id": "62ebc0e08a312c984bbd7dd9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dd8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7db5",
    "audioID": 554,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 553,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7db7"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7db8"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7db9"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7dba"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7dbb"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7dbc"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7dbd"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7dbe"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7dbf"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7dc0"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7dc1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7db6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 554,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7dc3"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7dc4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7dc5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7dc6"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7dc7"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7dc8"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7dc9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7dca"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7dcb"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7dcc"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7dcd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7dc2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "555",
        "name": "Nguyễn Hải Dạ",
        "cty": "ABC",
        "hotline": "79846323"
      },
      "customer": {
        "customerID": "555",
        "name": "Trương An An",
        "phone": "19179957",
        "address": "Hà Nội",
        "cmnd": "92570804"
      },
      "fileURL": "talk555.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "590s",
      "date": "13/8/2022",
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
              "_id": "62ebc0e08a312c984bbd7df4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7df3"
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
              "_id": "62ebc0e08a312c984bbd7df6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7df5"
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
              "_id": "62ebc0e08a312c984bbd7df8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7df7"
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
              "_id": "62ebc0e08a312c984bbd7dfa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7df9"
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
              "_id": "62ebc0e08a312c984bbd7dfc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dfb"
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
              "_id": "62ebc0e08a312c984bbd7dfe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7dfd"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7dda",
    "audioID": 555,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 554,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ddc"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ddd"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7dde"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ddf"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7de0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7de1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7de2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7de3"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7de4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7de5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7de6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ddb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 555,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7de8"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7de9"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7dea"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7deb"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7dec"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ded"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7dee"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7def"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7df0"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7df1"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7df2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7de7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "556",
        "name": "Trần Phương Quyền",
        "cty": "ABC",
        "hotline": "88289365"
      },
      "customer": {
        "customerID": "556",
        "name": "Lê Phương Quyền",
        "phone": "71224732",
        "address": "Hà Nội",
        "cmnd": "42148817"
      },
      "fileURL": "talk556.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "582s",
      "date": "7/11/2022",
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
              "_id": "62ebc0e08a312c984bbd7e19"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e18"
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
              "_id": "62ebc0e08a312c984bbd7e1b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e1a"
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
              "_id": "62ebc0e08a312c984bbd7e1d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e1c"
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
              "_id": "62ebc0e08a312c984bbd7e1f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e1e"
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
              "_id": "62ebc0e08a312c984bbd7e21"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e20"
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
              "_id": "62ebc0e08a312c984bbd7e23"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e22"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7dff",
    "audioID": 556,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 555,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e01"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e02"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e03"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e04"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e05"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e06"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e07"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e08"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e09"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e0a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e0b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e00"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 556,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e0d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e0e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e0f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e10"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e11"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e12"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e13"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e14"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e15"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e16"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e17"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e0c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "557",
        "name": "Trương Hữu Lợi",
        "cty": "ABC",
        "hotline": "87203483"
      },
      "customer": {
        "customerID": "557",
        "name": "Phạm Hải An",
        "phone": "62067553",
        "address": "Hà Nội",
        "cmnd": "66897721"
      },
      "fileURL": "talk557.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "192s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7e3e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e3d"
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
              "_id": "62ebc0e08a312c984bbd7e40"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e3f"
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
              "_id": "62ebc0e08a312c984bbd7e42"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e41"
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
              "_id": "62ebc0e08a312c984bbd7e44"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e43"
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
              "_id": "62ebc0e08a312c984bbd7e46"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e45"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7e48"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e47"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7e24",
    "audioID": 557,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 556,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e26"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e27"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e28"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e29"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e2a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e2b"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e2c"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e2d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e2e"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e2f"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e30"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e25"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 557,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e32"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e33"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e34"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e35"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e36"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e37"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e38"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e39"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e3a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e3b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e3c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e31"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "558",
        "name": "Ngô Phương Lợi",
        "cty": "ABC",
        "hotline": "79893437"
      },
      "customer": {
        "customerID": "558",
        "name": "Trần Phương An",
        "phone": "30375605",
        "address": "Hà Nội",
        "cmnd": "94556005"
      },
      "fileURL": "talk558.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "174s",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7e63"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e62"
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
              "_id": "62ebc0e08a312c984bbd7e65"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e64"
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
              "_id": "62ebc0e08a312c984bbd7e67"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e66"
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
              "_id": "62ebc0e08a312c984bbd7e69"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e68"
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
              "_id": "62ebc0e08a312c984bbd7e6b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e6a"
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
              "_id": "62ebc0e08a312c984bbd7e6d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e6c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7e49",
    "audioID": 558,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 557,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e4b"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e4c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e4d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e4e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e4f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e50"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e51"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e52"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e53"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e54"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e55"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e4a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 558,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e57"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e58"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e59"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e5a"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e5b"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e5c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e5d"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e5e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e5f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e60"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e61"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e56"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "559",
        "name": "Huỳnh Văn Duy",
        "cty": "ABC",
        "hotline": "67678971"
      },
      "customer": {
        "customerID": "559",
        "name": "Lê Hữu Lợi",
        "phone": "42043953",
        "address": "Hà Nội",
        "cmnd": "32423279"
      },
      "fileURL": "talk559.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "313s",
      "date": "13/5/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd7e88"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e87"
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
              "_id": "62ebc0e08a312c984bbd7e8a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e89"
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
              "_id": "62ebc0e08a312c984bbd7e8c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e8b"
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
              "_id": "62ebc0e08a312c984bbd7e8e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e8d"
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
              "_id": "62ebc0e08a312c984bbd7e90"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e8f"
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
              "_id": "62ebc0e08a312c984bbd7e92"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7e91"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7e6e",
    "audioID": 559,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 558,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e70"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e71"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e72"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e73"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e74"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e75"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e76"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e77"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e78"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e79"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7e7a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e6f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 559,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e7c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e7d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e7e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e7f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e80"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e81"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e82"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7e83"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e84"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7e85"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e86"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e7b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "560",
        "name": "Huỳnh An Lợi",
        "cty": "ABC",
        "hotline": "57501103"
      },
      "customer": {
        "customerID": "560",
        "name": "Trần Hữu Dạ",
        "phone": "58675104",
        "address": "Hà Nội",
        "cmnd": "54494661"
      },
      "fileURL": "talk560.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "138s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7ead"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eac"
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
              "_id": "62ebc0e08a312c984bbd7eaf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eae"
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
              "_id": "62ebc0e08a312c984bbd7eb1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eb0"
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
              "_id": "62ebc0e08a312c984bbd7eb3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eb2"
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
              "_id": "62ebc0e08a312c984bbd7eb5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eb4"
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
              "_id": "62ebc0e08a312c984bbd7eb7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7eb6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7e93",
    "audioID": 560,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 559,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7e95"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e96"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e97"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e98"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7e99"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7e9a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e9b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7e9c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7e9d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7e9e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7e9f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7e94"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 560,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ea1"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ea2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ea3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ea4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ea5"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ea6"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ea7"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ea8"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ea9"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7eaa"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7eab"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ea0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "561",
        "name": "Phan Văn Ánh",
        "cty": "ABC",
        "hotline": "10268361"
      },
      "customer": {
        "customerID": "561",
        "name": "Trương Thị Cảnh",
        "phone": "83152980",
        "address": "Hà Nội",
        "cmnd": "91678397"
      },
      "fileURL": "talk561.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "285s",
      "date": "21/6/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7ed2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ed1"
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
              "_id": "62ebc0e08a312c984bbd7ed4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ed3"
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
              "_id": "62ebc0e08a312c984bbd7ed6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ed5"
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
              "_id": "62ebc0e08a312c984bbd7ed8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ed7"
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
              "_id": "62ebc0e08a312c984bbd7eda"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ed9"
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
              "_id": "62ebc0e08a312c984bbd7edc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7edb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7eb8",
    "audioID": 561,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 560,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7eba"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ebb"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ebc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ebd"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ebe"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ebf"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ec0"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ec1"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ec2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ec3"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ec4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7eb9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 561,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ec6"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ec7"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ec8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ec9"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7eca"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ecb"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ecc"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ecd"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ece"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ecf"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ed0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ec5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "562",
        "name": "Trần Quốc Quyền",
        "cty": "ABC",
        "hotline": "85538323"
      },
      "customer": {
        "customerID": "562",
        "name": "Ngô Khánh Ánh",
        "phone": "56461111",
        "address": "Hà Nội",
        "cmnd": "51393504"
      },
      "fileURL": "talk562.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "284s",
      "date": "20/1/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7ef7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ef6"
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
              "_id": "62ebc0e08a312c984bbd7ef9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ef8"
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
              "_id": "62ebc0e08a312c984bbd7efb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7efa"
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
              "_id": "62ebc0e08a312c984bbd7efd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7efc"
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
              "_id": "62ebc0e08a312c984bbd7eff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7efe"
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
              "_id": "62ebc0e08a312c984bbd7f01"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f00"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7edd",
    "audioID": 562,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 561,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7edf"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ee0"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ee1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ee2"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ee3"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ee4"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ee5"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ee6"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ee7"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ee8"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7ee9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7ede"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 562,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7eeb"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7eec"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7eed"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7eee"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7eef"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ef0"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ef1"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7ef2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ef3"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ef4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ef5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7eea"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "563",
        "name": "Đặng Minh Khánh",
        "cty": "ABC",
        "hotline": "79839774"
      },
      "customer": {
        "customerID": "563",
        "name": "Lê Dương Dạ",
        "phone": "57840060",
        "address": "Hà Nội",
        "cmnd": "16193932"
      },
      "fileURL": "talk563.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "511s",
      "date": "13/11/2022",
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
              "_id": "62ebc0e08a312c984bbd7f1c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f1b"
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
              "_id": "62ebc0e08a312c984bbd7f1e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f1d"
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
              "_id": "62ebc0e08a312c984bbd7f20"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f1f"
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
              "_id": "62ebc0e08a312c984bbd7f22"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f21"
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
              "_id": "62ebc0e08a312c984bbd7f24"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f23"
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
              "_id": "62ebc0e08a312c984bbd7f26"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f25"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7f02",
    "audioID": 563,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 562,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f04"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f05"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f06"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f07"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f08"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f09"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f0a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f0b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f0c"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f0d"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f0e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f03"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 563,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f10"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7f11"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f12"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f13"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f14"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f15"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f16"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f17"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f18"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f19"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f1a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f0f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "564",
        "name": "Ngô Minh Dạ",
        "cty": "ABC",
        "hotline": "50445552"
      },
      "customer": {
        "customerID": "564",
        "name": "Ngô Phương Dạ",
        "phone": "62986850",
        "address": "Hà Nội",
        "cmnd": "50646271"
      },
      "fileURL": "talk564.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "470s",
      "date": "15/1/2022",
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
              "_id": "62ebc0e08a312c984bbd7f41"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f40"
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
              "_id": "62ebc0e08a312c984bbd7f43"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f42"
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
              "_id": "62ebc0e08a312c984bbd7f45"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f44"
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
              "_id": "62ebc0e08a312c984bbd7f47"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f46"
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
              "_id": "62ebc0e08a312c984bbd7f49"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f48"
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
              "_id": "62ebc0e08a312c984bbd7f4b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f4a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7f27",
    "audioID": 564,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 563,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f29"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f2a"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f2b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f2c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f2d"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f2e"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7f2f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f30"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f31"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f32"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f33"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f28"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 564,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f35"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f36"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f37"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f38"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f39"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f3a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7f3b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f3c"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f3d"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f3e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f3f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f34"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "565",
        "name": "Bùi Dương Cảnh",
        "cty": "ABC",
        "hotline": "38888482"
      },
      "customer": {
        "customerID": "565",
        "name": "Bùi Minh Hồng",
        "phone": "34129310",
        "address": "Hà Nội",
        "cmnd": "99164061"
      },
      "fileURL": "talk565.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "318s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7f66"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f65"
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
              "_id": "62ebc0e08a312c984bbd7f68"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f67"
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
              "_id": "62ebc0e08a312c984bbd7f6a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f69"
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
              "_id": "62ebc0e08a312c984bbd7f6c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f6b"
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
              "_id": "62ebc0e08a312c984bbd7f6e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f6d"
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
              "_id": "62ebc0e08a312c984bbd7f70"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f6f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7f4c",
    "audioID": 565,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 564,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f4e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f4f"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f50"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f51"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f52"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f53"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f54"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f55"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f56"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f57"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f58"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f4d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 565,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f5a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f5b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f5c"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f5d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f5e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f5f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f60"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f61"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f62"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f63"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f64"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f59"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "566",
        "name": "Trương Phương Cảnh",
        "cty": "ABC",
        "hotline": "26540099"
      },
      "customer": {
        "customerID": "566",
        "name": "Nguyễn Hữu Cảnh",
        "phone": "39691289",
        "address": "Hà Nội",
        "cmnd": "32331912"
      },
      "fileURL": "talk566.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "333s",
      "date": "14/4/2022",
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
              "_id": "62ebc0e08a312c984bbd7f8b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f8a"
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
              "_id": "62ebc0e08a312c984bbd7f8d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f8c"
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
              "_id": "62ebc0e08a312c984bbd7f8f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f8e"
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
              "_id": "62ebc0e08a312c984bbd7f91"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f90"
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
              "_id": "62ebc0e08a312c984bbd7f93"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f92"
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
              "_id": "62ebc0e08a312c984bbd7f95"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7f94"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7f71",
    "audioID": 566,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 565,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f73"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f74"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f75"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f76"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f77"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f78"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f79"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f7a"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f7b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f7c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f7d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f72"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 566,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f7f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f80"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f81"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7f82"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7f83"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f84"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f85"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f86"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7f87"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f88"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f89"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f7e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "567",
        "name": "Lê Văn Quyền",
        "cty": "ABC",
        "hotline": "38904567"
      },
      "customer": {
        "customerID": "567",
        "name": "Trần Khánh Quyền",
        "phone": "67296455",
        "address": "Hà Nội",
        "cmnd": "84292784"
      },
      "fileURL": "talk567.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "63s",
      "date": "8/2/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7fb0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7faf"
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
              "_id": "62ebc0e08a312c984bbd7fb2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fb1"
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
              "_id": "62ebc0e08a312c984bbd7fb4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fb3"
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
              "_id": "62ebc0e08a312c984bbd7fb6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fb5"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd7fb8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fb7"
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
              "_id": "62ebc0e08a312c984bbd7fba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fb9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7f96",
    "audioID": 567,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 566,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7f98"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7f99"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7f9a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7f9b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7f9c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7f9d"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7f9e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7f9f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7fa0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fa1"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7fa2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7f97"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 567,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fa4"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fa5"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fa6"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7fa7"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fa8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7fa9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7faa"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7fab"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7fac"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fad"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7fae"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7fa3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "568",
        "name": "Lê Thị Lợi",
        "cty": "ABC",
        "hotline": "41056414"
      },
      "customer": {
        "customerID": "568",
        "name": "Đặng An Duy",
        "phone": "28382708",
        "address": "Hà Nội",
        "cmnd": "81425964"
      },
      "fileURL": "talk568.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "131s",
      "date": "10/6/2022",
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
              "_id": "62ebc0e08a312c984bbd7fd5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fd4"
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
              "_id": "62ebc0e08a312c984bbd7fd7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fd6"
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
              "_id": "62ebc0e08a312c984bbd7fd9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fd8"
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
              "_id": "62ebc0e08a312c984bbd7fdb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fda"
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
              "_id": "62ebc0e08a312c984bbd7fdd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fdc"
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
              "_id": "62ebc0e08a312c984bbd7fdf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fde"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7fbb",
    "audioID": 568,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 567,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7fbd"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fbe"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7fbf"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fc0"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7fc1"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7fc2"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7fc3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fc4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7fc5"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fc6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7fc7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7fbc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 568,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fc9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7fca"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fcb"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7fcc"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7fcd"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7fce"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7fcf"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7fd0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fd1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fd2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7fd3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7fc8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "569",
        "name": "Phan Dương Lợi",
        "cty": "ABC",
        "hotline": "41301514"
      },
      "customer": {
        "customerID": "569",
        "name": "Huỳnh Phương Lợi",
        "phone": "45691060",
        "address": "Hà Nội",
        "cmnd": "28863569"
      },
      "fileURL": "talk569.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "422s",
      "date": "3/10/2022",
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
              "_id": "62ebc0e08a312c984bbd7ffa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ff9"
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
              "_id": "62ebc0e08a312c984bbd7ffc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ffb"
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
              "_id": "62ebc0e08a312c984bbd7ffe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7ffd"
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
              "_id": "62ebc0e08a312c984bbd8000"
            }
          ],
          "_id": "62ebc0e08a312c984bbd7fff"
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
              "_id": "62ebc0e08a312c984bbd8002"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8001"
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
              "_id": "62ebc0e08a312c984bbd8004"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8003"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd7fe0",
    "audioID": 569,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 568,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fe2"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7fe3"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fe4"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7fe5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7fe6"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd7fe7"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fe8"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fe9"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7fea"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7feb"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fec"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7fe1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 569,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7fee"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd7fef"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd7ff0"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd7ff1"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd7ff2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd7ff3"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ff4"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd7ff5"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd7ff6"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd7ff7"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd7ff8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd7fed"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "570",
        "name": "Phạm Dương Hồng",
        "cty": "ABC",
        "hotline": "53131297"
      },
      "customer": {
        "customerID": "570",
        "name": "Ngô Văn Cảnh",
        "phone": "58565063",
        "address": "Hà Nội",
        "cmnd": "20289574"
      },
      "fileURL": "talk570.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "428s",
      "date": "4/10/2022",
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
              "_id": "62ebc0e08a312c984bbd801f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd801e"
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
              "_id": "62ebc0e08a312c984bbd8021"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8020"
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
              "_id": "62ebc0e08a312c984bbd8023"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8022"
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
              "_id": "62ebc0e08a312c984bbd8025"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8024"
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
              "_id": "62ebc0e08a312c984bbd8027"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8026"
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
              "_id": "62ebc0e08a312c984bbd8029"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8028"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8005",
    "audioID": 570,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 569,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8007"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8008"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8009"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd800a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd800b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd800c"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd800d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd800e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd800f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8010"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8011"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8006"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 570,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8013"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8014"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8015"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8016"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8017"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8018"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8019"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd801a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd801b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd801c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd801d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8012"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "571",
        "name": "Trần Văn Lợi",
        "cty": "ABC",
        "hotline": "39112455"
      },
      "customer": {
        "customerID": "571",
        "name": "Bùi Văn Quyền",
        "phone": "56663260",
        "address": "Hà Nội",
        "cmnd": "28501122"
      },
      "fileURL": "talk571.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "203s",
      "date": "5/1/2022",
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
              "_id": "62ebc0e08a312c984bbd8044"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8043"
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
              "_id": "62ebc0e08a312c984bbd8046"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8045"
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
              "_id": "62ebc0e08a312c984bbd8048"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8047"
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
              "_id": "62ebc0e08a312c984bbd804a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8049"
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
              "_id": "62ebc0e08a312c984bbd804c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd804b"
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
              "_id": "62ebc0e08a312c984bbd804e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd804d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd802a",
    "audioID": 571,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 570,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd802c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd802d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd802e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd802f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8030"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8031"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8032"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8033"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8034"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8035"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8036"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd802b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 571,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8038"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8039"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd803a"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd803b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd803c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd803d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd803e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd803f"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8040"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8041"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8042"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8037"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "572",
        "name": "Nguyễn Thị Duy",
        "cty": "ABC",
        "hotline": "15960458"
      },
      "customer": {
        "customerID": "572",
        "name": "Phan Hải Duy",
        "phone": "10254268",
        "address": "Hà Nội",
        "cmnd": "42276790"
      },
      "fileURL": "talk572.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "595s",
      "date": "20/6/2022",
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
              "_id": "62ebc0e08a312c984bbd8069"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8068"
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
              "_id": "62ebc0e08a312c984bbd806b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd806a"
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
              "_id": "62ebc0e08a312c984bbd806d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd806c"
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
              "_id": "62ebc0e08a312c984bbd806f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd806e"
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
              "_id": "62ebc0e08a312c984bbd8071"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8070"
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
              "_id": "62ebc0e08a312c984bbd8073"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8072"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd804f",
    "audioID": 572,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 571,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8051"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8052"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8053"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8054"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8055"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8056"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8057"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8058"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8059"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd805a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd805b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8050"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 572,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd805d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd805e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd805f"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8060"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8061"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8062"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8063"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8064"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8065"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8066"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8067"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd805c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "573",
        "name": "Trương Hữu An",
        "cty": "ABC",
        "hotline": "91838241"
      },
      "customer": {
        "customerID": "573",
        "name": "Bùi Hữu Ánh",
        "phone": "51223299",
        "address": "Hà Nội",
        "cmnd": "56649476"
      },
      "fileURL": "talk573.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "65s",
      "date": "29/12/2022",
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
              "_id": "62ebc0e08a312c984bbd808e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd808d"
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
              "_id": "62ebc0e08a312c984bbd8090"
            }
          ],
          "_id": "62ebc0e08a312c984bbd808f"
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
              "_id": "62ebc0e08a312c984bbd8092"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8091"
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
              "_id": "62ebc0e08a312c984bbd8094"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8093"
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
              "_id": "62ebc0e08a312c984bbd8096"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8095"
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
              "_id": "62ebc0e08a312c984bbd8098"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8097"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8074",
    "audioID": 573,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 572,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8076"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8077"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8078"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8079"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd807a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd807b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd807c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd807d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd807e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd807f"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8080"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8075"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 573,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8082"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8083"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8084"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8085"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8086"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8087"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8088"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8089"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd808a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd808b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd808c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8081"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "574",
        "name": "Bùi Minh Hồng",
        "cty": "ABC",
        "hotline": "14389548"
      },
      "customer": {
        "customerID": "574",
        "name": "Trương Hữu Duy",
        "phone": "49190614",
        "address": "Hà Nội",
        "cmnd": "60993550"
      },
      "fileURL": "talk574.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "13s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd80b3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80b2"
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
              "_id": "62ebc0e08a312c984bbd80b5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80b4"
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
              "_id": "62ebc0e08a312c984bbd80b7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80b6"
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
              "_id": "62ebc0e08a312c984bbd80b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80b8"
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
              "_id": "62ebc0e08a312c984bbd80bb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80ba"
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
              "_id": "62ebc0e08a312c984bbd80bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80bc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8099",
    "audioID": 574,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 573,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd809b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd809c"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd809d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd809e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd809f"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd80a0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80a1"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80a2"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80a3"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80a4"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80a5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd809a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 574,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80a7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80a8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80a9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80aa"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80ab"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80ac"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80ad"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd80ae"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80af"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80b0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80b1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd80a6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "575",
        "name": "Bùi Thị Quyền",
        "cty": "ABC",
        "hotline": "61061943"
      },
      "customer": {
        "customerID": "575",
        "name": "Lê An Lợi",
        "phone": "84759769",
        "address": "Hà Nội",
        "cmnd": "43182840"
      },
      "fileURL": "talk575.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "534s",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd80d8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80d7"
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
              "_id": "62ebc0e08a312c984bbd80da"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80d9"
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
              "_id": "62ebc0e08a312c984bbd80dc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80db"
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
              "_id": "62ebc0e08a312c984bbd80de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80dd"
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
              "_id": "62ebc0e08a312c984bbd80e0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80df"
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
              "_id": "62ebc0e08a312c984bbd80e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80e1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd80be",
    "audioID": 575,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 574,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd80c0"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd80c1"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80c2"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80c3"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80c4"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80c5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd80c6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80c7"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd80c8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80c9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80ca"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd80bf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 575,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80cc"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd80cd"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80ce"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd80cf"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80d0"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80d1"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80d2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80d3"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80d4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80d5"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd80d6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd80cb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "576",
        "name": "Phan Văn Cảnh",
        "cty": "ABC",
        "hotline": "66916422"
      },
      "customer": {
        "customerID": "576",
        "name": "Lê An Thái Qúy",
        "phone": "43690290",
        "address": "Hà Nội",
        "cmnd": "66975742"
      },
      "fileURL": "talk576.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "501s",
      "date": "20/11/2022",
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
              "_id": "62ebc0e08a312c984bbd80fd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80fc"
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
              "_id": "62ebc0e08a312c984bbd80ff"
            }
          ],
          "_id": "62ebc0e08a312c984bbd80fe"
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
              "_id": "62ebc0e08a312c984bbd8101"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8100"
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
              "_id": "62ebc0e08a312c984bbd8103"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8102"
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
              "_id": "62ebc0e08a312c984bbd8105"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8104"
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
              "_id": "62ebc0e08a312c984bbd8107"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8106"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd80e3",
    "audioID": 576,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 575,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80e5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd80e6"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80e7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80e8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80e9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd80ea"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80eb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80ec"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80ed"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd80ee"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80ef"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd80e4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 576,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80f1"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80f2"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd80f3"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd80f4"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd80f5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd80f6"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd80f7"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd80f8"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd80f9"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd80fa"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd80fb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd80f0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "577",
        "name": "Lê Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "35306013"
      },
      "customer": {
        "customerID": "577",
        "name": "Phan An Lợi",
        "phone": "20515979",
        "address": "Hà Nội",
        "cmnd": "76980002"
      },
      "fileURL": "talk577.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "497s",
      "date": "21/12/2022",
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
              "_id": "62ebc0e08a312c984bbd8122"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8121"
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
              "_id": "62ebc0e08a312c984bbd8124"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8123"
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
              "_id": "62ebc0e08a312c984bbd8126"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8125"
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
              "_id": "62ebc0e08a312c984bbd8128"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8127"
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
              "_id": "62ebc0e08a312c984bbd812a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8129"
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
              "_id": "62ebc0e08a312c984bbd812c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd812b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8108",
    "audioID": 577,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 576,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd810a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd810b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd810c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd810d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd810e"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd810f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8110"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8111"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8112"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8113"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8114"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8109"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 577,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8116"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8117"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8118"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8119"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd811a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd811b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd811c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd811d"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd811e"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd811f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8120"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8115"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "578",
        "name": "Trần Quốc An",
        "cty": "ABC",
        "hotline": "62272136"
      },
      "customer": {
        "customerID": "578",
        "name": "Bùi Văn Lợi",
        "phone": "99878325",
        "address": "Hà Nội",
        "cmnd": "59762948"
      },
      "fileURL": "talk578.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "323s",
      "date": "22/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd8147"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8146"
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
              "_id": "62ebc0e08a312c984bbd8149"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8148"
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
              "_id": "62ebc0e08a312c984bbd814b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd814a"
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
              "_id": "62ebc0e08a312c984bbd814d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd814c"
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
              "_id": "62ebc0e08a312c984bbd814f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd814e"
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
              "_id": "62ebc0e08a312c984bbd8151"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8150"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd812d",
    "audioID": 578,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 577,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd812f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8130"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8131"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8132"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8133"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8134"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8135"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8136"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8137"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8138"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8139"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd812e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 578,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd813b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd813c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd813d"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd813e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd813f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8140"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8141"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8142"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8143"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8144"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8145"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd813a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "579",
        "name": "Phan Hải An",
        "cty": "ABC",
        "hotline": "32153398"
      },
      "customer": {
        "customerID": "579",
        "name": "Nguyễn Quốc Hồng",
        "phone": "85216445",
        "address": "Hà Nội",
        "cmnd": "47612567"
      },
      "fileURL": "talk579.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "170s",
      "date": "22/2/2022",
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
              "_id": "62ebc0e08a312c984bbd816c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd816b"
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
              "_id": "62ebc0e08a312c984bbd816e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd816d"
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
              "_id": "62ebc0e08a312c984bbd8170"
            }
          ],
          "_id": "62ebc0e08a312c984bbd816f"
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
              "_id": "62ebc0e08a312c984bbd8172"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8171"
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
              "_id": "62ebc0e08a312c984bbd8174"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8173"
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
              "_id": "62ebc0e08a312c984bbd8176"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8175"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8152",
    "audioID": 579,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 578,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8154"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8155"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8156"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8157"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8158"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8159"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd815a"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd815b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd815c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd815d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd815e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8153"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 579,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8160"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8161"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8162"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8163"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8164"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8165"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8166"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8167"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8168"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8169"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd816a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd815f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "580",
        "name": "Phan Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "66690815"
      },
      "customer": {
        "customerID": "580",
        "name": "Trần Phương Lợi",
        "phone": "31091693",
        "address": "Hà Nội",
        "cmnd": "49904941"
      },
      "fileURL": "talk580.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "387s",
      "date": "6/1/2022",
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
              "_id": "62ebc0e08a312c984bbd8191"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8190"
        },
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
              "_id": "62ebc0e08a312c984bbd8193"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8192"
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
              "_id": "62ebc0e08a312c984bbd8195"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8194"
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
              "_id": "62ebc0e08a312c984bbd8197"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8196"
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
              "_id": "62ebc0e08a312c984bbd8199"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8198"
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
              "_id": "62ebc0e08a312c984bbd819b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd819a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8177",
    "audioID": 580,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 579,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8179"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd817a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd817b"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd817c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd817d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd817e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd817f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8180"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8181"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8182"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8183"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8178"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 580,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8185"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8186"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8187"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8188"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8189"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd818a"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd818b"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd818c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd818d"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd818e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd818f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8184"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "581",
        "name": "Huỳnh An Quyền",
        "cty": "ABC",
        "hotline": "56963092"
      },
      "customer": {
        "customerID": "581",
        "name": "Ngô Hải Quyền",
        "phone": "96904317",
        "address": "Hà Nội",
        "cmnd": "16210386"
      },
      "fileURL": "talk581.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "464s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd81b6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81b5"
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
              "_id": "62ebc0e08a312c984bbd81b8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81b7"
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
              "_id": "62ebc0e08a312c984bbd81ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81b9"
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
              "_id": "62ebc0e08a312c984bbd81bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81bb"
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
              "_id": "62ebc0e08a312c984bbd81be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81bd"
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
              "_id": "62ebc0e08a312c984bbd81c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81bf"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd819c",
    "audioID": 581,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 580,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd819e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd819f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81a0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81a1"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81a2"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd81a3"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81a4"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81a5"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81a6"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81a7"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd81a8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd819d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 581,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81aa"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd81ab"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd81ac"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81ad"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd81ae"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81af"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81b0"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81b1"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd81b2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81b3"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81b4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd81a9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "582",
        "name": "Đặng Quốc Duy",
        "cty": "ABC",
        "hotline": "40908427"
      },
      "customer": {
        "customerID": "582",
        "name": "Trương Thị Ánh",
        "phone": "42317275",
        "address": "Hà Nội",
        "cmnd": "60777406"
      },
      "fileURL": "talk582.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "593s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd81db"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81da"
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
              "_id": "62ebc0e08a312c984bbd81dd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81dc"
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
              "_id": "62ebc0e08a312c984bbd81df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81de"
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
              "_id": "62ebc0e08a312c984bbd81e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81e0"
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
              "_id": "62ebc0e08a312c984bbd81e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81e2"
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
              "_id": "62ebc0e08a312c984bbd81e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81e4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd81c1",
    "audioID": 582,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 581,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81c3"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81c4"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81c5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd81c6"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81c7"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81c8"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81c9"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81ca"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81cb"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81cc"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81cd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd81c2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 582,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81cf"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81d0"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81d1"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81d2"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81d3"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81d4"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd81d5"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81d6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81d7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81d8"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81d9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd81ce"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "583",
        "name": "Trần Thị Duy",
        "cty": "ABC",
        "hotline": "83483146"
      },
      "customer": {
        "customerID": "583",
        "name": "Phan Hải Duy",
        "phone": "49463024",
        "address": "Hà Nội",
        "cmnd": "72117452"
      },
      "fileURL": "talk583.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "208s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd8200"
            }
          ],
          "_id": "62ebc0e08a312c984bbd81ff"
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
              "_id": "62ebc0e08a312c984bbd8202"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8201"
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
              "_id": "62ebc0e08a312c984bbd8204"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8203"
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
              "_id": "62ebc0e08a312c984bbd8206"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8205"
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
              "_id": "62ebc0e08a312c984bbd8208"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8207"
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
              "_id": "62ebc0e08a312c984bbd820a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8209"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd81e6",
    "audioID": 583,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 582,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81e8"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd81e9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81ea"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81eb"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd81ec"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81ed"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81ee"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81ef"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81f0"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81f1"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd81f2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd81e7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 583,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd81f4"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd81f5"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81f6"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd81f7"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81f8"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81f9"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd81fa"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd81fb"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd81fc"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd81fd"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd81fe"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd81f3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "584",
        "name": "Phan Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "57614996"
      },
      "customer": {
        "customerID": "584",
        "name": "Phạm Minh Quyền",
        "phone": "46385507",
        "address": "Hà Nội",
        "cmnd": "44253922"
      },
      "fileURL": "talk584.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "86s",
      "date": "1/8/2022",
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
              "_id": "62ebc0e08a312c984bbd8225"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8224"
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
              "_id": "62ebc0e08a312c984bbd8227"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8226"
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
              "_id": "62ebc0e08a312c984bbd8229"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8228"
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
              "_id": "62ebc0e08a312c984bbd822b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd822a"
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
              "_id": "62ebc0e08a312c984bbd822d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd822c"
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
              "_id": "62ebc0e08a312c984bbd822f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd822e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd820b",
    "audioID": 584,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 583,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd820d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd820e"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd820f"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8210"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8211"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8212"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8213"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8214"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8215"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8216"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8217"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd820c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 584,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8219"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd821a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd821b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd821c"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd821d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd821e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd821f"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8220"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8221"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8222"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8223"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8218"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "585",
        "name": "Lê Hữu Khánh",
        "cty": "ABC",
        "hotline": "18952094"
      },
      "customer": {
        "customerID": "585",
        "name": "Phan Thị Lợi",
        "phone": "92256300",
        "address": "Hà Nội",
        "cmnd": "14640870"
      },
      "fileURL": "talk585.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "326s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd824a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8249"
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
              "_id": "62ebc0e08a312c984bbd824c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd824b"
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
              "_id": "62ebc0e08a312c984bbd824e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd824d"
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
              "_id": "62ebc0e08a312c984bbd8250"
            }
          ],
          "_id": "62ebc0e08a312c984bbd824f"
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
              "_id": "62ebc0e08a312c984bbd8252"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8251"
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
              "_id": "62ebc0e08a312c984bbd8254"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8253"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8230",
    "audioID": 585,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 584,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8232"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8233"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8234"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8235"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8236"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8237"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8238"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8239"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd823a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd823b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd823c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8231"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 585,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd823e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd823f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8240"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8241"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8242"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8243"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8244"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8245"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8246"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8247"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8248"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd823d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "586",
        "name": "Đặng An Lợi",
        "cty": "ABC",
        "hotline": "25394436"
      },
      "customer": {
        "customerID": "586",
        "name": "Nguyễn Dương Dạ",
        "phone": "43957637",
        "address": "Hà Nội",
        "cmnd": "13008714"
      },
      "fileURL": "talk586.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "85s",
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
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd826f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd826e"
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
              "_id": "62ebc0e08a312c984bbd8271"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8270"
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
              "_id": "62ebc0e08a312c984bbd8273"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8272"
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
              "_id": "62ebc0e08a312c984bbd8275"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8274"
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
              "_id": "62ebc0e08a312c984bbd8277"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8276"
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
              "_id": "62ebc0e08a312c984bbd8279"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8278"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8255",
    "audioID": 586,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 585,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8257"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8258"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8259"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd825a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd825b"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd825c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd825d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd825e"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd825f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8260"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8261"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8256"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 586,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8263"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8264"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8265"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8266"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8267"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8268"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8269"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd826a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd826b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd826c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd826d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8262"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "587",
        "name": "Ngô Minh Dạ",
        "cty": "ABC",
        "hotline": "20617458"
      },
      "customer": {
        "customerID": "587",
        "name": "Nguyễn Phương Hồng",
        "phone": "14692469",
        "address": "Hà Nội",
        "cmnd": "67533623"
      },
      "fileURL": "talk587.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "295s",
      "date": "20/10/2022",
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
              "_id": "62ebc0e08a312c984bbd8294"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8293"
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
              "_id": "62ebc0e08a312c984bbd8296"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8295"
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
              "_id": "62ebc0e08a312c984bbd8298"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8297"
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
              "_id": "62ebc0e08a312c984bbd829a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8299"
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
              "_id": "62ebc0e08a312c984bbd829c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd829b"
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
              "_id": "62ebc0e08a312c984bbd829e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd829d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd827a",
    "audioID": 587,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 586,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd827c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd827d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd827e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd827f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8280"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8281"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8282"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8283"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8284"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8285"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8286"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd827b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 587,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8288"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8289"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd828a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd828b"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd828c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd828d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd828e"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd828f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8290"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8291"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8292"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8287"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "588",
        "name": "Lê Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "87994573"
      },
      "customer": {
        "customerID": "588",
        "name": "Nguyễn Quốc Lợi",
        "phone": "26507105",
        "address": "Hà Nội",
        "cmnd": "27496031"
      },
      "fileURL": "talk588.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "148s",
      "date": "27/1/2022",
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
              "_id": "62ebc0e08a312c984bbd82b9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82b8"
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
              "_id": "62ebc0e08a312c984bbd82bb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82ba"
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
              "_id": "62ebc0e08a312c984bbd82bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82bc"
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
              "_id": "62ebc0e08a312c984bbd82bf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82be"
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
              "_id": "62ebc0e08a312c984bbd82c1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82c0"
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
              "_id": "62ebc0e08a312c984bbd82c3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82c2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd829f",
    "audioID": 588,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 587,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82a1"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82a2"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd82a3"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82a4"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd82a5"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82a6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82a7"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82a8"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82a9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82aa"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82ab"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82a0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 588,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82ad"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82ae"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82af"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82b0"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82b1"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82b2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82b3"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82b4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82b5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82b6"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82b7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82ac"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "589",
        "name": "Trương Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "34276279"
      },
      "customer": {
        "customerID": "589",
        "name": "Đặng Văn Duy",
        "phone": "80213552",
        "address": "Hà Nội",
        "cmnd": "86729003"
      },
      "fileURL": "talk589.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "9s",
      "date": "9/12/2022",
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
              "_id": "62ebc0e08a312c984bbd82de"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82dd"
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
              "_id": "62ebc0e08a312c984bbd82e0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82df"
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
              "_id": "62ebc0e08a312c984bbd82e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82e1"
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
              "_id": "62ebc0e08a312c984bbd82e4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82e3"
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
              "_id": "62ebc0e08a312c984bbd82e6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82e5"
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
              "_id": "62ebc0e08a312c984bbd82e8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd82e7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd82c4",
    "audioID": 589,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 588,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82c6"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82c7"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82c8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82c9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82ca"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82cb"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd82cc"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82cd"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82ce"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd82cf"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82d0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82c5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 589,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82d2"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82d3"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82d4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd82d5"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82d6"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82d7"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82d8"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82d9"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82da"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82db"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd82dc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82d1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "590",
        "name": "Ngô Văn Khánh",
        "cty": "ABC",
        "hotline": "37575113"
      },
      "customer": {
        "customerID": "590",
        "name": "Phạm An Hồng",
        "phone": "86411662",
        "address": "Hà Nội",
        "cmnd": "47561236"
      },
      "fileURL": "talk590.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "185s",
      "date": "30/7/2022",
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
              "_id": "62ebc0e08a312c984bbd8303"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8302"
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
              "_id": "62ebc0e08a312c984bbd8305"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8304"
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
              "_id": "62ebc0e08a312c984bbd8307"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8306"
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
              "_id": "62ebc0e08a312c984bbd8309"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8308"
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
              "_id": "62ebc0e08a312c984bbd830b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd830a"
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
              "_id": "62ebc0e08a312c984bbd830d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd830c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd82e9",
    "audioID": 590,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 589,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82eb"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82ec"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82ed"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd82ee"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82ef"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd82f0"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd82f1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82f2"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd82f3"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd82f4"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82f5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82ea"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 590,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd82f7"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82f8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd82f9"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd82fa"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd82fb"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82fc"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82fd"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd82fe"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd82ff"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8300"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8301"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd82f6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "591",
        "name": "Phan Dương Quyền",
        "cty": "ABC",
        "hotline": "84533088"
      },
      "customer": {
        "customerID": "591",
        "name": "Bùi Thị Thái Qúy",
        "phone": "53892871",
        "address": "Hà Nội",
        "cmnd": "38041238"
      },
      "fileURL": "talk591.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "102s",
      "date": "9/1/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd8328"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8327"
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
              "_id": "62ebc0e08a312c984bbd832a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8329"
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
              "_id": "62ebc0e08a312c984bbd832c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd832b"
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
              "_id": "62ebc0e08a312c984bbd832e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd832d"
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
              "_id": "62ebc0e08a312c984bbd8330"
            }
          ],
          "_id": "62ebc0e08a312c984bbd832f"
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
              "_id": "62ebc0e08a312c984bbd8332"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8331"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd830e",
    "audioID": 591,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 590,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8310"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8311"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8312"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8313"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8314"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8315"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8316"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8317"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8318"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8319"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd831a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd830f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 591,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd831c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd831d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd831e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd831f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8320"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8321"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8322"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8323"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8324"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8325"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8326"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd831b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "592",
        "name": "Ngô Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "95900314"
      },
      "customer": {
        "customerID": "592",
        "name": "Bùi Dương Hồng",
        "phone": "95139081",
        "address": "Hà Nội",
        "cmnd": "78494357"
      },
      "fileURL": "talk592.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "132s",
      "date": "26/6/2022",
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
              "_id": "62ebc0e08a312c984bbd834d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd834c"
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
              "_id": "62ebc0e08a312c984bbd834f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd834e"
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
              "_id": "62ebc0e08a312c984bbd8351"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8350"
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
              "_id": "62ebc0e08a312c984bbd8353"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8352"
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
              "_id": "62ebc0e08a312c984bbd8355"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8354"
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
              "_id": "62ebc0e08a312c984bbd8357"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8356"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8333",
    "audioID": 592,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 591,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8335"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8336"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8337"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8338"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8339"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd833a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd833b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd833c"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd833d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd833e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd833f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8334"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 592,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8341"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8342"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8343"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8344"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8345"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8346"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8347"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8348"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8349"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd834a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd834b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8340"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "593",
        "name": "Bùi Hải An",
        "cty": "ABC",
        "hotline": "99443726"
      },
      "customer": {
        "customerID": "593",
        "name": "Phạm Khánh Dạ",
        "phone": "81887196",
        "address": "Hà Nội",
        "cmnd": "94518140"
      },
      "fileURL": "talk593.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "572s",
      "date": "9/6/2022",
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
              "_id": "62ebc0e08a312c984bbd8372"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8371"
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
              "_id": "62ebc0e08a312c984bbd8374"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8373"
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
              "_id": "62ebc0e08a312c984bbd8376"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8375"
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
              "_id": "62ebc0e08a312c984bbd8378"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8377"
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
              "_id": "62ebc0e08a312c984bbd837a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8379"
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
              "_id": "62ebc0e08a312c984bbd837c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd837b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8358",
    "audioID": 593,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 592,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd835a"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd835b"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd835c"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd835d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd835e"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd835f"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8360"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8361"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8362"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8363"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8364"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8359"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 593,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8366"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8367"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8368"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8369"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd836a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd836b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd836c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd836d"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd836e"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd836f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8370"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8365"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "594",
        "name": "Nguyễn Hải Khánh",
        "cty": "ABC",
        "hotline": "82077520"
      },
      "customer": {
        "customerID": "594",
        "name": "Phan An Quyền",
        "phone": "83110535",
        "address": "Hà Nội",
        "cmnd": "73380935"
      },
      "fileURL": "talk594.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "511s",
      "date": "7/9/2022",
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
              "_id": "62ebc0e08a312c984bbd8397"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8396"
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
              "_id": "62ebc0e08a312c984bbd8399"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8398"
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
              "_id": "62ebc0e08a312c984bbd839b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd839a"
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
              "_id": "62ebc0e08a312c984bbd839d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd839c"
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
              "_id": "62ebc0e08a312c984bbd839f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd839e"
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
              "_id": "62ebc0e08a312c984bbd83a1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83a0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd837d",
    "audioID": 594,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 593,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd837f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8380"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8381"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8382"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8383"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8384"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8385"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8386"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8387"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8388"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8389"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd837e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 594,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd838b"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd838c"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd838d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd838e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd838f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8390"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8391"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8392"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8393"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8394"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8395"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd838a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "595",
        "name": "Phạm Dương Quyền",
        "cty": "ABC",
        "hotline": "10569654"
      },
      "customer": {
        "customerID": "595",
        "name": "Bùi Thị Cảnh",
        "phone": "13492167",
        "address": "Hà Nội",
        "cmnd": "55775626"
      },
      "fileURL": "talk595.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "514s",
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
              "_id": "62ebc0e08a312c984bbd83bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83bb"
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
              "_id": "62ebc0e08a312c984bbd83be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83bd"
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
              "_id": "62ebc0e08a312c984bbd83c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83bf"
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
              "_id": "62ebc0e08a312c984bbd83c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83c1"
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
              "_id": "62ebc0e08a312c984bbd83c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83c3"
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
              "_id": "62ebc0e08a312c984bbd83c6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83c5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd83a2",
    "audioID": 595,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 594,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83a4"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd83a5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd83a6"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83a7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd83a8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83a9"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd83aa"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd83ab"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83ac"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83ad"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83ae"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83a3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 595,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83b0"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83b1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83b2"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd83b3"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83b4"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83b5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83b6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd83b7"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd83b8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83b9"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83ba"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83af"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "596",
        "name": "Đặng Dương An",
        "cty": "ABC",
        "hotline": "48343249"
      },
      "customer": {
        "customerID": "596",
        "name": "Trương Văn Khánh",
        "phone": "93210416",
        "address": "Hà Nội",
        "cmnd": "52645994"
      },
      "fileURL": "talk596.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "502s",
      "date": "24/8/2022",
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
              "_id": "62ebc0e08a312c984bbd83e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83e0"
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
              "_id": "62ebc0e08a312c984bbd83e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83e2"
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
              "_id": "62ebc0e08a312c984bbd83e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83e4"
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
              "_id": "62ebc0e08a312c984bbd83e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83e6"
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
              "_id": "62ebc0e08a312c984bbd83e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83e8"
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
              "_id": "62ebc0e08a312c984bbd83eb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd83ea"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd83c7",
    "audioID": 596,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 595,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd83c9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83ca"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd83cb"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83cc"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83cd"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83ce"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83cf"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83d0"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83d1"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd83d2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd83d3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83c8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 596,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83d5"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd83d6"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd83d7"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd83d8"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83d9"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83da"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83db"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83dc"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83dd"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd83de"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83df"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83d4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "597",
        "name": "Phan An Khánh",
        "cty": "ABC",
        "hotline": "28283688"
      },
      "customer": {
        "customerID": "597",
        "name": "Bùi Quốc Hồng",
        "phone": "96802986",
        "address": "Hà Nội",
        "cmnd": "22931606"
      },
      "fileURL": "talk597.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "543s",
      "date": "22/9/2022",
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
              "_id": "62ebc0e08a312c984bbd8406"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8405"
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
              "_id": "62ebc0e08a312c984bbd8408"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8407"
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
              "_id": "62ebc0e08a312c984bbd840a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8409"
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
              "_id": "62ebc0e08a312c984bbd840c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd840b"
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
              "_id": "62ebc0e08a312c984bbd840e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd840d"
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
              "_id": "62ebc0e08a312c984bbd8410"
            }
          ],
          "_id": "62ebc0e08a312c984bbd840f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd83ec",
    "audioID": 597,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 596,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83ee"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83ef"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83f0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83f1"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83f2"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83f3"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83f4"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83f5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83f6"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd83f7"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83f8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83ed"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 597,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd83fa"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd83fb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd83fc"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd83fd"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd83fe"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd83ff"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8400"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8401"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8402"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8403"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8404"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd83f9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "598",
        "name": "Phạm Quốc Ánh",
        "cty": "ABC",
        "hotline": "51200426"
      },
      "customer": {
        "customerID": "598",
        "name": "Đặng Hải Thái Qúy",
        "phone": "14287979",
        "address": "Hà Nội",
        "cmnd": "37278307"
      },
      "fileURL": "talk598.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "399s",
      "date": "15/3/2022",
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
              "_id": "62ebc0e08a312c984bbd842b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd842a"
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
              "_id": "62ebc0e08a312c984bbd842d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd842c"
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
              "_id": "62ebc0e08a312c984bbd842f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd842e"
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
              "_id": "62ebc0e08a312c984bbd8431"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8430"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd8433"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8432"
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
              "_id": "62ebc0e08a312c984bbd8435"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8434"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8411",
    "audioID": 598,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 597,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8413"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8414"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8415"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8416"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8417"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8418"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8419"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd841a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd841b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd841c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd841d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8412"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 598,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd841f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8420"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8421"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8422"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8423"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8424"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8425"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd8426"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8427"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8428"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8429"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd841e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "599",
        "name": "Huỳnh Khánh Khánh",
        "cty": "ABC",
        "hotline": "17331078"
      },
      "customer": {
        "customerID": "599",
        "name": "Bùi Minh Thái Qúy",
        "phone": "50412305",
        "address": "Hà Nội",
        "cmnd": "10285609"
      },
      "fileURL": "talk599.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "291s",
      "date": "27/8/2022",
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
              "_id": "62ebc0e08a312c984bbd8450"
            }
          ],
          "_id": "62ebc0e08a312c984bbd844f"
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
              "_id": "62ebc0e08a312c984bbd8452"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8451"
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
              "_id": "62ebc0e08a312c984bbd8454"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8453"
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
              "_id": "62ebc0e08a312c984bbd8456"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8455"
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
              "_id": "62ebc0e08a312c984bbd8458"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8457"
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
              "_id": "62ebc0e08a312c984bbd845a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8459"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd8436",
    "audioID": 599,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 598,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8438"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8439"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd843a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd843b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd843c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd843d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd843e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd843f"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8440"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd8441"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8442"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8437"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 599,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8444"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8445"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8446"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd8447"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8448"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd8449"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd844a"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd844b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd844c"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd844d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd844e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8443"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "600",
        "name": "Huỳnh Khánh Cảnh",
        "cty": "ABC",
        "hotline": "96394572"
      },
      "customer": {
        "customerID": "600",
        "name": "Đặng Minh Hồng",
        "phone": "33717924",
        "address": "Hà Nội",
        "cmnd": "86907569"
      },
      "fileURL": "talk600.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "361s",
      "date": "21/4/2022",
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
              "_id": "62ebc0e08a312c984bbd8475"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8474"
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
              "_id": "62ebc0e08a312c984bbd8477"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8476"
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
              "_id": "62ebc0e08a312c984bbd8479"
            }
          ],
          "_id": "62ebc0e08a312c984bbd8478"
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
              "_id": "62ebc0e08a312c984bbd847b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd847a"
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
              "_id": "62ebc0e08a312c984bbd847d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd847c"
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
              "_id": "62ebc0e08a312c984bbd847f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd847e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd845b",
    "audioID": 600,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 599,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd845d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd845e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd845f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8460"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd8461"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8462"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd8463"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8464"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8465"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8466"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8467"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd845c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 600,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd8469"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd846a"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd846b"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd846c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd846d"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd846e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd846f"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8470"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd8471"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd8472"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd8473"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd8468"
      }
    ],
    "__v": 0
  }
]
export default FILE6