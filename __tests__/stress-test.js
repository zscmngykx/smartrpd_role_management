import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  const url = 'http://localhost:3001/users';

  const payload = JSON.stringify({
    name: `Test User ${__VU}-${__ITER}`,
    email: `user${Math.floor(Math.random() * 100000)}@example.com`,
    phone: '1234567890',
    location: 'ndcs_main',
    role: 'lab_technician'  // ✅ 改成你数据库中实际存在的值
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  console.log(`[${res.status}] ${res.body}`);

  check(res, {
    '✅ status is 200 or 201': (r) => r.status === 200 || r.status === 201,
    '✅ response is JSON': (r) =>
      r.headers['Content-Type'] && r.headers['Content-Type'].includes('application/json'),
  });

  sleep(1);
}

// import http from 'k6/http';
// import { check, sleep } from 'k6';

// export let options = {
//   vus: 5,
//   duration: '30s',
// };

// export default function () {
//   const headers = { 'Content-Type': 'application/json' };

//   // 1️⃣ GET /roles - 获取所有角色
//   const getAllRes = http.get('http://localhost:3001/roles');
//   check(getAllRes, {
//     '✅ GET /roles OK': () => true,
//   });

//   // 2️⃣ POST /roles - 添加新角色
//   const fakeName = `Role_${__VU}_${__ITER}`;
//   const postPayload = JSON.stringify({
//     name: fakeName,
//     description: '压力测试创建角色',
//   });

//   const postRes = http.post('http://localhost:3001/roles', postPayload, { headers });
//   check(postRes, {
//     '✅ POST /roles OK': () => true,
//   });

//   // 3️⃣ 获取刚刚创建的角色 ID
//   let roleId = null;
//   try {
//     roleId = JSON.parse(postRes.body)?.id;
//   } catch (_) {}

//   // 4️⃣ PUT /roles/:id - 修改角色
//   if (roleId) {
//     const putPayload = JSON.stringify({
//       name: `Updated_${fakeName}`,
//       description: '更新后的角色',
//     });

//     const putRes = http.put(`http://localhost:3001/roles/${roleId}`, putPayload, { headers });
//     check(putRes, {
//       '✅ PUT /roles/:id OK': () => true,
//     });

//     // 5️⃣ DELETE /roles/:id - 删除角色
//     const delRes = http.del(`http://localhost:3001/roles/${roleId}`);
//     check(delRes, {
//       '✅ DELETE /roles/:id OK': () => true,
//     });
//   }

//   sleep(1);
// }
