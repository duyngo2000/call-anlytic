// 20220804202436
// http://localhost:5000/

const FILE10 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "901",
        "name": "Phạm Dương Khánh",
        "cty": "ABC",
        "hotline": "37354191"
      },
      "customer": {
        "customerID": "901",
        "name": "Lê Hữu Khánh",
        "phone": "86942548",
        "address": "Hà Nội",
        "cmnd": "66279398"
      },
      "fileURL": "talk901.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "22s",
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
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdaff6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaff5"
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
              "_id": "62ebc0e18a312c984bbdaff8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaff7"
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
              "_id": "62ebc0e18a312c984bbdaffa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaff9"
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
              "_id": "62ebc0e18a312c984bbdaffc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaffb"
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
              "_id": "62ebc0e18a312c984bbdaffe"
            }
          ],
          "_id": "62ebc0e18a312c984bbdaffd"
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
              "_id": "62ebc0e18a312c984bbdb000"
            }
          ],
          "_id": "62ebc0e18a312c984bbdafff"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdafdc",
    "audioID": 901,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 900,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafde"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafdf"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafe0"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdafe1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafe2"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdafe3"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafe4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdafe5"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafe6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdafe7"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafe8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdafdd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 901,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdafea"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdafeb"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdafec"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdafed"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdafee"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdafef"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdaff0"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdaff1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdaff2"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdaff3"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdaff4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdafe9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "902",
        "name": "Phan Hải Khánh",
        "cty": "ABC",
        "hotline": "99475142"
      },
      "customer": {
        "customerID": "902",
        "name": "Bùi Khánh Duy",
        "phone": "35998936",
        "address": "Hà Nội",
        "cmnd": "16207295"
      },
      "fileURL": "talk902.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "328s",
      "date": "10/7/2022",
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
              "_id": "62ebc0e18a312c984bbdb01b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb01a"
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
              "_id": "62ebc0e18a312c984bbdb01d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb01c"
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
              "_id": "62ebc0e18a312c984bbdb01f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb01e"
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
              "_id": "62ebc0e18a312c984bbdb021"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb020"
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
              "_id": "62ebc0e18a312c984bbdb023"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb022"
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
              "_id": "62ebc0e18a312c984bbdb025"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb024"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb001",
    "audioID": 902,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 901,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb003"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb004"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb005"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb006"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb007"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb008"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb009"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb00a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb00b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb00c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb00d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb002"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 902,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb00f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb010"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb011"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb012"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb013"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb014"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb015"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb016"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb017"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb018"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb019"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb00e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "903",
        "name": "Phan Văn Duy",
        "cty": "ABC",
        "hotline": "23247424"
      },
      "customer": {
        "customerID": "903",
        "name": "Trương Văn An",
        "phone": "34721896",
        "address": "Hà Nội",
        "cmnd": "54359413"
      },
      "fileURL": "talk903.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "414s",
      "date": "7/4/2022",
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
              "_id": "62ebc0e18a312c984bbdb040"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb03f"
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
              "_id": "62ebc0e18a312c984bbdb042"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb041"
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
              "_id": "62ebc0e18a312c984bbdb044"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb043"
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
              "_id": "62ebc0e18a312c984bbdb046"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb045"
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
              "_id": "62ebc0e18a312c984bbdb048"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb047"
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
              "_id": "62ebc0e18a312c984bbdb04a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb049"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb026",
    "audioID": 903,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 902,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb028"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb029"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb02a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb02b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb02c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb02d"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb02e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb02f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb030"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb031"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb032"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb027"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 903,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb034"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb035"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb036"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb037"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb038"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb039"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb03a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb03b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb03c"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb03d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb03e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb033"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "904",
        "name": "Phan Dương Dạ",
        "cty": "ABC",
        "hotline": "28942483"
      },
      "customer": {
        "customerID": "904",
        "name": "Bùi Thị An",
        "phone": "30047115",
        "address": "Hà Nội",
        "cmnd": "50106946"
      },
      "fileURL": "talk904.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "114s",
      "date": "2/8/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb065"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb064"
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
              "_id": "62ebc0e18a312c984bbdb067"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb066"
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
              "_id": "62ebc0e18a312c984bbdb069"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb068"
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
              "_id": "62ebc0e18a312c984bbdb06b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb06a"
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
              "_id": "62ebc0e18a312c984bbdb06d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb06c"
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
              "_id": "62ebc0e18a312c984bbdb06f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb06e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb04b",
    "audioID": 904,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 903,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb04d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb04e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb04f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb050"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb051"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb052"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb053"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb054"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb055"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb056"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb057"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb04c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 904,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb059"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb05a"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb05b"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb05c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb05d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb05e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb05f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb060"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb061"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb062"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb063"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb058"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "905",
        "name": "Phạm Thị Quyền",
        "cty": "ABC",
        "hotline": "72534009"
      },
      "customer": {
        "customerID": "905",
        "name": "Phạm Phương Duy",
        "phone": "42866231",
        "address": "Hà Nội",
        "cmnd": "41897028"
      },
      "fileURL": "talk905.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "536s",
      "date": "7/3/2022",
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
              "_id": "62ebc0e18a312c984bbdb08a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb089"
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
              "_id": "62ebc0e18a312c984bbdb08c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb08b"
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
              "_id": "62ebc0e18a312c984bbdb08e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb08d"
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
              "_id": "62ebc0e18a312c984bbdb090"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb08f"
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
              "_id": "62ebc0e18a312c984bbdb092"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb091"
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
              "_id": "62ebc0e18a312c984bbdb094"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb093"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb070",
    "audioID": 905,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 904,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb072"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb073"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb074"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb075"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb076"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb077"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb078"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb079"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb07a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb07b"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb07c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb071"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 905,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb07e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb07f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb080"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb081"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb082"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb083"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb084"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb085"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb086"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb087"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb088"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb07d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "906",
        "name": "Phạm Dương An",
        "cty": "ABC",
        "hotline": "41587043"
      },
      "customer": {
        "customerID": "906",
        "name": "Phan Quốc Thái Qúy",
        "phone": "57941832",
        "address": "Hà Nội",
        "cmnd": "95532594"
      },
      "fileURL": "talk906.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "89s",
      "date": "30/11/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb0af"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0ae"
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
              "_id": "62ebc0e18a312c984bbdb0b1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0b0"
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
              "_id": "62ebc0e18a312c984bbdb0b3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0b2"
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
              "_id": "62ebc0e18a312c984bbdb0b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0b4"
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
              "_id": "62ebc0e18a312c984bbdb0b7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0b6"
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
              "_id": "62ebc0e18a312c984bbdb0b9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0b8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb095",
    "audioID": 906,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 905,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb097"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb098"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb099"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb09a"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb09b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb09c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb09d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb09e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb09f"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb0a0"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb0a1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb096"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 906,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb0a3"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0a4"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0a5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb0a6"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb0a7"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb0a8"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0a9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb0aa"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb0ab"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb0ac"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0ad"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb0a2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "907",
        "name": "Đặng Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "46159156"
      },
      "customer": {
        "customerID": "907",
        "name": "Phạm An Hồng",
        "phone": "77529347",
        "address": "Hà Nội",
        "cmnd": "27860650"
      },
      "fileURL": "talk907.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "240s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb0d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0d3"
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
              "_id": "62ebc0e18a312c984bbdb0d6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0d5"
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
              "_id": "62ebc0e18a312c984bbdb0d8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0d7"
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
              "_id": "62ebc0e18a312c984bbdb0da"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0d9"
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
              "_id": "62ebc0e18a312c984bbdb0dc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0db"
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
              "_id": "62ebc0e18a312c984bbdb0de"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0dd"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb0ba",
    "audioID": 907,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 906,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb0bc"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb0bd"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb0be"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb0bf"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0c0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0c1"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0c2"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb0c3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0c4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0c5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0c6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb0bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 907,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0c8"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0c9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0ca"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb0cb"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0cc"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0cd"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb0ce"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb0cf"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb0d0"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0d1"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb0d2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb0c7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "908",
        "name": "Lê Thị Quyền",
        "cty": "ABC",
        "hotline": "91045749"
      },
      "customer": {
        "customerID": "908",
        "name": "Phan Quốc Hồng",
        "phone": "92734107",
        "address": "Hà Nội",
        "cmnd": "80818062"
      },
      "fileURL": "talk908.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "137s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb0f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0f8"
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
              "_id": "62ebc0e18a312c984bbdb0fb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0fa"
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
              "_id": "62ebc0e18a312c984bbdb0fd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0fc"
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
              "_id": "62ebc0e18a312c984bbdb0ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb0fe"
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
              "_id": "62ebc0e18a312c984bbdb101"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb100"
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
              "_id": "62ebc0e18a312c984bbdb103"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb102"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb0df",
    "audioID": 908,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 907,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb0e1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb0e2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb0e3"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0e4"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0e5"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0e6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0e7"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb0e8"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb0e9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb0ea"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0eb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb0e0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 908,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0ed"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb0ee"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0ef"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb0f0"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb0f1"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0f2"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb0f3"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0f4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb0f5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb0f6"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb0f7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb0ec"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "909",
        "name": "Phan Thị Cảnh",
        "cty": "ABC",
        "hotline": "48002543"
      },
      "customer": {
        "customerID": "909",
        "name": "Phan Dương Ánh",
        "phone": "24954948",
        "address": "Hà Nội",
        "cmnd": "73897773"
      },
      "fileURL": "talk909.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "155s",
      "date": "16/7/2022",
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
              "_id": "62ebc0e18a312c984bbdb11e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb11d"
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
              "_id": "62ebc0e18a312c984bbdb120"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb11f"
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
              "_id": "62ebc0e18a312c984bbdb122"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb121"
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
              "_id": "62ebc0e18a312c984bbdb124"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb123"
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
              "_id": "62ebc0e18a312c984bbdb126"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb125"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb128"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb127"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb104",
    "audioID": 909,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 908,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb106"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb107"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb108"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb109"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb10a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb10b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb10c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb10d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb10e"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb10f"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb110"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb105"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 909,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb112"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb113"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb114"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb115"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb116"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb117"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb118"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb119"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb11a"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb11b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb11c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb111"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "910",
        "name": "Phan Phương Cảnh",
        "cty": "ABC",
        "hotline": "89063599"
      },
      "customer": {
        "customerID": "910",
        "name": "Ngô Văn Thái Qúy",
        "phone": "12552212",
        "address": "Hà Nội",
        "cmnd": "95747723"
      },
      "fileURL": "talk910.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "457s",
      "date": "9/2/2022",
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
              "_id": "62ebc0e18a312c984bbdb143"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb142"
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
              "_id": "62ebc0e18a312c984bbdb145"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb144"
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
              "_id": "62ebc0e18a312c984bbdb147"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb146"
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
              "_id": "62ebc0e18a312c984bbdb149"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb148"
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
              "_id": "62ebc0e18a312c984bbdb14b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb14a"
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
              "_id": "62ebc0e18a312c984bbdb14d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb14c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb129",
    "audioID": 910,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 909,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb12b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb12c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb12d"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb12e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb12f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb130"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb131"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb132"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb133"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb134"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb135"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb12a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 910,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb137"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb138"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb139"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb13a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb13b"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb13c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb13d"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb13e"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb13f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb140"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb141"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb136"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "911",
        "name": "Phan Văn An",
        "cty": "ABC",
        "hotline": "94526065"
      },
      "customer": {
        "customerID": "911",
        "name": "Lê Hải Thái Qúy",
        "phone": "70631635",
        "address": "Hà Nội",
        "cmnd": "25729399"
      },
      "fileURL": "talk911.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "260s",
      "date": "11/2/2022",
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
              "_id": "62ebc0e18a312c984bbdb168"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb167"
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
              "_id": "62ebc0e18a312c984bbdb16a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb169"
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
              "_id": "62ebc0e18a312c984bbdb16c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb16b"
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
              "_id": "62ebc0e18a312c984bbdb16e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb16d"
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
              "_id": "62ebc0e18a312c984bbdb170"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb16f"
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
              "_id": "62ebc0e18a312c984bbdb172"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb171"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb14e",
    "audioID": 911,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 910,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb150"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb151"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb152"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb153"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb154"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb155"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb156"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb157"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb158"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb159"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb15a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb14f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 911,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb15c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb15d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb15e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb15f"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb160"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb161"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb162"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb163"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb164"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb165"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb166"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb15b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "912",
        "name": "Lê Hữu Cảnh",
        "cty": "ABC",
        "hotline": "26104999"
      },
      "customer": {
        "customerID": "912",
        "name": "Huỳnh Văn Duy",
        "phone": "77514467",
        "address": "Hà Nội",
        "cmnd": "47607457"
      },
      "fileURL": "talk912.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "28s",
      "date": "11/6/2022",
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
              "_id": "62ebc0e18a312c984bbdb18d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb18c"
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
              "_id": "62ebc0e18a312c984bbdb18f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb18e"
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
              "_id": "62ebc0e18a312c984bbdb191"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb190"
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
              "_id": "62ebc0e18a312c984bbdb193"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb192"
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
              "_id": "62ebc0e18a312c984bbdb195"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb194"
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
              "_id": "62ebc0e18a312c984bbdb197"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb196"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb173",
    "audioID": 912,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 911,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb175"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb176"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb177"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb178"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb179"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb17a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb17b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb17c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb17d"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb17e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb17f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb174"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 912,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb181"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb182"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb183"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb184"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb185"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb186"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb187"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb188"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb189"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb18a"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb18b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb180"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "913",
        "name": "Đặng An Hồng",
        "cty": "ABC",
        "hotline": "39136491"
      },
      "customer": {
        "customerID": "913",
        "name": "Phan Khánh Duy",
        "phone": "76988097",
        "address": "Hà Nội",
        "cmnd": "71752170"
      },
      "fileURL": "talk913.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "406s",
      "date": "8/12/2022",
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
              "_id": "62ebc0e18a312c984bbdb1b2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1b1"
        },
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
              "_id": "62ebc0e18a312c984bbdb1b4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1b3"
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
              "_id": "62ebc0e18a312c984bbdb1b6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1b5"
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
              "_id": "62ebc0e18a312c984bbdb1b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1b7"
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
              "_id": "62ebc0e18a312c984bbdb1ba"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1b9"
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
              "_id": "62ebc0e18a312c984bbdb1bc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1bb"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb198",
    "audioID": 913,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 912,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb19a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb19b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb19c"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb19d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb19e"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb19f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1a0"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb1a1"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1a2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1a3"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1a4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb199"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 913,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb1a6"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1a7"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb1a8"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1a9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1aa"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1ab"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1ac"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1ad"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1ae"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1af"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1b0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb1a5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "914",
        "name": "Trương Hải Duy",
        "cty": "ABC",
        "hotline": "95119269"
      },
      "customer": {
        "customerID": "914",
        "name": "Nguyễn An Cảnh",
        "phone": "88457461",
        "address": "Hà Nội",
        "cmnd": "57957007"
      },
      "fileURL": "talk914.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "559s",
      "date": "19/9/2022",
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
              "_id": "62ebc0e18a312c984bbdb1d7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1d6"
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
              "_id": "62ebc0e18a312c984bbdb1d9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1d8"
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
              "_id": "62ebc0e18a312c984bbdb1db"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1da"
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
              "_id": "62ebc0e18a312c984bbdb1dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1dc"
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
              "_id": "62ebc0e18a312c984bbdb1df"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1de"
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
              "_id": "62ebc0e18a312c984bbdb1e1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1e0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb1bd",
    "audioID": 914,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 913,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1bf"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1c0"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1c1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1c2"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb1c3"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1c4"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1c5"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb1c6"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1c7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb1c8"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1c9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb1be"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 914,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb1cb"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1cc"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1cd"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb1ce"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb1cf"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1d0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1d1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1d2"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1d3"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1d4"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb1d5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb1ca"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "915",
        "name": "Trần Hữu Quyền",
        "cty": "ABC",
        "hotline": "39652308"
      },
      "customer": {
        "customerID": "915",
        "name": "Phạm Văn Cảnh",
        "phone": "79005343",
        "address": "Hà Nội",
        "cmnd": "93358077"
      },
      "fileURL": "talk915.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "55s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb1fc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1fb"
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
              "_id": "62ebc0e18a312c984bbdb1fe"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1fd"
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
              "_id": "62ebc0e18a312c984bbdb200"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb1ff"
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
              "_id": "62ebc0e18a312c984bbdb202"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb201"
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
              "_id": "62ebc0e18a312c984bbdb204"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb203"
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
              "_id": "62ebc0e18a312c984bbdb206"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb205"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb1e2",
    "audioID": 915,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 914,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1e4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1e5"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1e6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb1e7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb1e8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1e9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb1ea"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1eb"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1ec"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb1ed"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb1ee"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb1e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 915,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb1f0"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb1f1"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1f2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb1f3"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1f4"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb1f5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1f6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb1f7"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb1f8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb1f9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb1fa"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb1ef"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "916",
        "name": "Nguyễn Hữu Hồng",
        "cty": "ABC",
        "hotline": "16010266"
      },
      "customer": {
        "customerID": "916",
        "name": "Phan Hữu Lợi",
        "phone": "60246808",
        "address": "Hà Nội",
        "cmnd": "69352202"
      },
      "fileURL": "talk916.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "38s",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb221"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb220"
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
              "_id": "62ebc0e18a312c984bbdb223"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb222"
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
              "_id": "62ebc0e18a312c984bbdb225"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb224"
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
              "_id": "62ebc0e18a312c984bbdb227"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb226"
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
              "_id": "62ebc0e18a312c984bbdb229"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb228"
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
              "_id": "62ebc0e18a312c984bbdb22b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb22a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb207",
    "audioID": 916,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 915,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb209"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb20a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb20b"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb20c"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb20d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb20e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb20f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb210"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb211"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb212"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb213"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb208"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 916,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb215"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb216"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb217"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb218"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb219"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb21a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb21b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb21c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb21d"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb21e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb21f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb214"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "917",
        "name": "Trương Quốc Khánh",
        "cty": "ABC",
        "hotline": "16071454"
      },
      "customer": {
        "customerID": "917",
        "name": "Lê Văn Cảnh",
        "phone": "50275250",
        "address": "Hà Nội",
        "cmnd": "20153160"
      },
      "fileURL": "talk917.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "479s",
      "date": "24/10/2022",
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
              "_id": "62ebc0e18a312c984bbdb246"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb245"
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
              "_id": "62ebc0e18a312c984bbdb248"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb247"
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
              "_id": "62ebc0e18a312c984bbdb24a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb249"
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
              "_id": "62ebc0e18a312c984bbdb24c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb24b"
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
              "_id": "62ebc0e18a312c984bbdb24e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb24d"
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
              "_id": "62ebc0e18a312c984bbdb250"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb24f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb22c",
    "audioID": 917,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 916,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb22e"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb22f"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb230"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb231"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb232"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb233"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb234"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb235"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb236"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb237"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb238"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb22d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 917,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb23a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb23b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb23c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb23d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb23e"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb23f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb240"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb241"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb242"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb243"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb244"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb239"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "918",
        "name": "Trần Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "44783307"
      },
      "customer": {
        "customerID": "918",
        "name": "Nguyễn Phương An",
        "phone": "40173148",
        "address": "Hà Nội",
        "cmnd": "13386935"
      },
      "fileURL": "talk918.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "34s",
      "date": "4/5/2022",
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
              "_id": "62ebc0e18a312c984bbdb26b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb26a"
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
              "_id": "62ebc0e18a312c984bbdb26d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb26c"
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
              "_id": "62ebc0e18a312c984bbdb26f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb26e"
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
              "_id": "62ebc0e18a312c984bbdb271"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb270"
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
              "_id": "62ebc0e18a312c984bbdb273"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb272"
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
              "_id": "62ebc0e18a312c984bbdb275"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb274"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb251",
    "audioID": 918,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 917,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb253"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb254"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb255"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb256"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb257"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb258"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb259"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb25a"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb25b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb25c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb25d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb252"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 918,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb25f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb260"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb261"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb262"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb263"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb264"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb265"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb266"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb267"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb268"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb269"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb25e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "919",
        "name": "Trần Hữu Khánh",
        "cty": "ABC",
        "hotline": "16019783"
      },
      "customer": {
        "customerID": "919",
        "name": "Huỳnh Minh Quyền",
        "phone": "90762008",
        "address": "Hà Nội",
        "cmnd": "82932203"
      },
      "fileURL": "talk919.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "491s",
      "date": "27/10/2022",
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
              "_id": "62ebc0e18a312c984bbdb290"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb28f"
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
              "_id": "62ebc0e18a312c984bbdb292"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb291"
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
              "_id": "62ebc0e18a312c984bbdb294"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb293"
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
              "_id": "62ebc0e18a312c984bbdb296"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb295"
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
              "_id": "62ebc0e18a312c984bbdb298"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb297"
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
              "_id": "62ebc0e18a312c984bbdb29a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb299"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb276",
    "audioID": 919,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 918,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb278"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb279"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb27a"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb27b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb27c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb27d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb27e"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb27f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb280"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb281"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb282"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb277"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 919,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb284"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb285"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb286"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb287"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb288"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb289"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb28a"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb28b"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb28c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb28d"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb28e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb283"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "920",
        "name": "Nguyễn Hải Ánh",
        "cty": "ABC",
        "hotline": "54602009"
      },
      "customer": {
        "customerID": "920",
        "name": "Trương Khánh Ánh",
        "phone": "58078566",
        "address": "Hà Nội",
        "cmnd": "37866986"
      },
      "fileURL": "talk920.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "25s",
      "date": "23/6/2022",
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
              "_id": "62ebc0e18a312c984bbdb2b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2b4"
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
              "_id": "62ebc0e18a312c984bbdb2b7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2b6"
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
              "_id": "62ebc0e18a312c984bbdb2b9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2b8"
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
              "_id": "62ebc0e18a312c984bbdb2bb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2ba"
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
              "_id": "62ebc0e18a312c984bbdb2bd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2bc"
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
              "_id": "62ebc0e18a312c984bbdb2bf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2be"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb29b",
    "audioID": 920,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 919,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb29d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb29e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb29f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2a0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2a1"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2a2"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2a3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2a4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb2a5"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb2a6"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2a7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb29c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 920,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2a9"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2aa"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2ab"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2ac"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb2ad"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2ae"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb2af"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb2b0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2b1"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb2b2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2b3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb2a8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "921",
        "name": "Bùi Phương Hồng",
        "cty": "ABC",
        "hotline": "31794589"
      },
      "customer": {
        "customerID": "921",
        "name": "Bùi An Cảnh",
        "phone": "37831602",
        "address": "Hà Nội",
        "cmnd": "65632811"
      },
      "fileURL": "talk921.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "76s",
      "date": "7/6/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb2da"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2d9"
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
              "_id": "62ebc0e18a312c984bbdb2dc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2db"
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
              "_id": "62ebc0e18a312c984bbdb2de"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2dd"
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
              "_id": "62ebc0e18a312c984bbdb2e0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2df"
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
              "_id": "62ebc0e18a312c984bbdb2e2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2e1"
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
              "_id": "62ebc0e18a312c984bbdb2e4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2e3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb2c0",
    "audioID": 921,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 920,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2c2"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb2c3"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb2c4"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2c5"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2c6"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2c7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2c8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2c9"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2ca"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2cb"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2cc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb2c1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 921,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2ce"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2cf"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb2d0"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2d1"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb2d2"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2d3"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2d4"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2d5"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2d6"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2d7"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2d8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb2cd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "922",
        "name": "Lê Thị Lợi",
        "cty": "ABC",
        "hotline": "72107678"
      },
      "customer": {
        "customerID": "922",
        "name": "Trương Minh Lợi",
        "phone": "19438343",
        "address": "Hà Nội",
        "cmnd": "13861613"
      },
      "fileURL": "talk922.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "120s",
      "date": "22/5/2022",
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
              "_id": "62ebc0e18a312c984bbdb2ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb2fe"
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
              "_id": "62ebc0e18a312c984bbdb301"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb300"
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
              "_id": "62ebc0e18a312c984bbdb303"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb302"
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
              "_id": "62ebc0e18a312c984bbdb305"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb304"
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
              "_id": "62ebc0e18a312c984bbdb307"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb306"
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
              "_id": "62ebc0e18a312c984bbdb309"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb308"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb2e5",
    "audioID": 922,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 921,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2e7"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2e8"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb2e9"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2ea"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2eb"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2ec"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb2ed"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb2ee"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2ef"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2f0"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2f1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb2e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 922,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2f3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb2f4"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb2f5"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2f6"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2f7"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb2f8"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb2f9"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb2fa"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb2fb"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb2fc"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb2fd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb2f2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "923",
        "name": "Phan Thị Hồng",
        "cty": "ABC",
        "hotline": "88545571"
      },
      "customer": {
        "customerID": "923",
        "name": "Phạm Hải Hồng",
        "phone": "46441142",
        "address": "Hà Nội",
        "cmnd": "94753095"
      },
      "fileURL": "talk923.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "567s",
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
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb324"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb323"
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
              "_id": "62ebc0e18a312c984bbdb326"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb325"
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
              "_id": "62ebc0e18a312c984bbdb328"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb327"
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
              "_id": "62ebc0e18a312c984bbdb32a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb329"
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
              "_id": "62ebc0e18a312c984bbdb32c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb32b"
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
              "_id": "62ebc0e18a312c984bbdb32e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb32d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb30a",
    "audioID": 923,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 922,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb30c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb30d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb30e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb30f"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb310"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb311"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb312"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb313"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb314"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb315"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb316"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb30b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 923,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb318"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb319"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb31a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb31b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb31c"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb31d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb31e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb31f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb320"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb321"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb322"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb317"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "924",
        "name": "Phan Thị Duy",
        "cty": "ABC",
        "hotline": "70185375"
      },
      "customer": {
        "customerID": "924",
        "name": "Trương Văn Thái Qúy",
        "phone": "29731886",
        "address": "Hà Nội",
        "cmnd": "63602749"
      },
      "fileURL": "talk924.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "456s",
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
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb349"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb348"
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
              "_id": "62ebc0e18a312c984bbdb34b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb34a"
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
              "_id": "62ebc0e18a312c984bbdb34d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb34c"
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
              "_id": "62ebc0e18a312c984bbdb34f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb34e"
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
              "_id": "62ebc0e18a312c984bbdb351"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb350"
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
              "_id": "62ebc0e18a312c984bbdb353"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb352"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb32f",
    "audioID": 924,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 923,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb331"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb332"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb333"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb334"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb335"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb336"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb337"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb338"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb339"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb33a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb33b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb330"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 924,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb33d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb33e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb33f"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb340"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb341"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb342"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb343"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb344"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb345"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb346"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb347"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb33c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "925",
        "name": "Đặng Dương Dạ",
        "cty": "ABC",
        "hotline": "77685905"
      },
      "customer": {
        "customerID": "925",
        "name": "Trần Hữu Khánh",
        "phone": "37760517",
        "address": "Hà Nội",
        "cmnd": "31697784"
      },
      "fileURL": "talk925.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "389s",
      "date": "30/1/2022",
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
              "_id": "62ebc0e18a312c984bbdb36e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb36d"
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
              "_id": "62ebc0e18a312c984bbdb370"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb36f"
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
              "_id": "62ebc0e18a312c984bbdb372"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb371"
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
              "_id": "62ebc0e18a312c984bbdb374"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb373"
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
              "_id": "62ebc0e18a312c984bbdb376"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb375"
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
              "_id": "62ebc0e18a312c984bbdb378"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb377"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb354",
    "audioID": 925,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 924,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb356"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb357"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb358"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb359"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb35a"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb35b"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb35c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb35d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb35e"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb35f"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb360"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb355"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 925,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb362"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb363"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb364"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb365"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb366"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb367"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb368"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb369"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb36a"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb36b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb36c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb361"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "926",
        "name": "Nguyễn Khánh Hồng",
        "cty": "ABC",
        "hotline": "93260809"
      },
      "customer": {
        "customerID": "926",
        "name": "Phạm Hữu Lợi",
        "phone": "39975702",
        "address": "Hà Nội",
        "cmnd": "24798412"
      },
      "fileURL": "talk926.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "559s",
      "date": "18/3/2022",
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
              "_id": "62ebc0e18a312c984bbdb393"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb392"
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
              "_id": "62ebc0e18a312c984bbdb395"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb394"
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
              "_id": "62ebc0e18a312c984bbdb397"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb396"
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
              "_id": "62ebc0e18a312c984bbdb399"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb398"
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
              "_id": "62ebc0e18a312c984bbdb39b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb39a"
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
              "_id": "62ebc0e18a312c984bbdb39d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb39c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb379",
    "audioID": 926,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 925,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb37b"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb37c"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb37d"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb37e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb37f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb380"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb381"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb382"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb383"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb384"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb385"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb37a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 926,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb387"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb388"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb389"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb38a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb38b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb38c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb38d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb38e"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb38f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb390"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb391"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb386"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "927",
        "name": "Bùi Minh Cảnh",
        "cty": "ABC",
        "hotline": "13663307"
      },
      "customer": {
        "customerID": "927",
        "name": "Phan Thị Khánh",
        "phone": "95056131",
        "address": "Hà Nội",
        "cmnd": "59997750"
      },
      "fileURL": "talk927.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "174s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb3b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3b7"
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
              "_id": "62ebc0e18a312c984bbdb3ba"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3b9"
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
              "_id": "62ebc0e18a312c984bbdb3bc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3bb"
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
              "_id": "62ebc0e18a312c984bbdb3be"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3bd"
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
              "_id": "62ebc0e18a312c984bbdb3c0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3bf"
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
              "_id": "62ebc0e18a312c984bbdb3c2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3c1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb39e",
    "audioID": 927,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 926,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3a0"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3a1"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3a2"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3a3"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3a4"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3a5"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3a6"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3a7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3a8"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb3a9"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb3aa"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb39f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 927,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3ac"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3ad"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3ae"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3af"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb3b0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb3b1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3b2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3b3"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3b4"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3b5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3b6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb3ab"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "928",
        "name": "Bùi Khánh Dạ",
        "cty": "ABC",
        "hotline": "41152709"
      },
      "customer": {
        "customerID": "928",
        "name": "Trương Quốc Hồng",
        "phone": "28180145",
        "address": "Hà Nội",
        "cmnd": "25049549"
      },
      "fileURL": "talk928.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "185s",
      "date": "30/7/2022",
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
              "_id": "62ebc0e18a312c984bbdb3dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3dc"
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
              "_id": "62ebc0e18a312c984bbdb3df"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3de"
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
              "_id": "62ebc0e18a312c984bbdb3e1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3e0"
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
              "_id": "62ebc0e18a312c984bbdb3e3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3e2"
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
              "_id": "62ebc0e18a312c984bbdb3e5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3e4"
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
              "_id": "62ebc0e18a312c984bbdb3e7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb3e6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb3c3",
    "audioID": 928,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 927,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3c5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3c6"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3c7"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3c8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3c9"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3ca"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb3cb"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb3cc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3cd"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3ce"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3cf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb3c4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 928,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3d1"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3d2"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3d3"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3d4"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb3d5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3d6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3d7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb3d8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3d9"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3da"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3db"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb3d0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "929",
        "name": "Lê Hữu Cảnh",
        "cty": "ABC",
        "hotline": "78600304"
      },
      "customer": {
        "customerID": "929",
        "name": "Phan Phương Cảnh",
        "phone": "22375191",
        "address": "Hà Nội",
        "cmnd": "46328815"
      },
      "fileURL": "talk929.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "460s",
      "date": "5/11/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb402"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb401"
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
              "_id": "62ebc0e18a312c984bbdb404"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb403"
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
              "_id": "62ebc0e18a312c984bbdb406"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb405"
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
              "_id": "62ebc0e18a312c984bbdb408"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb407"
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
              "_id": "62ebc0e18a312c984bbdb40a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb409"
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
              "_id": "62ebc0e18a312c984bbdb40c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb40b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb3e8",
    "audioID": 929,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 928,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb3ea"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3eb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb3ec"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3ed"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3ee"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb3ef"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3f0"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb3f1"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb3f2"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3f3"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb3f4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb3e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 929,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb3f6"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3f7"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3f8"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb3f9"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3fa"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb3fb"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb3fc"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3fd"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3fe"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb3ff"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb400"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb3f5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "930",
        "name": "Lê Thị Hồng",
        "cty": "ABC",
        "hotline": "10547485"
      },
      "customer": {
        "customerID": "930",
        "name": "Trần Phương Khánh",
        "phone": "51389716",
        "address": "Hà Nội",
        "cmnd": "96174094"
      },
      "fileURL": "talk930.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "107s",
      "date": "9/1/2022",
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
              "_id": "62ebc0e18a312c984bbdb427"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb426"
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
              "_id": "62ebc0e18a312c984bbdb429"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb428"
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
              "_id": "62ebc0e18a312c984bbdb42b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb42a"
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
              "_id": "62ebc0e18a312c984bbdb42d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb42c"
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
              "_id": "62ebc0e18a312c984bbdb42f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb42e"
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
              "_id": "62ebc0e18a312c984bbdb431"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb430"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb40d",
    "audioID": 930,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 929,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb40f"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb410"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb411"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb412"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb413"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb414"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb415"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb416"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb417"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb418"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb419"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb40e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 930,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb41b"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb41c"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb41d"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb41e"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb41f"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb420"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb421"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb422"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb423"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb424"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb425"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb41a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "931",
        "name": "Đặng Thị Ánh",
        "cty": "ABC",
        "hotline": "13891973"
      },
      "customer": {
        "customerID": "931",
        "name": "Huỳnh An Dạ",
        "phone": "10056742",
        "address": "Hà Nội",
        "cmnd": "64932556"
      },
      "fileURL": "talk931.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "234s",
      "date": "19/4/2022",
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
              "_id": "62ebc0e18a312c984bbdb44c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb44b"
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
              "_id": "62ebc0e18a312c984bbdb44e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb44d"
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
              "_id": "62ebc0e18a312c984bbdb450"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb44f"
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
              "_id": "62ebc0e18a312c984bbdb452"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb451"
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
              "_id": "62ebc0e18a312c984bbdb454"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb453"
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
              "_id": "62ebc0e18a312c984bbdb456"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb455"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb432",
    "audioID": 931,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 930,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb434"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb435"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb436"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb437"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb438"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb439"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb43a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb43b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb43c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb43d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb43e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb433"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 931,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb440"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb441"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb442"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb443"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb444"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb445"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb446"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb447"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb448"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb449"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb44a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb43f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "932",
        "name": "Phan Phương Ánh",
        "cty": "ABC",
        "hotline": "63126665"
      },
      "customer": {
        "customerID": "932",
        "name": "Phạm Thị Thái Qúy",
        "phone": "86100262",
        "address": "Hà Nội",
        "cmnd": "89280731"
      },
      "fileURL": "talk932.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "356s",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb471"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb470"
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
              "_id": "62ebc0e18a312c984bbdb473"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb472"
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
              "_id": "62ebc0e18a312c984bbdb475"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb474"
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
              "_id": "62ebc0e18a312c984bbdb477"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb476"
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
              "_id": "62ebc0e18a312c984bbdb479"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb478"
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
              "_id": "62ebc0e18a312c984bbdb47b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb47a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb457",
    "audioID": 932,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 931,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb459"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb45a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb45b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb45c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb45d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb45e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb45f"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb460"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb461"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb462"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb463"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb458"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 932,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb465"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb466"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb467"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb468"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb469"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb46a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb46b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb46c"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb46d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb46e"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb46f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb464"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "933",
        "name": "Ngô Hải Quyền",
        "cty": "ABC",
        "hotline": "66567001"
      },
      "customer": {
        "customerID": "933",
        "name": "Nguyễn Minh Hồng",
        "phone": "53434415",
        "address": "Hà Nội",
        "cmnd": "77816848"
      },
      "fileURL": "talk933.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "474s",
      "date": "28/12/2022",
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
              "_id": "62ebc0e18a312c984bbdb496"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb495"
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
              "_id": "62ebc0e18a312c984bbdb498"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb497"
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
              "_id": "62ebc0e18a312c984bbdb49a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb499"
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
              "_id": "62ebc0e18a312c984bbdb49c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb49b"
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
              "_id": "62ebc0e18a312c984bbdb49e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb49d"
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
              "_id": "62ebc0e18a312c984bbdb4a0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb49f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb47c",
    "audioID": 933,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 932,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb47e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb47f"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb480"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb481"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb482"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb483"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb484"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb485"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb486"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb487"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb488"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb47d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 933,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb48a"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb48b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb48c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb48d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb48e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb48f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb490"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb491"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb492"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb493"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb494"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb489"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "934",
        "name": "Phạm Hữu Quyền",
        "cty": "ABC",
        "hotline": "95243251"
      },
      "customer": {
        "customerID": "934",
        "name": "Ngô Quốc Hồng",
        "phone": "38136751",
        "address": "Hà Nội",
        "cmnd": "27838198"
      },
      "fileURL": "talk934.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "109s",
      "date": "23/2/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb4bb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4ba"
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
              "_id": "62ebc0e18a312c984bbdb4bd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4bc"
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
              "_id": "62ebc0e18a312c984bbdb4bf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4be"
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
              "_id": "62ebc0e18a312c984bbdb4c1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4c0"
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
              "_id": "62ebc0e18a312c984bbdb4c3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4c2"
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
              "_id": "62ebc0e18a312c984bbdb4c5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4c4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb4a1",
    "audioID": 934,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 933,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4a3"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4a4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4a5"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4a6"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb4a7"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4a8"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4a9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb4aa"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4ab"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4ac"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4ad"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4a2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 934,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4af"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4b0"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4b1"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4b2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4b3"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb4b4"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4b5"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb4b6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4b7"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb4b8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb4b9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4ae"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "935",
        "name": "Lê Phương Hồng",
        "cty": "ABC",
        "hotline": "64231758"
      },
      "customer": {
        "customerID": "935",
        "name": "Lê Dương Cảnh",
        "phone": "10293421",
        "address": "Hà Nội",
        "cmnd": "48997839"
      },
      "fileURL": "talk935.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "211s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb4e0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4df"
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
              "_id": "62ebc0e18a312c984bbdb4e2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4e1"
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
              "_id": "62ebc0e18a312c984bbdb4e4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4e3"
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
              "_id": "62ebc0e18a312c984bbdb4e6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4e5"
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
              "_id": "62ebc0e18a312c984bbdb4e8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4e7"
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
              "_id": "62ebc0e18a312c984bbdb4ea"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb4e9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb4c6",
    "audioID": 935,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 934,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4c8"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb4c9"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4ca"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4cb"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb4cc"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4cd"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4ce"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4cf"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4d0"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4d1"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb4d2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4c7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 935,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4d4"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4d5"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb4d6"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb4d7"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb4d8"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4d9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb4da"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4db"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb4dc"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4dd"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4de"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4d3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "936",
        "name": "Bùi Hữu Quyền",
        "cty": "ABC",
        "hotline": "26615522"
      },
      "customer": {
        "customerID": "936",
        "name": "Phạm Văn Khánh",
        "phone": "73563687",
        "address": "Hà Nội",
        "cmnd": "59121754"
      },
      "fileURL": "talk936.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "24s",
      "date": "12/8/2022",
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
              "_id": "62ebc0e18a312c984bbdb505"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb504"
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
              "_id": "62ebc0e18a312c984bbdb507"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb506"
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
              "_id": "62ebc0e18a312c984bbdb509"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb508"
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
              "_id": "62ebc0e18a312c984bbdb50b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb50a"
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
              "_id": "62ebc0e18a312c984bbdb50d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb50c"
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
              "_id": "62ebc0e18a312c984bbdb50f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb50e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb4eb",
    "audioID": 936,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 935,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4ed"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4ee"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4ef"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4f0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4f1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb4f2"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4f3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb4f4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4f5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb4f6"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb4f7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4ec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 936,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb4f9"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb4fa"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb4fb"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb4fc"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb4fd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb4fe"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb4ff"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb500"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb501"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb502"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb503"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb4f8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "937",
        "name": "Phạm Hữu Lợi",
        "cty": "ABC",
        "hotline": "37284222"
      },
      "customer": {
        "customerID": "937",
        "name": "Lê An An",
        "phone": "82155475",
        "address": "Hà Nội",
        "cmnd": "12001238"
      },
      "fileURL": "talk937.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "354s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb52a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb529"
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
              "_id": "62ebc0e18a312c984bbdb52c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb52b"
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
              "_id": "62ebc0e18a312c984bbdb52e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb52d"
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
              "_id": "62ebc0e18a312c984bbdb530"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb52f"
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
              "_id": "62ebc0e18a312c984bbdb532"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb531"
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
              "_id": "62ebc0e18a312c984bbdb534"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb533"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb510",
    "audioID": 937,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 936,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb512"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb513"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb514"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb515"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb516"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb517"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb518"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb519"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb51a"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb51b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb51c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb511"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 937,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb51e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb51f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb520"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb521"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb522"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb523"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb524"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb525"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb526"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb527"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb528"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb51d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "938",
        "name": "Nguyễn Phương Lợi",
        "cty": "ABC",
        "hotline": "26086530"
      },
      "customer": {
        "customerID": "938",
        "name": "Lê Hải Dạ",
        "phone": "67915117",
        "address": "Hà Nội",
        "cmnd": "74445445"
      },
      "fileURL": "talk938.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "165s",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb54f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb54e"
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
              "_id": "62ebc0e18a312c984bbdb551"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb550"
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
              "_id": "62ebc0e18a312c984bbdb553"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb552"
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
              "_id": "62ebc0e18a312c984bbdb555"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb554"
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
              "_id": "62ebc0e18a312c984bbdb557"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb556"
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
              "_id": "62ebc0e18a312c984bbdb559"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb558"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb535",
    "audioID": 938,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 937,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb537"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb538"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb539"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb53a"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb53b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb53c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb53d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb53e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb53f"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb540"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb541"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb536"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 938,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb543"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb544"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb545"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb546"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb547"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb548"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb549"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb54a"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb54b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb54c"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb54d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb542"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "939",
        "name": "Ngô Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "78590974"
      },
      "customer": {
        "customerID": "939",
        "name": "Nguyễn An Dạ",
        "phone": "81690243",
        "address": "Hà Nội",
        "cmnd": "46721772"
      },
      "fileURL": "talk939.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "415s",
      "date": "5/10/2022",
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
              "_id": "62ebc0e18a312c984bbdb574"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb573"
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
              "_id": "62ebc0e18a312c984bbdb576"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb575"
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
              "_id": "62ebc0e18a312c984bbdb578"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb577"
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
              "_id": "62ebc0e18a312c984bbdb57a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb579"
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
              "_id": "62ebc0e18a312c984bbdb57c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb57b"
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
              "_id": "62ebc0e18a312c984bbdb57e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb57d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb55a",
    "audioID": 939,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 938,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb55c"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb55d"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb55e"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb55f"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb560"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb561"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb562"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb563"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb564"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb565"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb566"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb55b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 939,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb568"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb569"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb56a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb56b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb56c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb56d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb56e"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb56f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb570"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb571"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb572"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb567"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "940",
        "name": "Trương Hải Dạ",
        "cty": "ABC",
        "hotline": "20176940"
      },
      "customer": {
        "customerID": "940",
        "name": "Trần An Ánh",
        "phone": "10083755",
        "address": "Hà Nội",
        "cmnd": "52078954"
      },
      "fileURL": "talk940.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "93s",
      "date": "22/12/2022",
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
              "_id": "62ebc0e18a312c984bbdb599"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb598"
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
              "_id": "62ebc0e18a312c984bbdb59b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb59a"
        },
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
              "_id": "62ebc0e18a312c984bbdb59d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb59c"
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
              "_id": "62ebc0e18a312c984bbdb59f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb59e"
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
              "_id": "62ebc0e18a312c984bbdb5a1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5a0"
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
              "_id": "62ebc0e18a312c984bbdb5a3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5a2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb57f",
    "audioID": 940,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 939,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb581"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb582"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb583"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb584"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb585"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb586"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb587"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb588"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb589"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb58a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb58b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb580"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 940,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb58d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb58e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb58f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb590"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb591"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb592"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb593"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb594"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb595"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb596"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb597"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb58c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "941",
        "name": "Nguyễn Hải An",
        "cty": "ABC",
        "hotline": "12174728"
      },
      "customer": {
        "customerID": "941",
        "name": "Phan Văn Dạ",
        "phone": "23851142",
        "address": "Hà Nội",
        "cmnd": "24203068"
      },
      "fileURL": "talk941.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "99s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb5be"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5bd"
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
              "_id": "62ebc0e18a312c984bbdb5c0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5bf"
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
              "_id": "62ebc0e18a312c984bbdb5c2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5c1"
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
              "_id": "62ebc0e18a312c984bbdb5c4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5c3"
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
              "_id": "62ebc0e18a312c984bbdb5c6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5c5"
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
              "_id": "62ebc0e18a312c984bbdb5c8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5c7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb5a4",
    "audioID": 941,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 940,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5a6"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5a7"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5a8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5a9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5aa"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5ab"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5ac"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5ad"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb5ae"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5af"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5b0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5a5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 941,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5b2"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5b3"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb5b4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5b5"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb5b6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5b7"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5b8"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5b9"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5ba"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5bb"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5bc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5b1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "942",
        "name": "Đặng Dương Duy",
        "cty": "ABC",
        "hotline": "27628347"
      },
      "customer": {
        "customerID": "942",
        "name": "Lê Thị Khánh",
        "phone": "84240541",
        "address": "Hà Nội",
        "cmnd": "52042456"
      },
      "fileURL": "talk942.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "32s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb5e3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5e2"
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
              "_id": "62ebc0e18a312c984bbdb5e5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5e4"
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
              "_id": "62ebc0e18a312c984bbdb5e7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5e6"
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
              "_id": "62ebc0e18a312c984bbdb5e9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5e8"
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
              "_id": "62ebc0e18a312c984bbdb5eb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5ea"
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
              "_id": "62ebc0e18a312c984bbdb5ed"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb5ec"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb5c9",
    "audioID": 942,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 941,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb5cb"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5cc"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5cd"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5ce"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5cf"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5d0"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5d1"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb5d2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5d3"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5d4"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5d5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5ca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 942,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5d7"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb5d8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb5d9"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb5da"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5db"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb5dc"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb5dd"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb5de"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5df"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5e0"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb5e1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5d6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "943",
        "name": "Ngô Quốc Dạ",
        "cty": "ABC",
        "hotline": "85951841"
      },
      "customer": {
        "customerID": "943",
        "name": "Phạm Phương An",
        "phone": "36423650",
        "address": "Hà Nội",
        "cmnd": "28975956"
      },
      "fileURL": "talk943.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "42s",
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
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb608"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb607"
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
              "_id": "62ebc0e18a312c984bbdb60a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb609"
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
              "_id": "62ebc0e18a312c984bbdb60c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb60b"
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
              "_id": "62ebc0e18a312c984bbdb60e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb60d"
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
              "_id": "62ebc0e18a312c984bbdb610"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb60f"
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
              "_id": "62ebc0e18a312c984bbdb612"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb611"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb5ee",
    "audioID": 943,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 942,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb5f0"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5f1"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5f2"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5f3"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb5f4"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb5f5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb5f6"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb5f7"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5f8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5f9"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5fa"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5ef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 943,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb5fc"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb5fd"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb5fe"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb5ff"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb600"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb601"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb602"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb603"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb604"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb605"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb606"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb5fb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "944",
        "name": "Trần Phương Lợi",
        "cty": "ABC",
        "hotline": "52244384"
      },
      "customer": {
        "customerID": "944",
        "name": "Ngô Quốc Ánh",
        "phone": "99456607",
        "address": "Hà Nội",
        "cmnd": "83123025"
      },
      "fileURL": "talk944.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "590s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb62d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb62c"
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
              "_id": "62ebc0e18a312c984bbdb62f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb62e"
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
              "_id": "62ebc0e18a312c984bbdb631"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb630"
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
              "_id": "62ebc0e18a312c984bbdb633"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb632"
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
              "_id": "62ebc0e18a312c984bbdb635"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb634"
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
              "_id": "62ebc0e18a312c984bbdb637"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb636"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb613",
    "audioID": 944,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 943,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb615"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb616"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb617"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb618"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb619"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb61a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb61b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb61c"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb61d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb61e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb61f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb614"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 944,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb621"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb622"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb623"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb624"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb625"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb626"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb627"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb628"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb629"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb62a"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb62b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb620"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "945",
        "name": "Đặng Phương Lợi",
        "cty": "ABC",
        "hotline": "98697845"
      },
      "customer": {
        "customerID": "945",
        "name": "Bùi Hữu Dạ",
        "phone": "93244682",
        "address": "Hà Nội",
        "cmnd": "96968372"
      },
      "fileURL": "talk945.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "174s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb652"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb651"
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
              "_id": "62ebc0e18a312c984bbdb654"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb653"
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
              "_id": "62ebc0e18a312c984bbdb656"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb655"
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
              "_id": "62ebc0e18a312c984bbdb658"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb657"
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
              "_id": "62ebc0e18a312c984bbdb65a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb659"
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
              "_id": "62ebc0e18a312c984bbdb65c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb65b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb638",
    "audioID": 945,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 944,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb63a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb63b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb63c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb63d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb63e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb63f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb640"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb641"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb642"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb643"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb644"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb639"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 945,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb646"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb647"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb648"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb649"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb64a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb64b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb64c"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb64d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb64e"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb64f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb650"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb645"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "946",
        "name": "Trần Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "32671951"
      },
      "customer": {
        "customerID": "946",
        "name": "Đặng Phương Lợi",
        "phone": "40331580",
        "address": "Hà Nội",
        "cmnd": "58458275"
      },
      "fileURL": "talk946.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "576s",
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
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb677"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb676"
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
              "_id": "62ebc0e18a312c984bbdb679"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb678"
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
              "_id": "62ebc0e18a312c984bbdb67b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb67a"
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
              "_id": "62ebc0e18a312c984bbdb67d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb67c"
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
              "_id": "62ebc0e18a312c984bbdb67f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb67e"
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
              "_id": "62ebc0e18a312c984bbdb681"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb680"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb65d",
    "audioID": 946,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 945,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb65f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb660"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb661"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb662"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb663"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb664"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb665"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb666"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb667"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb668"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb669"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb65e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 946,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb66b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb66c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb66d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb66e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb66f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb670"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb671"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb672"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb673"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb674"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb675"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb66a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "947",
        "name": "Phạm Hữu Lợi",
        "cty": "ABC",
        "hotline": "38299126"
      },
      "customer": {
        "customerID": "947",
        "name": "Huỳnh Phương Hồng",
        "phone": "79738764",
        "address": "Hà Nội",
        "cmnd": "55685191"
      },
      "fileURL": "talk947.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "525s",
      "date": "26/6/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb69c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb69b"
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
              "_id": "62ebc0e18a312c984bbdb69e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb69d"
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
              "_id": "62ebc0e18a312c984bbdb6a0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb69f"
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
              "_id": "62ebc0e18a312c984bbdb6a2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6a1"
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
              "_id": "62ebc0e18a312c984bbdb6a4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6a3"
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
              "_id": "62ebc0e18a312c984bbdb6a6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6a5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb682",
    "audioID": 947,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 946,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb684"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb685"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb686"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb687"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb688"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb689"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb68a"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb68b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb68c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb68d"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb68e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb683"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 947,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb690"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb691"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb692"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb693"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb694"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb695"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb696"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb697"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb698"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb699"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb69a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb68f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "948",
        "name": "Nguyễn Hữu Khánh",
        "cty": "ABC",
        "hotline": "14348447"
      },
      "customer": {
        "customerID": "948",
        "name": "Trương Phương Quyền",
        "phone": "99173340",
        "address": "Hà Nội",
        "cmnd": "82637568"
      },
      "fileURL": "talk948.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "325s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb6c1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6c0"
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
              "_id": "62ebc0e18a312c984bbdb6c3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6c2"
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
              "_id": "62ebc0e18a312c984bbdb6c5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6c4"
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
              "_id": "62ebc0e18a312c984bbdb6c7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6c6"
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
              "_id": "62ebc0e18a312c984bbdb6c9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6c8"
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
              "_id": "62ebc0e18a312c984bbdb6cb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6ca"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb6a7",
    "audioID": 948,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 947,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6a9"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6aa"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb6ab"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb6ac"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb6ad"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6ae"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6af"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb6b0"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6b1"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6b2"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6b3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6a8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 948,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb6b5"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb6b6"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb6b7"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb6b8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb6b9"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6ba"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb6bb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6bc"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb6bd"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb6be"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb6bf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6b4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "949",
        "name": "Trần Văn Lợi",
        "cty": "ABC",
        "hotline": "39646290"
      },
      "customer": {
        "customerID": "949",
        "name": "Nguyễn Quốc Cảnh",
        "phone": "84536936",
        "address": "Hà Nội",
        "cmnd": "56623555"
      },
      "fileURL": "talk949.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "393s",
      "date": "27/11/2022",
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
              "_id": "62ebc0e18a312c984bbdb6e6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6e5"
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
              "_id": "62ebc0e18a312c984bbdb6e8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6e7"
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
              "_id": "62ebc0e18a312c984bbdb6ea"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6e9"
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
              "_id": "62ebc0e18a312c984bbdb6ec"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6eb"
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
              "_id": "62ebc0e18a312c984bbdb6ee"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6ed"
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
              "_id": "62ebc0e18a312c984bbdb6f0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb6ef"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb6cc",
    "audioID": 949,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 948,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6ce"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6cf"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6d0"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb6d1"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb6d2"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6d3"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6d4"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6d5"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb6d6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6d7"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6d8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6cd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 949,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb6da"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6db"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6dc"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6dd"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6de"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb6df"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6e0"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6e1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb6e2"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6e3"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb6e4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6d9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "950",
        "name": "Nguyễn An Cảnh",
        "cty": "ABC",
        "hotline": "29719279"
      },
      "customer": {
        "customerID": "950",
        "name": "Lê Quốc Khánh",
        "phone": "12496112",
        "address": "Hà Nội",
        "cmnd": "66919798"
      },
      "fileURL": "talk950.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "522s",
      "date": "3/9/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb70b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb70a"
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
              "_id": "62ebc0e18a312c984bbdb70d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb70c"
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
              "_id": "62ebc0e18a312c984bbdb70f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb70e"
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
              "_id": "62ebc0e18a312c984bbdb711"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb710"
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
              "_id": "62ebc0e18a312c984bbdb713"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb712"
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
              "_id": "62ebc0e18a312c984bbdb715"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb714"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb6f1",
    "audioID": 950,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 949,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6f3"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6f4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6f5"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6f6"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb6f7"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6f8"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb6f9"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb6fa"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb6fb"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb6fc"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb6fd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6f2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 950,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb6ff"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb700"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb701"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb702"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb703"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb704"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb705"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb706"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb707"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb708"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb709"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb6fe"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "951",
        "name": "Phạm Khánh Quyền",
        "cty": "ABC",
        "hotline": "69584100"
      },
      "customer": {
        "customerID": "951",
        "name": "Ngô Dương Quyền",
        "phone": "74024199",
        "address": "Hà Nội",
        "cmnd": "52879840"
      },
      "fileURL": "talk951.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "42s",
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
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb730"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb72f"
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
              "_id": "62ebc0e18a312c984bbdb732"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb731"
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
              "_id": "62ebc0e18a312c984bbdb734"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb733"
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
              "_id": "62ebc0e18a312c984bbdb736"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb735"
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
              "_id": "62ebc0e18a312c984bbdb738"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb737"
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
              "_id": "62ebc0e18a312c984bbdb73a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb739"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb716",
    "audioID": 951,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 950,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb718"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb719"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb71a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb71b"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb71c"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb71d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb71e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb71f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb720"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb721"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb722"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb717"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 951,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb724"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb725"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb726"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb727"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb728"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb729"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb72a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb72b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb72c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb72d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb72e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb723"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "952",
        "name": "Phan Hữu Ánh",
        "cty": "ABC",
        "hotline": "59108199"
      },
      "customer": {
        "customerID": "952",
        "name": "Nguyễn Hải Cảnh",
        "phone": "48016592",
        "address": "Hà Nội",
        "cmnd": "62792671"
      },
      "fileURL": "talk952.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "210s",
      "date": "27/8/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb755"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb754"
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
              "_id": "62ebc0e18a312c984bbdb757"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb756"
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
              "_id": "62ebc0e18a312c984bbdb759"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb758"
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
              "_id": "62ebc0e18a312c984bbdb75b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb75a"
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
              "_id": "62ebc0e18a312c984bbdb75d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb75c"
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
              "_id": "62ebc0e18a312c984bbdb75f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb75e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb73b",
    "audioID": 952,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 951,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb73d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb73e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb73f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb740"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb741"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb742"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb743"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb744"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb745"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb746"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb747"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb73c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 952,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb749"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb74a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb74b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb74c"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb74d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb74e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb74f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb750"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb751"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb752"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb753"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb748"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "953",
        "name": "Trương Dương Cảnh",
        "cty": "ABC",
        "hotline": "87585987"
      },
      "customer": {
        "customerID": "953",
        "name": "Đặng Quốc Cảnh",
        "phone": "96933149",
        "address": "Hà Nội",
        "cmnd": "98249642"
      },
      "fileURL": "talk953.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "13s",
      "date": "15/2/2022",
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
              "_id": "62ebc0e18a312c984bbdb77a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb779"
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
              "_id": "62ebc0e18a312c984bbdb77c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb77b"
        },
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
              "_id": "62ebc0e18a312c984bbdb77e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb77d"
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
              "_id": "62ebc0e18a312c984bbdb780"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb77f"
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
              "_id": "62ebc0e18a312c984bbdb782"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb781"
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
              "_id": "62ebc0e18a312c984bbdb784"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb783"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb760",
    "audioID": 953,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 952,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb762"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb763"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb764"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb765"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb766"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb767"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb768"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb769"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb76a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb76b"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb76c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb761"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 953,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb76e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb76f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb770"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb771"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb772"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb773"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb774"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb775"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb776"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb777"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb778"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb76d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "954",
        "name": "Lê Hữu Lợi",
        "cty": "ABC",
        "hotline": "52295955"
      },
      "customer": {
        "customerID": "954",
        "name": "Đặng Hữu Hồng",
        "phone": "26239756",
        "address": "Hà Nội",
        "cmnd": "60862519"
      },
      "fileURL": "talk954.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "209s",
      "date": "3/6/2022",
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
              "_id": "62ebc0e18a312c984bbdb79f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb79e"
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
              "_id": "62ebc0e18a312c984bbdb7a1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7a0"
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
              "_id": "62ebc0e18a312c984bbdb7a3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7a2"
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
              "_id": "62ebc0e18a312c984bbdb7a5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7a4"
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
              "_id": "62ebc0e18a312c984bbdb7a7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7a6"
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
              "_id": "62ebc0e18a312c984bbdb7a9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7a8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb785",
    "audioID": 954,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 953,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb787"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb788"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb789"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb78a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb78b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb78c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb78d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb78e"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb78f"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb790"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb791"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb786"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 954,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb793"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb794"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb795"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb796"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb797"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb798"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb799"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb79a"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb79b"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb79c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb79d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb792"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "955",
        "name": "Nguyễn Phương Khánh",
        "cty": "ABC",
        "hotline": "55222963"
      },
      "customer": {
        "customerID": "955",
        "name": "Ngô Khánh Khánh",
        "phone": "54325374",
        "address": "Hà Nội",
        "cmnd": "38545037"
      },
      "fileURL": "talk955.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "388s",
      "date": "4/5/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb7c4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7c3"
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
              "_id": "62ebc0e18a312c984bbdb7c6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7c5"
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
              "_id": "62ebc0e18a312c984bbdb7c8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7c7"
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
              "_id": "62ebc0e18a312c984bbdb7ca"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7c9"
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
              "_id": "62ebc0e18a312c984bbdb7cc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7cb"
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
              "_id": "62ebc0e18a312c984bbdb7ce"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7cd"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb7aa",
    "audioID": 955,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 954,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7ac"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb7ad"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7ae"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7af"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7b0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb7b1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7b2"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb7b3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7b4"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7b5"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb7b6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb7ab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 955,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7b8"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7b9"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7ba"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7bb"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7bc"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7bd"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb7be"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7bf"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb7c0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb7c1"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb7c2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb7b7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "956",
        "name": "Huỳnh Minh Dạ",
        "cty": "ABC",
        "hotline": "63897188"
      },
      "customer": {
        "customerID": "956",
        "name": "Trần Quốc An",
        "phone": "34736936",
        "address": "Hà Nội",
        "cmnd": "42863832"
      },
      "fileURL": "talk956.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "55s",
      "date": "23/3/2022",
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
              "_id": "62ebc0e18a312c984bbdb7e9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7e8"
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
              "_id": "62ebc0e18a312c984bbdb7eb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7ea"
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
              "_id": "62ebc0e18a312c984bbdb7ed"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7ec"
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
              "_id": "62ebc0e18a312c984bbdb7ef"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7ee"
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
              "_id": "62ebc0e18a312c984bbdb7f1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7f0"
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
              "_id": "62ebc0e18a312c984bbdb7f3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb7f2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb7cf",
    "audioID": 956,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 955,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7d1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7d2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7d3"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb7d4"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7d5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7d6"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7d7"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7d8"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7d9"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7da"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7db"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb7d0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 956,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7dd"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7de"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb7df"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb7e0"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb7e1"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7e2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb7e3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb7e4"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7e5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7e6"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7e7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb7dc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "957",
        "name": "Bùi Quốc Duy",
        "cty": "ABC",
        "hotline": "99949182"
      },
      "customer": {
        "customerID": "957",
        "name": "Trần Quốc Quyền",
        "phone": "25887762",
        "address": "Hà Nội",
        "cmnd": "79551791"
      },
      "fileURL": "talk957.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "545s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb80e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb80d"
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
              "_id": "62ebc0e18a312c984bbdb810"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb80f"
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
              "_id": "62ebc0e18a312c984bbdb812"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb811"
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
              "_id": "62ebc0e18a312c984bbdb814"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb813"
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
              "_id": "62ebc0e18a312c984bbdb816"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb815"
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
              "_id": "62ebc0e18a312c984bbdb818"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb817"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb7f4",
    "audioID": 957,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 956,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb7f6"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7f7"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7f8"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb7f9"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb7fa"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7fb"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb7fc"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7fd"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb7fe"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb7ff"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb800"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb7f5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 957,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb802"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb803"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb804"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb805"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb806"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb807"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb808"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb809"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb80a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb80b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb80c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb801"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "958",
        "name": "Bùi Khánh Hồng",
        "cty": "ABC",
        "hotline": "66546375"
      },
      "customer": {
        "customerID": "958",
        "name": "Trương Hữu Lợi",
        "phone": "17714887",
        "address": "Hà Nội",
        "cmnd": "99059096"
      },
      "fileURL": "talk958.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "82s",
      "date": "30/4/2022",
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
              "_id": "62ebc0e18a312c984bbdb833"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb832"
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
              "_id": "62ebc0e18a312c984bbdb835"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb834"
        },
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
              "_id": "62ebc0e18a312c984bbdb837"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb836"
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
              "_id": "62ebc0e18a312c984bbdb839"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb838"
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
              "_id": "62ebc0e18a312c984bbdb83b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb83a"
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
              "_id": "62ebc0e18a312c984bbdb83d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb83c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb819",
    "audioID": 958,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 957,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb81b"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb81c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb81d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb81e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb81f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb820"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb821"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb822"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb823"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb824"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb825"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb81a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 958,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb827"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb828"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb829"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb82a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb82b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb82c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb82d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb82e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb82f"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb830"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb831"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb826"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "959",
        "name": "Lê Minh An",
        "cty": "ABC",
        "hotline": "38139816"
      },
      "customer": {
        "customerID": "959",
        "name": "Phan Hữu Lợi",
        "phone": "75885481",
        "address": "Hà Nội",
        "cmnd": "72138010"
      },
      "fileURL": "talk959.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "58s",
      "date": "9/10/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb858"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb857"
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
              "_id": "62ebc0e18a312c984bbdb85a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb859"
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
              "_id": "62ebc0e18a312c984bbdb85c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb85b"
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
              "_id": "62ebc0e18a312c984bbdb85e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb85d"
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
              "_id": "62ebc0e18a312c984bbdb860"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb85f"
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
              "_id": "62ebc0e18a312c984bbdb862"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb861"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb83e",
    "audioID": 959,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 958,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb840"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb841"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb842"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb843"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb844"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb845"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb846"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb847"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb848"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb849"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb84a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb83f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 959,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb84c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb84d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb84e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb84f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb850"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb851"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb852"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb853"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb854"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb855"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb856"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb84b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "960",
        "name": "Ngô Khánh Dạ",
        "cty": "ABC",
        "hotline": "13402872"
      },
      "customer": {
        "customerID": "960",
        "name": "Phan Khánh Khánh",
        "phone": "60141628",
        "address": "Hà Nội",
        "cmnd": "46974343"
      },
      "fileURL": "talk960.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "16s",
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
              "_id": "62ebc0e18a312c984bbdb87d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb87c"
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
              "_id": "62ebc0e18a312c984bbdb87f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb87e"
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
              "_id": "62ebc0e18a312c984bbdb881"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb880"
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
              "_id": "62ebc0e18a312c984bbdb883"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb882"
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
              "_id": "62ebc0e18a312c984bbdb885"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb884"
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
              "_id": "62ebc0e18a312c984bbdb887"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb886"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb863",
    "audioID": 960,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 959,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb865"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb866"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb867"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb868"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb869"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb86a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb86b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb86c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb86d"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb86e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb86f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb864"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 960,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb871"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb872"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb873"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb874"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb875"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb876"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb877"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb878"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb879"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb87a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb87b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb870"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "961",
        "name": "Nguyễn Phương Cảnh",
        "cty": "ABC",
        "hotline": "36525298"
      },
      "customer": {
        "customerID": "961",
        "name": "Đặng Hải Quyền",
        "phone": "22871805",
        "address": "Hà Nội",
        "cmnd": "30626756"
      },
      "fileURL": "talk961.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "345s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb8a2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8a1"
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
              "_id": "62ebc0e18a312c984bbdb8a4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8a3"
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
              "_id": "62ebc0e18a312c984bbdb8a6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8a5"
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
              "_id": "62ebc0e18a312c984bbdb8a8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8a7"
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
              "_id": "62ebc0e18a312c984bbdb8aa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8a9"
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
              "_id": "62ebc0e18a312c984bbdb8ac"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8ab"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb888",
    "audioID": 961,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 960,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb88a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb88b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb88c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb88d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb88e"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb88f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb890"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb891"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb892"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb893"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb894"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb889"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 961,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb896"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb897"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb898"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb899"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb89a"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb89b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb89c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb89d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb89e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb89f"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8a0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb895"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "962",
        "name": "Huỳnh Minh Lợi",
        "cty": "ABC",
        "hotline": "99167363"
      },
      "customer": {
        "customerID": "962",
        "name": "Huỳnh Thị Ánh",
        "phone": "22896447",
        "address": "Hà Nội",
        "cmnd": "11645133"
      },
      "fileURL": "talk962.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "326s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb8c7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8c6"
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
              "_id": "62ebc0e18a312c984bbdb8c9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8c8"
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
              "_id": "62ebc0e18a312c984bbdb8cb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8ca"
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
              "_id": "62ebc0e18a312c984bbdb8cd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8cc"
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
              "_id": "62ebc0e18a312c984bbdb8cf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8ce"
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
              "_id": "62ebc0e18a312c984bbdb8d1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8d0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb8ad",
    "audioID": 962,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 961,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8af"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb8b0"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8b1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb8b2"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8b3"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8b4"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8b5"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb8b6"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb8b7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8b8"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8b9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb8ae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 962,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8bb"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8bc"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8bd"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8be"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8bf"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb8c0"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8c1"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb8c2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8c3"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb8c4"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb8c5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb8ba"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "963",
        "name": "Lê Hải Hồng",
        "cty": "ABC",
        "hotline": "39553915"
      },
      "customer": {
        "customerID": "963",
        "name": "Huỳnh Hải An",
        "phone": "75620701",
        "address": "Hà Nội",
        "cmnd": "50249451"
      },
      "fileURL": "talk963.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "425s",
      "date": "22/5/2022",
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
              "_id": "62ebc0e18a312c984bbdb8ec"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8eb"
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
              "_id": "62ebc0e18a312c984bbdb8ee"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8ed"
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
              "_id": "62ebc0e18a312c984bbdb8f0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8ef"
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
              "_id": "62ebc0e18a312c984bbdb8f2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8f1"
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
              "_id": "62ebc0e18a312c984bbdb8f4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8f3"
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
              "_id": "62ebc0e18a312c984bbdb8f6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb8f5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb8d2",
    "audioID": 963,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 962,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb8d4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb8d5"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8d6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8d7"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb8d8"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb8d9"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8da"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb8db"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8dc"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8dd"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8de"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb8d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 963,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8e0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8e1"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb8e2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8e3"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb8e4"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8e5"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb8e6"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb8e7"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb8e8"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb8e9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb8ea"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb8df"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "964",
        "name": "Đặng Khánh Quyền",
        "cty": "ABC",
        "hotline": "88381525"
      },
      "customer": {
        "customerID": "964",
        "name": "Phạm Khánh Hồng",
        "phone": "40377076",
        "address": "Hà Nội",
        "cmnd": "47001630"
      },
      "fileURL": "talk964.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "174s",
      "date": "7/2/2022",
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
              "_id": "62ebc0e18a312c984bbdb911"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb910"
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
              "_id": "62ebc0e18a312c984bbdb913"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb912"
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
              "_id": "62ebc0e18a312c984bbdb915"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb914"
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
              "_id": "62ebc0e18a312c984bbdb917"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb916"
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
              "_id": "62ebc0e18a312c984bbdb919"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb918"
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
              "_id": "62ebc0e18a312c984bbdb91b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb91a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb8f7",
    "audioID": 964,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 963,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb8f9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8fa"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8fb"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb8fc"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb8fd"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb8fe"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb8ff"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb900"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb901"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb902"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb903"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb8f8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 964,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb905"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb906"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb907"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb908"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb909"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb90a"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb90b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb90c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb90d"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb90e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb90f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb904"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "965",
        "name": "Phan Phương An",
        "cty": "ABC",
        "hotline": "10209020"
      },
      "customer": {
        "customerID": "965",
        "name": "Đặng Hữu Dạ",
        "phone": "19317233",
        "address": "Hà Nội",
        "cmnd": "92246624"
      },
      "fileURL": "talk965.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "217s",
      "date": "9/5/2022",
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
              "_id": "62ebc0e18a312c984bbdb936"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb935"
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
              "_id": "62ebc0e18a312c984bbdb938"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb937"
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
              "_id": "62ebc0e18a312c984bbdb93a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb939"
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
              "_id": "62ebc0e18a312c984bbdb93c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb93b"
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
              "_id": "62ebc0e18a312c984bbdb93e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb93d"
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
              "_id": "62ebc0e18a312c984bbdb940"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb93f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb91c",
    "audioID": 965,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 964,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb91e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb91f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb920"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb921"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb922"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb923"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb924"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb925"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb926"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb927"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb928"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb91d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 965,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb92a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb92b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb92c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb92d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb92e"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb92f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb930"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb931"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb932"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb933"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb934"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb929"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "966",
        "name": "Đặng An Lợi",
        "cty": "ABC",
        "hotline": "86210148"
      },
      "customer": {
        "customerID": "966",
        "name": "Trần Khánh Khánh",
        "phone": "14474042",
        "address": "Hà Nội",
        "cmnd": "46936283"
      },
      "fileURL": "talk966.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "380s",
      "date": "17/1/2022",
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
              "_id": "62ebc0e18a312c984bbdb95b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb95a"
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
              "_id": "62ebc0e18a312c984bbdb95d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb95c"
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
              "_id": "62ebc0e18a312c984bbdb95f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb95e"
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
              "_id": "62ebc0e18a312c984bbdb961"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb960"
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
              "_id": "62ebc0e18a312c984bbdb963"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb962"
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
              "_id": "62ebc0e18a312c984bbdb965"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb964"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb941",
    "audioID": 966,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 965,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb943"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb944"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb945"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb946"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb947"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb948"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb949"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb94a"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb94b"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb94c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb94d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb942"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 966,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb94f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb950"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb951"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb952"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb953"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb954"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb955"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb956"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb957"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb958"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb959"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb94e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "967",
        "name": "Trương Hữu Duy",
        "cty": "ABC",
        "hotline": "70942673"
      },
      "customer": {
        "customerID": "967",
        "name": "Trương An Thái Qúy",
        "phone": "67052692",
        "address": "Hà Nội",
        "cmnd": "41695847"
      },
      "fileURL": "talk967.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "203s",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdb980"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb97f"
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
              "_id": "62ebc0e18a312c984bbdb982"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb981"
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
              "_id": "62ebc0e18a312c984bbdb984"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb983"
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
              "_id": "62ebc0e18a312c984bbdb986"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb985"
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
              "_id": "62ebc0e18a312c984bbdb988"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb987"
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
              "_id": "62ebc0e18a312c984bbdb98a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb989"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb966",
    "audioID": 967,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 966,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb968"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb969"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb96a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb96b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb96c"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb96d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb96e"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb96f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb970"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb971"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb972"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb967"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 967,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb974"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb975"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb976"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb977"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb978"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb979"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb97a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb97b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb97c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb97d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb97e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb973"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "968",
        "name": "Phạm Minh Hồng",
        "cty": "ABC",
        "hotline": "92932540"
      },
      "customer": {
        "customerID": "968",
        "name": "Đặng Thị Hồng",
        "phone": "18298295",
        "address": "Hà Nội",
        "cmnd": "74852166"
      },
      "fileURL": "talk968.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "331s",
      "date": "30/8/2022",
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
              "_id": "62ebc0e18a312c984bbdb9a5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9a4"
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
              "_id": "62ebc0e18a312c984bbdb9a7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9a6"
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
              "_id": "62ebc0e18a312c984bbdb9a9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9a8"
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
              "_id": "62ebc0e18a312c984bbdb9ab"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9aa"
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
              "_id": "62ebc0e18a312c984bbdb9ad"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9ac"
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
              "_id": "62ebc0e18a312c984bbdb9af"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9ae"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb98b",
    "audioID": 968,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 967,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb98d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb98e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb98f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb990"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb991"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb992"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb993"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb994"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb995"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb996"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb997"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb98c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 968,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb999"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb99a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb99b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb99c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb99d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb99e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb99f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9a0"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb9a1"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9a2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb9a3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb998"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "969",
        "name": "Bùi Văn Dạ",
        "cty": "ABC",
        "hotline": "17455407"
      },
      "customer": {
        "customerID": "969",
        "name": "Trương Hữu Thái Qúy",
        "phone": "59339261",
        "address": "Hà Nội",
        "cmnd": "81571792"
      },
      "fileURL": "talk969.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "14s",
      "date": "4/12/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb9ca"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9c9"
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
              "_id": "62ebc0e18a312c984bbdb9cc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9cb"
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
              "_id": "62ebc0e18a312c984bbdb9ce"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9cd"
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
              "_id": "62ebc0e18a312c984bbdb9d0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9cf"
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
              "_id": "62ebc0e18a312c984bbdb9d2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9d1"
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
              "_id": "62ebc0e18a312c984bbdb9d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9d3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb9b0",
    "audioID": 969,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 968,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9b2"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9b3"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9b4"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb9b5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9b6"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb9b7"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb9b8"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9b9"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9ba"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9bb"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9bc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb9b1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 969,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9be"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9bf"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb9c0"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9c1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9c2"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb9c3"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9c4"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9c5"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9c6"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb9c7"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdb9c8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb9bd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "970",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "19506525"
      },
      "customer": {
        "customerID": "970",
        "name": "Huỳnh Phương Khánh",
        "phone": "90949798",
        "address": "Hà Nội",
        "cmnd": "46915098"
      },
      "fileURL": "talk970.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "119s",
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
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdb9ef"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9ee"
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
              "_id": "62ebc0e18a312c984bbdb9f1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9f0"
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
              "_id": "62ebc0e18a312c984bbdb9f3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9f2"
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
              "_id": "62ebc0e18a312c984bbdb9f5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9f4"
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
              "_id": "62ebc0e18a312c984bbdb9f7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9f6"
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
              "_id": "62ebc0e18a312c984bbdb9f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdb9f8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb9d5",
    "audioID": 970,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 969,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9d7"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdb9d8"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb9d9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9da"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb9db"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb9dc"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb9dd"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb9de"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb9df"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9e0"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdb9e1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb9d6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 970,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9e3"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9e4"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb9e5"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdb9e6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9e7"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdb9e8"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb9e9"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9ea"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb9eb"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdb9ec"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9ed"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb9e2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "971",
        "name": "Huỳnh Văn Duy",
        "cty": "ABC",
        "hotline": "72174977"
      },
      "customer": {
        "customerID": "971",
        "name": "Phạm Phương Dạ",
        "phone": "38088024",
        "address": "Hà Nội",
        "cmnd": "99573391"
      },
      "fileURL": "talk971.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "595s",
      "date": "21/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbdba14"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba13"
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
              "_id": "62ebc0e18a312c984bbdba16"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba15"
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
              "_id": "62ebc0e18a312c984bbdba18"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba17"
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
              "_id": "62ebc0e18a312c984bbdba1a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba19"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdba1c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba1b"
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
              "_id": "62ebc0e18a312c984bbdba1e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba1d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdb9fa",
    "audioID": 971,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 970,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdb9fc"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdb9fd"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdb9fe"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdb9ff"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba00"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba01"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba02"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba03"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdba04"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba05"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba06"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdb9fb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 971,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba08"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba09"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba0a"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba0b"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba0c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba0d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba0e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba0f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba10"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba11"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba12"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba07"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "972",
        "name": "Trương Dương An",
        "cty": "ABC",
        "hotline": "62697435"
      },
      "customer": {
        "customerID": "972",
        "name": "Trần Thị An",
        "phone": "38439739",
        "address": "Hà Nội",
        "cmnd": "41543261"
      },
      "fileURL": "talk972.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "419s",
      "date": "24/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbdba39"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba38"
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
              "_id": "62ebc0e18a312c984bbdba3b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba3a"
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
              "_id": "62ebc0e18a312c984bbdba3d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba3c"
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
              "_id": "62ebc0e18a312c984bbdba3f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba3e"
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
              "_id": "62ebc0e18a312c984bbdba41"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba40"
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
              "_id": "62ebc0e18a312c984bbdba43"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba42"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdba1f",
    "audioID": 972,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 971,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba21"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba22"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba23"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba24"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba25"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba26"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba27"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba28"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba29"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba2a"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba2b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba20"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 972,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba2d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba2e"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba2f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba30"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba31"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba32"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba33"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba34"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdba35"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba36"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba37"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba2c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "973",
        "name": "Ngô Minh Khánh",
        "cty": "ABC",
        "hotline": "53736597"
      },
      "customer": {
        "customerID": "973",
        "name": "Lê Minh Ánh",
        "phone": "47392943",
        "address": "Hà Nội",
        "cmnd": "80674855"
      },
      "fileURL": "talk973.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "462s",
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
              "_id": "62ebc0e18a312c984bbdba5e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba5d"
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
              "_id": "62ebc0e18a312c984bbdba60"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba5f"
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
              "_id": "62ebc0e18a312c984bbdba62"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba61"
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
              "_id": "62ebc0e18a312c984bbdba64"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba63"
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
              "_id": "62ebc0e18a312c984bbdba66"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba65"
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
              "_id": "62ebc0e18a312c984bbdba68"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba67"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdba44",
    "audioID": 973,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 972,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba46"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba47"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba48"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba49"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba4a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba4b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdba4c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba4d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba4e"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba4f"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba50"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba45"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 973,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdba52"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdba53"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba54"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba55"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba56"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba57"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba58"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba59"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba5a"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba5b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba5c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba51"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "974",
        "name": "Trương Phương Lợi",
        "cty": "ABC",
        "hotline": "28961150"
      },
      "customer": {
        "customerID": "974",
        "name": "Ngô Dương Quyền",
        "phone": "96866945",
        "address": "Hà Nội",
        "cmnd": "76273729"
      },
      "fileURL": "talk974.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "320s",
      "date": "6/10/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdba83"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba82"
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
              "_id": "62ebc0e18a312c984bbdba85"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba84"
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
              "_id": "62ebc0e18a312c984bbdba87"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba86"
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
              "_id": "62ebc0e18a312c984bbdba89"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba88"
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
              "_id": "62ebc0e18a312c984bbdba8b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba8a"
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
              "_id": "62ebc0e18a312c984bbdba8d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdba8c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdba69",
    "audioID": 974,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 973,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba6b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba6c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba6d"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba6e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba6f"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdba70"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba71"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba72"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba73"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba74"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba75"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba6a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 974,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba77"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba78"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba79"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba7a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba7b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba7c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba7d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba7e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba7f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba80"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba81"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba76"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "975",
        "name": "Phạm An Hồng",
        "cty": "ABC",
        "hotline": "20099061"
      },
      "customer": {
        "customerID": "975",
        "name": "Đặng Phương Khánh",
        "phone": "44765549",
        "address": "Hà Nội",
        "cmnd": "36949230"
      },
      "fileURL": "talk975.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "280s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbaa8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaa7"
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
              "_id": "62ebc0e18a312c984bbdbaaa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaa9"
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
              "_id": "62ebc0e18a312c984bbdbaac"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaab"
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
              "_id": "62ebc0e18a312c984bbdbaae"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaad"
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
              "_id": "62ebc0e18a312c984bbdbab0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaaf"
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
              "_id": "62ebc0e18a312c984bbdbab2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbab1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdba8e",
    "audioID": 975,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 974,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba90"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdba91"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba92"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba93"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba94"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdba95"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdba96"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdba97"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdba98"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdba99"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdba9a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba8f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 975,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdba9c"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba9d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdba9e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdba9f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbaa0"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbaa1"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbaa2"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbaa3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbaa4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbaa5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbaa6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdba9b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "976",
        "name": "Phan Minh An",
        "cty": "ABC",
        "hotline": "74486931"
      },
      "customer": {
        "customerID": "976",
        "name": "Phan Quốc Thái Qúy",
        "phone": "34551110",
        "address": "Hà Nội",
        "cmnd": "36507958"
      },
      "fileURL": "talk976.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "216s",
      "date": "1/7/2022",
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
              "_id": "62ebc0e18a312c984bbdbacd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbacc"
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
              "_id": "62ebc0e18a312c984bbdbacf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbace"
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
              "_id": "62ebc0e18a312c984bbdbad1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbad0"
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
              "_id": "62ebc0e18a312c984bbdbad3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbad2"
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
              "_id": "62ebc0e18a312c984bbdbad5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbad4"
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
              "_id": "62ebc0e18a312c984bbdbad7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbad6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbab3",
    "audioID": 976,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 975,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbab5"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbab6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbab7"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbab8"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbab9"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbaba"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbabb"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbabc"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbabd"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbabe"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbabf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbab4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 976,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbac1"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbac2"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbac3"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbac4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbac5"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbac6"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbac7"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbac8"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbac9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbaca"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbacb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbac0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "977",
        "name": "Trương Dương Khánh",
        "cty": "ABC",
        "hotline": "98459694"
      },
      "customer": {
        "customerID": "977",
        "name": "Bùi Dương Lợi",
        "phone": "42119299",
        "address": "Hà Nội",
        "cmnd": "39455713"
      },
      "fileURL": "talk977.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "109s",
      "date": "13/10/2022",
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
              "_id": "62ebc0e18a312c984bbdbaf2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaf1"
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
              "_id": "62ebc0e18a312c984bbdbaf4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaf3"
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
              "_id": "62ebc0e18a312c984bbdbaf6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaf5"
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
              "_id": "62ebc0e18a312c984bbdbaf8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaf7"
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
              "_id": "62ebc0e18a312c984bbdbafa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbaf9"
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
              "_id": "62ebc0e18a312c984bbdbafc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbafb"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbad8",
    "audioID": 977,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 976,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbada"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbadb"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbadc"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbadd"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbade"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbadf"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbae0"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbae1"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbae2"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbae3"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbae4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbad9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 977,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbae6"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbae7"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbae8"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbae9"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbaea"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbaeb"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbaec"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbaed"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbaee"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbaef"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbaf0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbae5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "978",
        "name": "Bùi Phương Quyền",
        "cty": "ABC",
        "hotline": "30505017"
      },
      "customer": {
        "customerID": "978",
        "name": "Đặng Phương Dạ",
        "phone": "35020017",
        "address": "Hà Nội",
        "cmnd": "99042142"
      },
      "fileURL": "talk978.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "236s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbb17"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb16"
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
              "_id": "62ebc0e18a312c984bbdbb19"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb18"
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
              "_id": "62ebc0e18a312c984bbdbb1b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb1a"
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
              "_id": "62ebc0e18a312c984bbdbb1d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb1c"
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
              "_id": "62ebc0e18a312c984bbdbb1f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb1e"
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
              "_id": "62ebc0e18a312c984bbdbb21"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb20"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbafd",
    "audioID": 978,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 977,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbaff"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb00"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb01"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb02"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb03"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb04"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb05"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb06"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb07"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb08"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb09"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbafe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 978,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb0b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb0c"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb0d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb0e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbb0f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb10"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb11"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb12"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb13"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb14"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb15"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb0a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "979",
        "name": "Trần Phương Cảnh",
        "cty": "ABC",
        "hotline": "77380046"
      },
      "customer": {
        "customerID": "979",
        "name": "Trần Khánh Cảnh",
        "phone": "29520937",
        "address": "Hà Nội",
        "cmnd": "45595360"
      },
      "fileURL": "talk979.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "313s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbb3c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb3b"
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
              "_id": "62ebc0e18a312c984bbdbb3e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb3d"
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
              "_id": "62ebc0e18a312c984bbdbb40"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb3f"
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
              "_id": "62ebc0e18a312c984bbdbb42"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb41"
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
              "_id": "62ebc0e18a312c984bbdbb44"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb43"
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
              "_id": "62ebc0e18a312c984bbdbb46"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb45"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbb22",
    "audioID": 979,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 978,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb24"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb25"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb26"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb27"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb28"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb29"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb2a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb2b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb2c"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb2d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb2e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb23"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 979,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb30"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb31"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb32"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb33"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb34"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb35"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb36"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb37"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb38"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb39"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb3a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb2f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "980",
        "name": "Bùi Hải Lợi",
        "cty": "ABC",
        "hotline": "28326828"
      },
      "customer": {
        "customerID": "980",
        "name": "Đặng Minh Khánh",
        "phone": "89899690",
        "address": "Hà Nội",
        "cmnd": "15290621"
      },
      "fileURL": "talk980.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "344s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbb61"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb60"
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
              "_id": "62ebc0e18a312c984bbdbb63"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb62"
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
              "_id": "62ebc0e18a312c984bbdbb65"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb64"
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
              "_id": "62ebc0e18a312c984bbdbb67"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb66"
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
              "_id": "62ebc0e18a312c984bbdbb69"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb68"
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
              "_id": "62ebc0e18a312c984bbdbb6b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb6a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbb47",
    "audioID": 980,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 979,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb49"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb4a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb4b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb4c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb4d"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb4e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb4f"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb50"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb51"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb52"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb53"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb48"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 980,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbb55"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb56"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb57"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb58"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb59"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb5a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb5b"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb5c"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb5d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb5e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb5f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb54"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "981",
        "name": "Phan Minh Quyền",
        "cty": "ABC",
        "hotline": "27196457"
      },
      "customer": {
        "customerID": "981",
        "name": "Ngô Minh Lợi",
        "phone": "12144604",
        "address": "Hà Nội",
        "cmnd": "71889792"
      },
      "fileURL": "talk981.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "359s",
      "date": "1/5/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbb86"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb85"
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
              "_id": "62ebc0e18a312c984bbdbb88"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb87"
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
              "_id": "62ebc0e18a312c984bbdbb8a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb89"
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
              "_id": "62ebc0e18a312c984bbdbb8c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb8b"
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
              "_id": "62ebc0e18a312c984bbdbb8e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb8d"
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
              "_id": "62ebc0e18a312c984bbdbb90"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbb8f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbb6c",
    "audioID": 981,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 980,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb6e"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb6f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb70"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb71"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb72"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb73"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb74"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbb75"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb76"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbb77"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb78"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb6d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 981,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbb7a"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb7b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb7c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb7d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbb7e"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb7f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb80"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb81"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb82"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb83"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb84"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb79"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "982",
        "name": "Phạm Phương Cảnh",
        "cty": "ABC",
        "hotline": "26840774"
      },
      "customer": {
        "customerID": "982",
        "name": "Huỳnh Khánh An",
        "phone": "77811409",
        "address": "Hà Nội",
        "cmnd": "63669376"
      },
      "fileURL": "talk982.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "438s",
      "date": "13/3/2022",
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
              "_id": "62ebc0e18a312c984bbdbbab"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbaa"
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
              "_id": "62ebc0e18a312c984bbdbbad"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbac"
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
              "_id": "62ebc0e18a312c984bbdbbaf"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbae"
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
              "_id": "62ebc0e18a312c984bbdbbb1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbb0"
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
              "_id": "62ebc0e18a312c984bbdbbb3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbb2"
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
              "_id": "62ebc0e18a312c984bbdbbb5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbb4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbb91",
    "audioID": 982,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 981,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbb93"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb94"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb95"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbb96"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb97"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbb98"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbb99"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb9a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbb9b"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbb9c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbb9d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb92"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 982,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbb9f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbba0"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbba1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbba2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbba3"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbba4"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbba5"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbba6"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbba7"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbba8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbba9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbb9e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "983",
        "name": "Bùi Minh Quyền",
        "cty": "ABC",
        "hotline": "74350795"
      },
      "customer": {
        "customerID": "983",
        "name": "Phạm Quốc An",
        "phone": "99740609",
        "address": "Hà Nội",
        "cmnd": "13601217"
      },
      "fileURL": "talk983.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "259s",
      "date": "10/10/2022",
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
              "_id": "62ebc0e18a312c984bbdbbd0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbcf"
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
              "_id": "62ebc0e18a312c984bbdbbd2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbd1"
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
              "_id": "62ebc0e18a312c984bbdbbd4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbd3"
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
              "_id": "62ebc0e18a312c984bbdbbd6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbd5"
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
              "_id": "62ebc0e18a312c984bbdbbd8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbd7"
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
              "_id": "62ebc0e18a312c984bbdbbda"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbd9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbbb6",
    "audioID": 983,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 982,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbbb8"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbb9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbba"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbbb"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbbbc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbbd"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbbbe"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbbf"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbc0"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbbc1"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbc2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbbb7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 983,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbbc4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbc5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbbc6"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbc7"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbc8"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbbc9"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbbca"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbcb"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbcc"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbcd"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbce"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbbc3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "984",
        "name": "Trần Quốc Duy",
        "cty": "ABC",
        "hotline": "70789625"
      },
      "customer": {
        "customerID": "984",
        "name": "Trương Hải Khánh",
        "phone": "80979532",
        "address": "Hà Nội",
        "cmnd": "71193730"
      },
      "fileURL": "talk984.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "291s",
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
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbbf5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbf4"
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
              "_id": "62ebc0e18a312c984bbdbbf7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbf6"
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
              "_id": "62ebc0e18a312c984bbdbbf9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbf8"
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
              "_id": "62ebc0e18a312c984bbdbbfb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbfa"
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
              "_id": "62ebc0e18a312c984bbdbbfd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbfc"
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
              "_id": "62ebc0e18a312c984bbdbbff"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbbfe"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbbdb",
    "audioID": 984,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 983,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbdd"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbbde"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbdf"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbe0"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbe1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbe2"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbbe3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbe4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbe5"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbbe6"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbbe7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbbdc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 984,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbbe9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbbea"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbbeb"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbbec"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbed"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbbee"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbbef"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbbf0"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbbf1"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbbf2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbbf3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbbe8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "985",
        "name": "Trương Dương Dạ",
        "cty": "ABC",
        "hotline": "71136316"
      },
      "customer": {
        "customerID": "985",
        "name": "Đặng Phương Lợi",
        "phone": "51682408",
        "address": "Hà Nội",
        "cmnd": "97836024"
      },
      "fileURL": "talk985.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "494s",
      "date": "7/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbc1a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc19"
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
              "_id": "62ebc0e18a312c984bbdbc1c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc1b"
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
              "_id": "62ebc0e18a312c984bbdbc1e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc1d"
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
              "_id": "62ebc0e18a312c984bbdbc20"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc1f"
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
              "_id": "62ebc0e18a312c984bbdbc22"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc21"
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
              "_id": "62ebc0e18a312c984bbdbc24"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc23"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbc00",
    "audioID": 985,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 984,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc02"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc03"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc04"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc05"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc06"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc07"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc08"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc09"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc0a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc0b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc0c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc01"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 985,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc0e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc0f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc10"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc11"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc12"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc13"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc14"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc15"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc16"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc17"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc18"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc0d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "986",
        "name": "Ngô Phương Quyền",
        "cty": "ABC",
        "hotline": "50625343"
      },
      "customer": {
        "customerID": "986",
        "name": "Ngô An Cảnh",
        "phone": "35840791",
        "address": "Hà Nội",
        "cmnd": "45176463"
      },
      "fileURL": "talk986.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "168s",
      "date": "29/4/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbc3f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc3e"
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
              "_id": "62ebc0e18a312c984bbdbc41"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc40"
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
              "_id": "62ebc0e18a312c984bbdbc43"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc42"
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
              "_id": "62ebc0e18a312c984bbdbc45"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc44"
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
              "_id": "62ebc0e18a312c984bbdbc47"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc46"
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
              "_id": "62ebc0e18a312c984bbdbc49"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc48"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbc25",
    "audioID": 986,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 985,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc27"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc28"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc29"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc2a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc2b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc2c"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc2d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc2e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc2f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc30"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc31"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc26"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 986,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc33"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc34"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc35"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc36"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc37"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc38"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc39"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc3a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc3b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc3c"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc3d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc32"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "987",
        "name": "Phạm Khánh Khánh",
        "cty": "ABC",
        "hotline": "94844844"
      },
      "customer": {
        "customerID": "987",
        "name": "Nguyễn Phương Cảnh",
        "phone": "21256645",
        "address": "Hà Nội",
        "cmnd": "72886222"
      },
      "fileURL": "talk987.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "290s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbc64"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc63"
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
              "_id": "62ebc0e18a312c984bbdbc66"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc65"
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
              "_id": "62ebc0e18a312c984bbdbc68"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc67"
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
              "_id": "62ebc0e18a312c984bbdbc6a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc69"
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
              "_id": "62ebc0e18a312c984bbdbc6c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc6b"
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
              "_id": "62ebc0e18a312c984bbdbc6e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc6d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbc4a",
    "audioID": 987,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 986,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc4c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc4d"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc4e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc4f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc50"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc51"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc52"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc53"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc54"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc55"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc56"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc4b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 987,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc58"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc59"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc5a"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc5b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc5c"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc5d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc5e"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc5f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc60"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc61"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc62"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc57"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "988",
        "name": "Trần Quốc Quyền",
        "cty": "ABC",
        "hotline": "99502643"
      },
      "customer": {
        "customerID": "988",
        "name": "Huỳnh Thị Hồng",
        "phone": "96617087",
        "address": "Hà Nội",
        "cmnd": "13969221"
      },
      "fileURL": "talk988.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "86s",
      "date": "9/6/2022",
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
              "_id": "62ebc0e18a312c984bbdbc89"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc88"
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
              "_id": "62ebc0e18a312c984bbdbc8b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc8a"
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
              "_id": "62ebc0e18a312c984bbdbc8d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc8c"
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
              "_id": "62ebc0e18a312c984bbdbc8f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc8e"
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
              "_id": "62ebc0e18a312c984bbdbc91"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc90"
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
              "_id": "62ebc0e18a312c984bbdbc93"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbc92"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbc6f",
    "audioID": 988,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 987,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc71"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc72"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc73"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc74"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbc75"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc76"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc77"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc78"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc79"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc7a"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbc7b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc70"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 988,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc7d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc7e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc7f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc80"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc81"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbc82"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbc83"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc84"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc85"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc86"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc87"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc7c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "989",
        "name": "Ngô Hữu Dạ",
        "cty": "ABC",
        "hotline": "49192977"
      },
      "customer": {
        "customerID": "989",
        "name": "Trần Hải Cảnh",
        "phone": "59606144",
        "address": "Hà Nội",
        "cmnd": "29111817"
      },
      "fileURL": "talk989.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "374s",
      "date": "13/10/2022",
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
              "_id": "62ebc0e18a312c984bbdbcae"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcad"
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
              "_id": "62ebc0e18a312c984bbdbcb0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcaf"
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
              "_id": "62ebc0e18a312c984bbdbcb2"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcb1"
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
              "_id": "62ebc0e18a312c984bbdbcb4"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcb3"
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
              "_id": "62ebc0e18a312c984bbdbcb6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcb5"
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
              "_id": "62ebc0e18a312c984bbdbcb8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcb7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbc94",
    "audioID": 989,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 988,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc96"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbc97"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc98"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbc99"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc9a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc9b"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbc9c"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbc9d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbc9e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbc9f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbca0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbc95"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 989,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbca2"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbca3"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbca4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbca5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbca6"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbca7"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbca8"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbca9"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbcaa"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbcab"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbcac"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbca1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "990",
        "name": "Huỳnh Hữu Hồng",
        "cty": "ABC",
        "hotline": "15103915"
      },
      "customer": {
        "customerID": "990",
        "name": "Đặng Quốc Dạ",
        "phone": "37566749",
        "address": "Hà Nội",
        "cmnd": "15080679"
      },
      "fileURL": "talk990.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "167s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbcd3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcd2"
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
              "_id": "62ebc0e18a312c984bbdbcd5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcd4"
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
              "_id": "62ebc0e18a312c984bbdbcd7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcd6"
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
              "_id": "62ebc0e18a312c984bbdbcd9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcd8"
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
              "_id": "62ebc0e18a312c984bbdbcdb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcda"
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
              "_id": "62ebc0e18a312c984bbdbcdd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcdc"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbcb9",
    "audioID": 990,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 989,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbcbb"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcbc"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbcbd"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbcbe"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbcbf"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbcc0"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbcc1"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbcc2"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbcc3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbcc4"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbcc5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbcba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 990,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbcc7"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbcc8"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcc9"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbcca"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbccb"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbccc"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbccd"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcce"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbccf"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbcd0"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbcd1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbcc6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "991",
        "name": "Phan Hữu Khánh",
        "cty": "ABC",
        "hotline": "81989193"
      },
      "customer": {
        "customerID": "991",
        "name": "Phan Minh Cảnh",
        "phone": "73366304",
        "address": "Hà Nội",
        "cmnd": "72971607"
      },
      "fileURL": "talk991.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "356s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbdbcf8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcf7"
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
              "_id": "62ebc0e18a312c984bbdbcfa"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcf9"
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
              "_id": "62ebc0e18a312c984bbdbcfc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcfb"
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
              "_id": "62ebc0e18a312c984bbdbcfe"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcfd"
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
              "_id": "62ebc0e18a312c984bbdbd00"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbcff"
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
              "_id": "62ebc0e18a312c984bbdbd02"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd01"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbcde",
    "audioID": 991,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 990,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbce0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbce1"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbce2"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbce3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbce4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbce5"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbce6"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbce7"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbce8"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbce9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcea"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbcdf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 991,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbcec"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbced"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcee"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbcef"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbcf0"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbcf1"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcf2"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbcf3"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcf4"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbcf5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbcf6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbceb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "992",
        "name": "Lê Văn Duy",
        "cty": "ABC",
        "hotline": "79331524"
      },
      "customer": {
        "customerID": "992",
        "name": "Ngô Văn Thái Qúy",
        "phone": "36502736",
        "address": "Hà Nội",
        "cmnd": "29370040"
      },
      "fileURL": "talk992.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "548s",
      "date": "16/9/2022",
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
              "_id": "62ebc0e18a312c984bbdbd1d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd1c"
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
              "_id": "62ebc0e18a312c984bbdbd1f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd1e"
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
              "_id": "62ebc0e18a312c984bbdbd21"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd20"
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
              "_id": "62ebc0e18a312c984bbdbd23"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd22"
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
              "_id": "62ebc0e18a312c984bbdbd25"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd24"
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
              "_id": "62ebc0e18a312c984bbdbd27"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd26"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbd03",
    "audioID": 992,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 991,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd05"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd06"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd07"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd08"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd09"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd0a"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd0b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd0c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd0d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd0e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd0f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd04"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 992,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd11"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd12"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd13"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd14"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd15"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd16"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd17"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd18"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd19"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd1a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd1b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd10"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "993",
        "name": "Trương Minh Dạ",
        "cty": "ABC",
        "hotline": "72148971"
      },
      "customer": {
        "customerID": "993",
        "name": "Phan Phương Thái Qúy",
        "phone": "49588296",
        "address": "Hà Nội",
        "cmnd": "90960056"
      },
      "fileURL": "talk993.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "332s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbd42"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd41"
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
              "_id": "62ebc0e18a312c984bbdbd44"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd43"
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
              "_id": "62ebc0e18a312c984bbdbd46"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd45"
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
              "_id": "62ebc0e18a312c984bbdbd48"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd47"
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
              "_id": "62ebc0e18a312c984bbdbd4a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd49"
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
              "_id": "62ebc0e18a312c984bbdbd4c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd4b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbd28",
    "audioID": 993,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 992,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbd2a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd2b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd2c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd2d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd2e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd2f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd30"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd31"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd32"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd33"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd34"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd29"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 993,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd36"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd37"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd38"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd39"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd3a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd3b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd3c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd3d"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd3e"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbd3f"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd40"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd35"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "994",
        "name": "Nguyễn Quốc Cảnh",
        "cty": "ABC",
        "hotline": "39705020"
      },
      "customer": {
        "customerID": "994",
        "name": "Huỳnh Văn An",
        "phone": "55225095",
        "address": "Hà Nội",
        "cmnd": "79867975"
      },
      "fileURL": "talk994.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "596s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbd67"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd66"
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
              "_id": "62ebc0e18a312c984bbdbd69"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd68"
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
              "_id": "62ebc0e18a312c984bbdbd6b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd6a"
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
              "_id": "62ebc0e18a312c984bbdbd6d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd6c"
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
              "_id": "62ebc0e18a312c984bbdbd6f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd6e"
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
              "_id": "62ebc0e18a312c984bbdbd71"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd70"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbd4d",
    "audioID": 994,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 993,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd4f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd50"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd51"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd52"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd53"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd54"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd55"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd56"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbd57"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd58"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd59"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd4e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 994,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd5b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd5c"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd5d"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd5e"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd5f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd60"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd61"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd62"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd63"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd64"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd65"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd5a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "995",
        "name": "Trương Minh Lợi",
        "cty": "ABC",
        "hotline": "29473846"
      },
      "customer": {
        "customerID": "995",
        "name": "Đặng Văn Lợi",
        "phone": "90426457",
        "address": "Hà Nội",
        "cmnd": "51748014"
      },
      "fileURL": "talk995.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "439s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbd8c"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd8b"
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
              "_id": "62ebc0e18a312c984bbdbd8e"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd8d"
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
              "_id": "62ebc0e18a312c984bbdbd90"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd8f"
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
              "_id": "62ebc0e18a312c984bbdbd92"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd91"
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
              "_id": "62ebc0e18a312c984bbdbd94"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd93"
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
              "_id": "62ebc0e18a312c984bbdbd96"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbd95"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbd72",
    "audioID": 995,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 994,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd74"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd75"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd76"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd77"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd78"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd79"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd7a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd7b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd7c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd7d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd7e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd73"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 995,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd80"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd81"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd82"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd83"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd84"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd85"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbd86"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd87"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbd88"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbd89"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbd8a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd7f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "996",
        "name": "Ngô Khánh Khánh",
        "cty": "ABC",
        "hotline": "14957915"
      },
      "customer": {
        "customerID": "996",
        "name": "Huỳnh Minh Duy",
        "phone": "88367199",
        "address": "Hà Nội",
        "cmnd": "93022346"
      },
      "fileURL": "talk996.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "444s",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbdbdb1"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdb0"
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
              "_id": "62ebc0e18a312c984bbdbdb3"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdb2"
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
              "_id": "62ebc0e18a312c984bbdbdb5"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdb4"
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
              "_id": "62ebc0e18a312c984bbdbdb7"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdb6"
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
              "_id": "62ebc0e18a312c984bbdbdb9"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdb8"
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
              "_id": "62ebc0e18a312c984bbdbdbb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdba"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbd97",
    "audioID": 996,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 995,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd99"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbd9a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbd9b"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd9c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbd9d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbd9e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbd9f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbda0"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbda1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbda2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbda3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbd98"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 996,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbda5"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbda6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbda7"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbda8"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbda9"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbdaa"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdab"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdac"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdad"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbdae"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbdaf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbda4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "997",
        "name": "Bùi Thị Lợi",
        "cty": "ABC",
        "hotline": "24371091"
      },
      "customer": {
        "customerID": "997",
        "name": "Huỳnh An Cảnh",
        "phone": "74930183",
        "address": "Hà Nội",
        "cmnd": "93157555"
      },
      "fileURL": "talk997.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "249s",
      "date": "12/11/2022",
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
              "_id": "62ebc0e18a312c984bbdbdd6"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdd5"
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
              "_id": "62ebc0e18a312c984bbdbdd8"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdd7"
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
              "_id": "62ebc0e18a312c984bbdbdda"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdd9"
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
              "_id": "62ebc0e18a312c984bbdbddc"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbddb"
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
              "_id": "62ebc0e18a312c984bbdbdde"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbddd"
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
              "_id": "62ebc0e18a312c984bbdbde0"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbddf"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbdbc",
    "audioID": 997,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 996,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbdbe"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbdbf"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbdc0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdc1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbdc2"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdc3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdc4"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbdc5"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdc6"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbdc7"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbdc8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbdbd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 997,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdca"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbdcb"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbdcc"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbdcd"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdce"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbdcf"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbdd0"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdd1"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbdd2"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdd3"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdd4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbdc9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "998",
        "name": "Phan Thị Hồng",
        "cty": "ABC",
        "hotline": "68437876"
      },
      "customer": {
        "customerID": "998",
        "name": "Trần Minh Hồng",
        "phone": "40078429",
        "address": "Hà Nội",
        "cmnd": "44341608"
      },
      "fileURL": "talk998.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "51s",
      "date": "19/7/2022",
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
              "_id": "62ebc0e18a312c984bbdbdfb"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdfa"
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
              "_id": "62ebc0e18a312c984bbdbdfd"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdfc"
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
              "_id": "62ebc0e18a312c984bbdbdff"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbdfe"
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
              "_id": "62ebc0e18a312c984bbdbe01"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe00"
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
              "_id": "62ebc0e18a312c984bbdbe03"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe02"
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
              "_id": "62ebc0e18a312c984bbdbe05"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe04"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbde1",
    "audioID": 998,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 997,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbde3"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbde4"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbde5"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbde6"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbde7"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbde8"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbde9"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdea"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbdeb"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdec"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbded"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbde2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 998,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdef"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdf0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbdf1"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbdf2"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdf3"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbdf4"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbdf5"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbdf6"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbdf7"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbdf8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbdf9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbdee"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "999",
        "name": "Nguyễn An Hồng",
        "cty": "ABC",
        "hotline": "40741146"
      },
      "customer": {
        "customerID": "999",
        "name": "Lê Thị Lợi",
        "phone": "31375852",
        "address": "Hà Nội",
        "cmnd": "52842067"
      },
      "fileURL": "talk999.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "82s",
      "date": "23/12/2022",
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
              "_id": "62ebc0e18a312c984bbdbe20"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe1f"
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
              "_id": "62ebc0e18a312c984bbdbe22"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe21"
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
              "_id": "62ebc0e18a312c984bbdbe24"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe23"
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
              "_id": "62ebc0e18a312c984bbdbe26"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe25"
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
              "_id": "62ebc0e18a312c984bbdbe28"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe27"
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
              "_id": "62ebc0e18a312c984bbdbe2a"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe29"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbe06",
    "audioID": 999,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 998,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbe08"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe09"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe0a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe0b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe0c"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe0d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe0e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbe0f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbe10"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe11"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbe12"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbe07"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 999,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe14"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe15"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe16"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbe17"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbe18"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe19"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbe1a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe1b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe1c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe1d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbdbe1e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbe13"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "1000",
        "name": "Phan Phương Lợi",
        "cty": "ABC",
        "hotline": "76224327"
      },
      "customer": {
        "customerID": "1000",
        "name": "Phan Hải Dạ",
        "phone": "56688922",
        "address": "Hà Nội",
        "cmnd": "85735429"
      },
      "fileURL": "talk1000.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "549s",
      "date": "24/1/2022",
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
              "_id": "62ebc0e18a312c984bbdbe45"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe44"
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
              "_id": "62ebc0e18a312c984bbdbe47"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe46"
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
              "_id": "62ebc0e18a312c984bbdbe49"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe48"
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
              "_id": "62ebc0e18a312c984bbdbe4b"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe4a"
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
              "_id": "62ebc0e18a312c984bbdbe4d"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe4c"
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
              "_id": "62ebc0e18a312c984bbdbe4f"
            }
          ],
          "_id": "62ebc0e18a312c984bbdbe4e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbdbe2b",
    "audioID": 1000,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 999,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbdbe2d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe2e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbe2f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbdbe30"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbe31"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbe32"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe33"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbdbe34"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe35"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbdbe36"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe37"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbe2c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 1000,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbdbe39"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe3a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe3b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe3c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe3d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbdbe3e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbdbe3f"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe40"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe41"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbdbe42"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbdbe43"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbdbe38"
      }
    ],
    "__v": 0
  }
]

export default FILE10