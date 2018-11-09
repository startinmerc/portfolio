#To make responsive:
	tablet (1024):
		change margins to vw (could do as standard) - done as standard
		intro animation lines height change
	mobile (400):
		all section content to center
		navbar to single line
		about to stacked - smaller ghost? static?
		portfolio stacked

#to make one-page:
change container to flex-row
make all other sections 0width
push? to right side
	add "right" class to toggle
add listeners to navs
	minimises current section to 0vw
	toggles "right" class on current section
	toggles "right" class on selected section
	makes selected section 100vw
