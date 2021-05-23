const e = require('express');
const db = require('./connections');
const collection = "user";

const findUser = async (userName) => {
    let dbo = db().collection(collection);
    let data = await dbo.findOne({ userName });
    return new Promise((resolve, reject) => {
        resolve(data);
    })
}

const findUsers = async (userName) => {
    return new Promise((resolve, reject) => {
        let dbo = db().collection(collection);
        const query = new RegExp(userName, 'i');
        dbo.find({ userName: query}).project({userName: 1}).toArray()
        .then(data => {
            resolve(data);
        })
        .catch(err => {
            reject(err);
        })
    })
}

const insertUser = async (user) => {
    let dbo = db().collection(collection);

    let ifExist = await (findUser(user.userName));

    if (ifExist) {
        return new Promise((resolve, reject) => {
            resolve({ exist: true });
        })
    } else {
        return new Promise((resolve, reject) => {
            dbo.insertOne(user)
                .then(data => {
                    console.log(data);
                    resolve({ ...data, exist: false });
                })
                .catch(err => {
                    console.log(err);
                })
        })
    }
}

const loginUser = async ({ userName, password }) => {
    let dbo = db().collection(collection);
    let data = await dbo.findOne({ userName, password });
    return new Promise((resolve, reject) => {
        if (data)
            resolve({ ...data, exist: true });
        else
            reject({ exist: false })
    })
}

module.exports = { loginUser, findUser, insertUser, findUsers };