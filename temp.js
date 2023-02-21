 /*           console.log('"data": [')
            for (var i = 0; i < m.message.data.length; i++)
            {
                console.log('{"color":"' + m.message.data[i].color + '",')
                console.log('"oldCoordinates": {')
                console.log('"x":' + m.message.data[i].oldCoordinates.x + ',')
                console.log('"y":' + m.message.data[i].oldCoordinates.y)
                console.log('},')
                console.log('"newCoordinates": {')
                console.log('"x":' + m.message.data[i].newCoordinates.x + ',')
                console.log('"y":' + m.message.data[i].newCoordinates.y)
                console.log('}')
                console.log('},')
            }
            console.log(']')
*/

           //console.log(m.message)

 
 const coords1 = {
 "data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":324,
"y":125
},
"newCoordinates": {
"x":334,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":334,
"y":125
},
"newCoordinates": {
"x":334,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":334,
"y":125
},
"newCoordinates": {
"x":334,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":334,
"y":125
},
"newCoordinates": {
"x":333,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":333,
"y":125
},
"newCoordinates": {
"x":333,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":333,
"y":125
},
"newCoordinates": {
"x":331,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":331,
"y":125
},
"newCoordinates": {
"x":327,
"y":124
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":327,
"y":124
},
"newCoordinates": {
"x":324,
"y":124
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":324,
"y":124
},
"newCoordinates": {
"x":318,
"y":123
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":318,
"y":123
},
"newCoordinates": {
"x":312,
"y":123
}
}
]}
    const coords2 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":312,
"y":123
},
"newCoordinates": {
"x":302,
"y":122
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":302,
"y":122
},
"newCoordinates": {
"x":289,
"y":120
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":289,
"y":120
},
"newCoordinates": {
"x":283,
"y":120
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":283,
"y":120
},
"newCoordinates": {
"x":273,
"y":119
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":273,
"y":119
},
"newCoordinates": {
"x":262,
"y":119
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":262,
"y":119
},
"newCoordinates": {
"x":252,
"y":120
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":252,
"y":120
},
"newCoordinates": {
"x":243,
"y":121
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":243,
"y":121
},
"newCoordinates": {
"x":237,
"y":122
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":237,
"y":122
},
"newCoordinates": {
"x":227,
"y":125
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":227,
"y":125
},
"newCoordinates": {
"x":222,
"y":127
}
}
]}
    const coords3 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":222,
"y":127
},
"newCoordinates": {
"x":219,
"y":128
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":219,
"y":128
},
"newCoordinates": {
"x":217,
"y":129
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":217,
"y":129
},
"newCoordinates": {
"x":216,
"y":130
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":216,
"y":130
},
"newCoordinates": {
"x":214,
"y":133
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":214,
"y":133
},
"newCoordinates": {
"x":214,
"y":134
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":214,
"y":134
},
"newCoordinates": {
"x":214,
"y":136
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":214,
"y":136
},
"newCoordinates": {
"x":214,
"y":138
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":214,
"y":138
},
"newCoordinates": {
"x":215,
"y":140
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":215,
"y":140
},
"newCoordinates": {
"x":218,
"y":145
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":218,
"y":145
},
"newCoordinates": {
"x":223,
"y":150
}
}
]}

    const coords4 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":223,
"y":150
},
"newCoordinates": {
"x":227,
"y":153
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":227,
"y":153
},
"newCoordinates": {
"x":231,
"y":157
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":231,
"y":157
},
"newCoordinates": {
"x":236,
"y":160
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":236,
"y":160
},
"newCoordinates": {
"x":242,
"y":164
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":242,
"y":164
},
"newCoordinates": {
"x":252,
"y":169
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":252,
"y":169
},
"newCoordinates": {
"x":259,
"y":173
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":259,
"y":173
},
"newCoordinates": {
"x":263,
"y":175
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":263,
"y":175
},
"newCoordinates": {
"x":267,
"y":177
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":267,
"y":177
},
"newCoordinates": {
"x":275,
"y":180
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":275,
"y":180
},
"newCoordinates": {
"x":287,
"y":186
}
}
]}
const coords5 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":287,
"y":186
},
"newCoordinates": {
"x":294,
"y":189
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":294,
"y":189
},
"newCoordinates": {
"x":301,
"y":193
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":301,
"y":193
},
"newCoordinates": {
"x":308,
"y":196
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":308,
"y":196
},
"newCoordinates": {
"x":316,
"y":200
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":316,
"y":200
},
"newCoordinates": {
"x":332,
"y":207
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":332,
"y":207
},
"newCoordinates": {
"x":340,
"y":210
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":340,
"y":210
},
"newCoordinates": {
"x":348,
"y":213
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":348,
"y":213
},
"newCoordinates": {
"x":356,
"y":216
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":356,
"y":216
},
"newCoordinates": {
"x":363,
"y":219
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":363,
"y":219
},
"newCoordinates": {
"x":368,
"y":221
}
}
]}

const coords6 = {


"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":368,
"y":221
},
"newCoordinates": {
"x":375,
"y":224
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":375,
"y":224
},
"newCoordinates": {
"x":383,
"y":228
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":383,
"y":228
},
"newCoordinates": {
"x":390,
"y":232
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":390,
"y":232
},
"newCoordinates": {
"x":394,
"y":234
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":394,
"y":234
},
"newCoordinates": {
"x":397,
"y":236
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":397,
"y":236
},
"newCoordinates": {
"x":401,
"y":239
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":401,
"y":239
},
"newCoordinates": {
"x":405,
"y":244
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":405,
"y":244
},
"newCoordinates": {
"x":408,
"y":246
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":408,
"y":246
},
"newCoordinates": {
"x":410,
"y":249
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":410,
"y":249
},
"newCoordinates": {
"x":411,
"y":251
}
}
]}

const coords7 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":411,
"y":251
},
"newCoordinates": {
"x":413,
"y":254
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":413,
"y":254
},
"newCoordinates": {
"x":416,
"y":258
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":416,
"y":258
},
"newCoordinates": {
"x":417,
"y":261
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":417,
"y":261
},
"newCoordinates": {
"x":417,
"y":262
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":417,
"y":262
},
"newCoordinates": {
"x":418,
"y":264
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":418,
"y":264
},
"newCoordinates": {
"x":419,
"y":266
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":419,
"y":266
},
"newCoordinates": {
"x":419,
"y":269
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":419,
"y":269
},
"newCoordinates": {
"x":420,
"y":271
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":420,
"y":271
},
"newCoordinates": {
"x":420,
"y":275
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":420,
"y":275
},
"newCoordinates": {
"x":420,
"y":278
}
}
]}

const coords8 = {

"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":420,
"y":278
},
"newCoordinates": {
"x":419,
"y":281
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":419,
"y":281
},
"newCoordinates": {
"x":418,
"y":283
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":418,
"y":283
},
"newCoordinates": {
"x":417,
"y":286
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":417,
"y":286
},
"newCoordinates": {
"x":412,
"y":292
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":412,
"y":292
},
"newCoordinates": {
"x":408,
"y":296
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":408,
"y":296
},
"newCoordinates": {
"x":403,
"y":301
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":403,
"y":301
},
"newCoordinates": {
"x":399,
"y":305
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":399,
"y":305
},
"newCoordinates": {
"x":393,
"y":310
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":393,
"y":310
},
"newCoordinates": {
"x":387,
"y":314
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":387,
"y":314
},
"newCoordinates": {
"x":384,
"y":317
}
}
]}


"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":384,
"y":317
},
"newCoordinates": {
"x":377,
"y":321
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":377,
"y":321
},
"newCoordinates": {
"x":370,
"y":327
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":370,
"y":327
},
"newCoordinates": {
"x":359,
"y":334
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":359,
"y":334
},
"newCoordinates": {
"x":352,
"y":338
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":352,
"y":338
},
"newCoordinates": {
"x":345,
"y":342
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":345,
"y":342
},
"newCoordinates": {
"x":332,
"y":348
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":332,
"y":348
},
"newCoordinates": {
"x":325,
"y":351
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":325,
"y":351
},
"newCoordinates": {
"x":319,
"y":355
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":319,
"y":355
},
"newCoordinates": {
"x":314,
"y":358
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":314,
"y":358
},
"newCoordinates": {
"x":311,
"y":361
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":311,
"y":361
},
"newCoordinates": {
"x":307,
"y":365
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":307,
"y":365
},
"newCoordinates": {
"x":305,
"y":368
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":305,
"y":368
},
"newCoordinates": {
"x":304,
"y":370
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":304,
"y":370
},
"newCoordinates": {
"x":303,
"y":372
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":303,
"y":372
},
"newCoordinates": {
"x":302,
"y":374
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":302,
"y":374
},
"newCoordinates": {
"x":301,
"y":377
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":301,
"y":377
},
"newCoordinates": {
"x":299,
"y":380
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":299,
"y":380
},
"newCoordinates": {
"x":299,
"y":381
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":299,
"y":381
},
"newCoordinates": {
"x":298,
"y":382
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":298,
"y":382
},
"newCoordinates": {
"x":297,
"y":383
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":297,
"y":383
},
"newCoordinates": {
"x":296,
"y":385
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":296,
"y":385
},
"newCoordinates": {
"x":294,
"y":387
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":294,
"y":387
},
"newCoordinates": {
"x":293,
"y":389
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":293,
"y":389
},
"newCoordinates": {
"x":292,
"y":391
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":292,
"y":391
},
"newCoordinates": {
"x":291,
"y":393
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":291,
"y":393
},
"newCoordinates": {
"x":289,
"y":396
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":289,
"y":396
},
"newCoordinates": {
"x":287,
"y":400
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":287,
"y":400
},
"newCoordinates": {
"x":284,
"y":403
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":284,
"y":403
},
"newCoordinates": {
"x":282,
"y":407
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":282,
"y":407
},
"newCoordinates": {
"x":279,
"y":410
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":279,
"y":410
},
"newCoordinates": {
"x":278,
"y":414
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":278,
"y":414
},
"newCoordinates": {
"x":276,
"y":418
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":276,
"y":418
},
"newCoordinates": {
"x":274,
"y":425
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":274,
"y":425
},
"newCoordinates": {
"x":273,
"y":431
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":273,
"y":431
},
"newCoordinates": {
"x":272,
"y":436
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":272,
"y":436
},
"newCoordinates": {
"x":272,
"y":441
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":272,
"y":441
},
"newCoordinates": {
"x":272,
"y":448
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":272,
"y":448
},
"newCoordinates": {
"x":272,
"y":455
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":272,
"y":455
},
"newCoordinates": {
"x":273,
"y":462
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":273,
"y":462
},
"newCoordinates": {
"x":276,
"y":476
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":276,
"y":476
},
"newCoordinates": {
"x":278,
"y":483
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":278,
"y":483
},
"newCoordinates": {
"x":281,
"y":491
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":281,
"y":491
},
"newCoordinates": {
"x":284,
"y":499
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":284,
"y":499
},
"newCoordinates": {
"x":288,
"y":506
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":288,
"y":506
},
"newCoordinates": {
"x":295,
"y":518
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":295,
"y":518
},
"newCoordinates": {
"x":301,
"y":526
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":301,
"y":526
},
"newCoordinates": {
"x":306,
"y":534
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":306,
"y":534
},
"newCoordinates": {
"x":311,
"y":541
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":311,
"y":541
},
"newCoordinates": {
"x":317,
"y":547
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":317,
"y":547
},
"newCoordinates": {
"x":321,
"y":553
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":321,
"y":553
},
"newCoordinates": {
"x":323,
"y":556
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":323,
"y":556
},
"newCoordinates": {
"x":327,
"y":561
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":327,
"y":561
},
"newCoordinates": {
"x":330,
"y":565
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":330,
"y":565
},
"newCoordinates": {
"x":331,
"y":568
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":331,
"y":568
},
"newCoordinates": {
"x":332,
"y":571
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":332,
"y":571
},
"newCoordinates": {
"x":333,
"y":575
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":333,
"y":575
},
"newCoordinates": {
"x":333,
"y":578
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":333,
"y":578
},
"newCoordinates": {
"x":332,
"y":584
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":332,
"y":584
},
"newCoordinates": {
"x":330,
"y":587
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":330,
"y":587
},
"newCoordinates": {
"x":328,
"y":591
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":328,
"y":591
},
"newCoordinates": {
"x":326,
"y":594
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":326,
"y":594
},
"newCoordinates": {
"x":323,
"y":598
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":323,
"y":598
},
"newCoordinates": {
"x":317,
"y":606
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":317,
"y":606
},
"newCoordinates": {
"x":313,
"y":611
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":313,
"y":611
},
"newCoordinates": {
"x":306,
"y":617
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":306,
"y":617
},
"newCoordinates": {
"x":297,
"y":629
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":297,
"y":629
},
"newCoordinates": {
"x":290,
"y":640
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":290,
"y":640
},
"newCoordinates": {
"x":286,
"y":647
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":286,
"y":647
},
"newCoordinates": {
"x":284,
"y":654
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":284,
"y":654
},
"newCoordinates": {
"x":282,
"y":672
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":282,
"y":672
},
"newCoordinates": {
"x":282,
"y":678
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":282,
"y":678
},
"newCoordinates": {
"x":284,
"y":689
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":284,
"y":689
},
"newCoordinates": {
"x":286,
"y":694
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":286,
"y":694
},
"newCoordinates": {
"x":290,
"y":705
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":290,
"y":705
},
"newCoordinates": {
"x":293,
"y":709
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":293,
"y":709
},
"newCoordinates": {
"x":298,
"y":716
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":298,
"y":716
},
"newCoordinates": {
"x":302,
"y":722
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":302,
"y":722
},
"newCoordinates": {
"x":307,
"y":728
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":307,
"y":728
},
"newCoordinates": {
"x":312,
"y":734
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":312,
"y":734
},
"newCoordinates": {
"x":319,
"y":740
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":319,
"y":740
},
"newCoordinates": {
"x":328,
"y":749
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":328,
"y":749
},
"newCoordinates": {
"x":334,
"y":754
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":334,
"y":754
},
"newCoordinates": {
"x":338,
"y":758
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":338,
"y":758
},
"newCoordinates": {
"x":341,
"y":761
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":341,
"y":761
},
"newCoordinates": {
"x":345,
"y":765
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":345,
"y":765
},
"newCoordinates": {
"x":351,
"y":772
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":351,
"y":772
},
"newCoordinates": {
"x":356,
"y":778
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":356,
"y":778
},
"newCoordinates": {
"x":358,
"y":781
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":358,
"y":781
},
"newCoordinates": {
"x":362,
"y":785
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":362,
"y":785
},
"newCoordinates": {
"x":365,
"y":789
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":365,
"y":789
},
"newCoordinates": {
"x":368,
"y":794
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":368,
"y":794
},
"newCoordinates": {
"x":374,
"y":800
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":374,
"y":800
},
"newCoordinates": {
"x":376,
"y":803
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":376,
"y":803
},
"newCoordinates": {
"x":381,
"y":807
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":381,
"y":807
},
"newCoordinates": {
"x":386,
"y":810
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":386,
"y":810
},
"newCoordinates": {
"x":392,
"y":814
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":392,
"y":814
},
"newCoordinates": {
"x":403,
"y":818
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":403,
"y":818
},
"newCoordinates": {
"x":410,
"y":820
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":410,
"y":820
},
"newCoordinates": {
"x":419,
"y":820
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":419,
"y":820
},
"newCoordinates": {
"x":428,
"y":821
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":428,
"y":821
},
"newCoordinates": {
"x":437,
"y":819
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":437,
"y":819
},
"newCoordinates": {
"x":445,
"y":818
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":445,
"y":818
},
"newCoordinates": {
"x":457,
"y":813
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":457,
"y":813
},
"newCoordinates": {
"x":477,
"y":801
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":477,
"y":801
},
"newCoordinates": {
"x":487,
"y":793
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":487,
"y":793
},
"newCoordinates": {
"x":495,
"y":783
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":495,
"y":783
},
"newCoordinates": {
"x":502,
"y":774
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":502,
"y":774
},
"newCoordinates": {
"x":507,
"y":762
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":507,
"y":762
},
"newCoordinates": {
"x":514,
"y":745
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":514,
"y":745
},
"newCoordinates": {
"x":516,
"y":737
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":516,
"y":737
},
"newCoordinates": {
"x":517,
"y":726
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":517,
"y":726
},
"newCoordinates": {
"x":518,
"y":715
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":518,
"y":715
},
"newCoordinates": {
"x":517,
"y":704
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":517,
"y":704
},
"newCoordinates": {
"x":517,
"y":694
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":517,
"y":694
},
"newCoordinates": {
"x":516,
"y":688
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":516,
"y":688
},
"newCoordinates": {
"x":514,
"y":677
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":514,
"y":677
},
"newCoordinates": {
"x":510,
"y":664
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":510,
"y":664
},
"newCoordinates": {
"x":506,
"y":652
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":506,
"y":652
},
"newCoordinates": {
"x":498,
"y":634
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":498,
"y":634
},
"newCoordinates": {
"x":489,
"y":620
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":489,
"y":620
},
"newCoordinates": {
"x":466,
"y":582
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":466,
"y":582
},
"newCoordinates": {
"x":458,
"y":568
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":458,
"y":568
},
"newCoordinates": {
"x":450,
"y":556
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":450,
"y":556
},
"newCoordinates": {
"x":443,
"y":545
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":443,
"y":545
},
"newCoordinates": {
"x":435,
"y":529
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":435,
"y":529
},
"newCoordinates": {
"x":432,
"y":522
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":432,
"y":522
},
"newCoordinates": {
"x":430,
"y":514
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":430,
"y":514
},
"newCoordinates": {
"x":427,
"y":507
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":427,
"y":507
},
"newCoordinates": {
"x":426,
"y":497
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":426,
"y":497
},
"newCoordinates": {
"x":424,
"y":484
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":424,
"y":484
},
"newCoordinates": {
"x":424,
"y":476
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":424,
"y":476
},
"newCoordinates": {
"x":425,
"y":466
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":425,
"y":466
},
"newCoordinates": {
"x":427,
"y":453
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":427,
"y":453
},
"newCoordinates": {
"x":428,
"y":447
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":428,
"y":447
},
"newCoordinates": {
"x":430,
"y":437
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":430,
"y":437
},
"newCoordinates": {
"x":436,
"y":419
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":436,
"y":419
},
"newCoordinates": {
"x":441,
"y":409
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":441,
"y":409
},
"newCoordinates": {
"x":446,
"y":397
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":446,
"y":397
},
"newCoordinates": {
"x":452,
"y":386
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":452,
"y":386
},
"newCoordinates": {
"x":460,
"y":374
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":460,
"y":374
},
"newCoordinates": {
"x":471,
"y":357
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":471,
"y":357
},
"newCoordinates": {
"x":476,
"y":349
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":476,
"y":349
},
"newCoordinates": {
"x":486,
"y":338
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":486,
"y":338
},
"newCoordinates": {
"x":495,
"y":327
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":495,
"y":327
},
"newCoordinates": {
"x":504,
"y":316
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":504,
"y":316
},
"newCoordinates": {
"x":521,
"y":301
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":521,
"y":301
},
"newCoordinates": {
"x":535,
"y":290
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":535,
"y":290
},
"newCoordinates": {
"x":542,
"y":284
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":542,
"y":284
},
"newCoordinates": {
"x":548,
"y":280
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":548,
"y":280
},
"newCoordinates": {
"x":554,
"y":277
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":554,
"y":277
},
"newCoordinates": {
"x":558,
"y":275
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":558,
"y":275
},
"newCoordinates": {
"x":565,
"y":273
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":565,
"y":273
},
"newCoordinates": {
"x":569,
"y":273
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":569,
"y":273
},
"newCoordinates": {
"x":573,
"y":274
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":573,
"y":274
},
"newCoordinates": {
"x":576,
"y":274
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":576,
"y":274
},
"newCoordinates": {
"x":582,
"y":276
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":582,
"y":276
},
"newCoordinates": {
"x":588,
"y":279
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":588,
"y":279
},
"newCoordinates": {
"x":593,
"y":282
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":593,
"y":282
},
"newCoordinates": {
"x":600,
"y":286
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":600,
"y":286
},
"newCoordinates": {
"x":612,
"y":294
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":612,
"y":294
},
"newCoordinates": {
"x":622,
"y":301
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":622,
"y":301
},
"newCoordinates": {
"x":632,
"y":311
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":632,
"y":311
},
"newCoordinates": {
"x":645,
"y":325
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":645,
"y":325
},
"newCoordinates": {
"x":650,
"y":332
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":650,
"y":332
},
"newCoordinates": {
"x":652,
"y":338
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":652,
"y":338
},
"newCoordinates": {
"x":653,
"y":344
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":653,
"y":344
},
"newCoordinates": {
"x":653,
"y":349
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":653,
"y":349
},
"newCoordinates": {
"x":652,
"y":353
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":652,
"y":353
},
"newCoordinates": {
"x":648,
"y":360
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":648,
"y":360
},
"newCoordinates": {
"x":637,
"y":373
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":637,
"y":373
},
"newCoordinates": {
"x":629,
"y":381
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":629,
"y":381
},
"newCoordinates": {
"x":614,
"y":392
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":614,
"y":392
},
"newCoordinates": {
"x":600,
"y":401
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":600,
"y":401
},
"newCoordinates": {
"x":579,
"y":413
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":579,
"y":413
},
"newCoordinates": {
"x":546,
"y":431
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":546,
"y":431
},
"newCoordinates": {
"x":529,
"y":439
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":529,
"y":439
},
"newCoordinates": {
"x":500,
"y":452
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":500,
"y":452
},
"newCoordinates": {
"x":474,
"y":463
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":474,
"y":463
},
"newCoordinates": {
"x":457,
"y":469
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":457,
"y":469
},
"newCoordinates": {
"x":421,
"y":481
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":421,
"y":481
},
"newCoordinates": {
"x":393,
"y":489
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":393,
"y":489
},
"newCoordinates": {
"x":371,
"y":495
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":371,
"y":495
},
"newCoordinates": {
"x":354,
"y":499
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":354,
"y":499
},
"newCoordinates": {
"x":325,
"y":505
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":325,
"y":505
},
"newCoordinates": {
"x":298,
"y":511
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":298,
"y":511
},
"newCoordinates": {
"x":267,
"y":516
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":267,
"y":516
},
"newCoordinates": {
"x":227,
"y":522
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":227,
"y":522
},
"newCoordinates": {
"x":213,
"y":524
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":213,
"y":524
},
"newCoordinates": {
"x":196,
"y":526
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":196,
"y":526
},
"newCoordinates": {
"x":181,
"y":528
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":181,
"y":528
},
"newCoordinates": {
"x":169,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":169,
"y":528
},
"newCoordinates": {
"x":156,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":156,
"y":528
},
"newCoordinates": {
"x":151,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":151,
"y":528
},
"newCoordinates": {
"x":148,
"y":529
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":148,
"y":529
},
"newCoordinates": {
"x":144,
"y":529
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":144,
"y":529
},
"newCoordinates": {
"x":142,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":142,
"y":528
},
"newCoordinates": {
"x":139,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":528
},
"newCoordinates": {
"x":139,
"y":528
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":528
},
"newCoordinates": {
"x":139,
"y":527
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":527
},
"newCoordinates": {
"x":138,
"y":527
}
},
]
"data": [
{"color":"#d6b0cd",
"oldCoordinates": {
"x":138,
"y":527
},
"newCoordinates": {
"x":138,
"y":527
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":138,
"y":527
},
"newCoordinates": {
"x":138,
"y":526
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":138,
"y":526
},
"newCoordinates": {
"x":138,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":138,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
{"color":"#d6b0cd",
"oldCoordinates": {
"x":139,
"y":525
},
"newCoordinates": {
"x":139,
"y":525
}
},
]