from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

# Function to interact with a text box on a webpage
def type_in_text_box(url, text_box_id, text_to_type):
    # Configure the WebDriver (here using Chrome)
    driver = webdriver.Chrome()  # Provide path to your WebDriver if not in PATH

    try:
        # Open the provided URL
        driver.get(url)

        # Locate the text box by its ID
        text_box = driver.find_element(By.ID, text_box_id)

        # Clear the text box (optional, depending on the use case)
        text_box.clear()

        # Type the desired text into the text box
        text_box.send_keys(text_to_type)

        # Submit the form (optional)
        text_box.submit()

    finally:
        # Close the WebDriver session
        driver.quit()

# Example usage:
if __name__ == "__main__":
    # URL of the webpage containing the text box
    webpage_url = "https://example.com/form"

    # ID of the text box element on the webpage
    textbox_element_id = "mytextbox"

    # Text to type into the text box
    text_to_type = "Hello, world!"

    # Call the function to interact with the text box
    type_in_text_box(webpage_url, textbox_element_id, text_to_type)