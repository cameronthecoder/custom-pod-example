# Adobe Connect Custom Pod Example
This a custom pod for Adobe Connect that will send a message to everyone except yourself, so you will need 2 people to test this properly. Feel free to fork it and play around with it!

# Usage
To use this custom pod in an Adobe Connect room, follow these steps:
1. Download or clone the project.
2. Compress the folder into a ZIP file.
3. Upload the ZIP file into an Adobe Connect Share Pod.
4. Enjoy!

## Some things to note:
- This pod works only in the new Standard view of Adobe Connect.
- The HTML file must end in a ``.htm`` extension and include the ``_html5`` suffix at the end of the file. Example:
	- ``MyPodName_html5.htm``
- If you add a new dependency or file, you need to add it to the XML file as shown below:
	```xml
	<asset type="document-view">
	<file href="MyNewFile.js"/>
	</asset>
	```


# License
This project is licensed under the MIT license.