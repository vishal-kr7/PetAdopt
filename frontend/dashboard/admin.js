document.addEventListener("DOMContentLoaded", async () => {
    try {
      const res = await fetch("https://pet-adopt-uz4v.onrender.com/api/auth/users");
      const users = await res.json();
      const tbody = document.getElementById("userList");

      users.forEach((user, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.email}</td>
          <td>${new Date(user.createdAt).toLocaleString()}</td>
        `;
        tbody.appendChild(tr);
      });
    } catch (err) {
      console.error("Failed to fetch users:", err);
      document.getElementById("userList").innerHTML = `
        <tr><td colspan="3" class="text-center text-danger">Failed to load users</td></tr>
      `;
    }
  });