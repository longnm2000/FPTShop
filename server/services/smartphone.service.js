const db = require("../utils/database");

module.exports.findAllLimit = () => {
  return db.execute(`
  SELECT DISTINCT
  s.smartphone_id,
  s.smartphone_name,
  s.chipset_info,
  s.ram_info,
  s.screen_info,
  s.release_date,
  so.price AS lowest_price,
  st.storage_capacity AS lowest_storage
FROM
  smartphones AS s
JOIN
  smartphone_options AS so ON s.smartphone_id = so.smartphone_id
JOIN
  storage_options AS st ON so.storage_id = st.storage_id
JOIN
  (
    SELECT 
      smartphone_id,
      MIN(price) AS lowest_price
    FROM 
      smartphone_options
    GROUP BY 
      smartphone_id
  ) AS min_prices ON so.smartphone_id = min_prices.smartphone_id AND so.price = min_prices.lowest_price
ORDER BY
  s.release_date DESC
LIMIT 2;



    `);
};

module.exports.findAll = () => {
  return db.execute(`
  SELECT DISTINCT
    s.smartphone_id,
    s.smartphone_name,
    b.brand_name,
    s.chipset_info,
    s.ram_info,
    s.screen_info,
    s.release_date,
    so.price AS lowest_price,
    st.storage_capacity AS lowest_storage
FROM
    smartphones AS s
JOIN
    smartphone_options AS so ON s.smartphone_id = so.smartphone_id
JOIN
    storage_options AS st ON so.storage_id = st.storage_id
JOIN
    brands AS b ON s.brand_id = b.brand_id
JOIN
    (
        SELECT 
            smartphone_id,
            MIN(price) AS lowest_price
        FROM 
            smartphone_options
        GROUP BY 
            smartphone_id
    ) AS min_prices ON so.smartphone_id = min_prices.smartphone_id AND so.price = min_prices.lowest_price
ORDER BY
    s.release_date DESC;



    `);
};

module.exports.findOne = (id) => {
  return db.execute(
    `
    SELECT
    smartphones.smartphone_id,
    smartphone_name,
    release_date,
    description,
    brands.brand_name,
    chipset_info,
    main_camera_info,
    selfie_camera_info,
    screen_info,
    battery_info,
    charging_info,
    sim_info,
    ram_info,
    os_info,
    smartphone_images.image_url,
    colors.color_name,
    storage_options.storage_capacity,
    smartphone_options.quantity,
    smartphone_options.price
FROM smartphones
JOIN brands ON smartphones.brand_id = brands.brand_id
JOIN smartphone_images ON smartphones.smartphone_id = smartphone_images.smartphone_id
JOIN colors ON smartphone_images.color_id = colors.color_id
JOIN smartphone_options ON smartphones.smartphone_id = smartphone_options.smartphone_id
JOIN storage_options ON smartphone_options.storage_id = storage_options.storage_id
WHERE smartphones.smartphone_id = ?;


  `,
    [id]
  );
};

module.exports.findImg = (id) => {
  return db.execute(
    `SELECT
    *
FROM
    smartphone_images
WHERE
    smartphone_id = ?;

`,
    [id]
  );
};

module.exports.findAllImgs = () => {
  return db.execute(
    `SELECT
    *
FROM
    smartphone_images


`
  );
};

module.exports.findColStoQuaPri = (id) => {
  return db.execute(
    `SELECT 
    c.color_id,
    c.color_name,
    so.storage_id,
    so.storage_capacity,
    sso.quantity,
    sso.price
FROM smartphone_options AS sso
JOIN colors AS c ON sso.color_id = c.color_id
JOIN storage_options AS so ON sso.storage_id = so.storage_id
WHERE sso.smartphone_id = ?;
`,
    [id]
  );
};
