use std::fs::{self, File};
use std::io::{Read, Write};

#[tauri::command]
fn open_file(path: String) -> Result<String, String> {
    let metadata = fs::metadata(&path).map_err(|e| e.to_string())?;
    if metadata.is_dir() {
        return Err("The provided path is a directory".to_string());
    }

    let mut file = File::open(&path).map_err(|e| e.to_string())?;
    let mut contents = String::new();
    file.read_to_string(&mut contents).map_err(|e| e.to_string())?;
    Ok(contents)
}

#[tauri::command]
fn save_file(path: String, buf: String) -> Result<bool, String> {
    if let Ok(metadata) = fs::metadata(&path) {
        if metadata.is_dir() {
            return Err("The provided path is a directory".to_string());
        }
    }

    let mut file = File::create(&path).map_err(|e| e.to_string())?;
    file.write_all(buf.as_bytes()).map_err(|e| e.to_string())?;

    Ok(true)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![open_file, save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
