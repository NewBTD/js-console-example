const band_member = [
    { name: "Dim", band: "Tattoo Colour", age: 18, lover_rate: 50.5, job: "Singer" },
    { name: "Ruzzy", band: "Tattoo Colour", age: 18, lover_rate: 50.5, job: "Guitarist/Singer" },
    { name: "Jump", band: "Tattoo Colour", age: 18, lover_rate: 50.5, job: "Bassist" },
    { name: "Tong/Aiew", band: "Tattoo Colour", age: 18, lover_rate: 50.5, job: "Drummer" },
];

document.getElementById("btn_log").addEventListener("click", () => {
    console.log("This is normal log");
});

document.getElementById("btn_info").addEventListener("click", () => {
    console.info(
        "Display same as log but mostly use for logged for info that user should have known"
    );
});

document.getElementById("btn_table").addEventListener("click", () => {
    console.table(band_member);
});

document.getElementById("btn_group").addEventListener("click", () => {
    console.group("User");
    console.log("Singer");
    console.table([
        { name: "Dim", band: "Tattoo Colour", age: 18, job: "Singer" },
        { name: "Ruzzy", band: "Tattoo Colour", age: 18, job: "Guitarist/Singer" },
    ]);
    console.log("Musician");
    console.table([
        { name: "Ruzzy", band: "Tattoo Colour", age: 18, job: "Guitarist/Singer" },
        { name: "Jump", band: "Tattoo Colour", age: 18, job: "Bassist" },
        { name: "Tong/Aiew", band: "Tattoo Colour", age: 18, job: "Drummer" },
    ]);
    console.groupEnd();
    console.group("Instrument");
    console.log("Guitar");
    console.log("Bass");
    console.log("Drum");
    console.groupEnd();
});

document.getElementById("btn_warn").addEventListener("click", () => {
    console.warn("Might be something don't work properly");
});

document.getElementById("btn_error").addEventListener("click", () => {
    console.error("This is error log");
});

document.getElementById("btn_assert").addEventListener("click", () => {
    const isTrue = false;
    console.assert(isTrue, "No Data Found");
    if (isTrue) {
        console.log("Data fetching successfully");
    }
});

document.getElementById("btn_count").addEventListener("click", () => {
    for (let i = 0; i < band_member.length; i++) {
        console.count("Loop Counter");
        console.log(band_member[i])
    }
})

document.getElementById("btn_time").addEventListener("click", () => {
    const time_label = "Fetch successfully at";
    console.time(time_label);
    fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            console.timeEnd(time_label);
        });
});

document.getElementById("btn_var_percent").addEventListener("click", () => {
    console.log("Member name - %s, %i years old, %f lover rate ❤️", band_member[0].name, band_member[0].age, band_member[0].lover_rate);
});

document.getElementById("btn_var_bracket").addEventListener("click", () => {
    console.log(`Member name - ${band_member[0].name}, ${band_member[0].age} years old, ${band_member[0].lover_rate} lover rate ❤️`);
});

document.getElementById("btn_clear").addEventListener("click", () => {
    let counter = 1;
    const loadingInterval = setInterval(() => {
        switch (counter) {
            case 1:
                console.clear()
                console.log("loading.");
                break;
            case 2:
                console.clear()
                console.log("loading..");
                break;
            case 3:
                console.clear()
                console.log("loading...");
                break;
        }
        counter = (counter % 3) + 1; // cycle through 1, 2, 3
    }, 3000);
})

document.getElementById("btn_style").addEventListener("click", () => {
    const log_style = "color: red; font-size: 2rem;font-weight:bold; background-color:black;";
    console.log("%c Do you like this text?", log_style)
})


