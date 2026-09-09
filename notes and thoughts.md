make it so that the display updates in accordance to the state of the array. every time a step is completed, it follows that it would follow similarly 

list of sorting algorithims
insertion sort


<div class="dropdown">
  <button class="dropdown-btn" onclick="toggleDropdown()">Menu ▾</button>
  <div class="dropdown-content" id="dropdownContent">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 160px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 10px 14px;
  text-decoration: none;
  color: #333;
}

.dropdown-content a:hover {
  background: #f2f2f2;
}

.dropdown-content.show {
  display: block;
}
</style>

<script>
function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdown = document.getElementById("dropdownContent");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}
=======
make it so that the display updates in accordance to the state of the array. every time a step is completed, it follows that it would follow similarly 

list of sorting algorithims
insertion sort


<div class="dropdown">
  <button class="dropdown-btn" onclick="toggleDropdown()">Menu ▾</button>
  <div class="dropdown-content" id="dropdownContent">
    <a href="#">Option 1</a>
    <a href="#">Option 2</a>
    <a href="#">Option 3</a>
  </div>
</div>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-btn {
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 4px;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 160px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 4px;
  overflow: hidden;
  z-index: 1;
}

.dropdown-content a {
  display: block;
  padding: 10px 14px;
  text-decoration: none;
  color: #333;
}

.dropdown-content a:hover {
  background: #f2f2f2;
}

.dropdown-content.show {
  display: block;
}
</style>

<script>
function toggleDropdown() {
  document.getElementById("dropdownContent").classList.toggle("show");
}

// Close dropdown if clicking outside
window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    const dropdown = document.getElementById("dropdownContent");
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}
</script>