# Search through pad history on Etherpad Lite.

![Alt text](http://i.imgur.com/gLoYk.png)

Ever worked on a document for ages and forgotten if you ever wrote about a certain topic or thing?  Well now you can search back the history of your topic.

Are you paranoid someone might of deleted your work?  Well now you can find out who quickly and easily..  Nice UI makes unicorns sing carols of passion to flop.

Install via the /admin/plugins UI in Etherpad Lite.

# TODO

* Lots...
* Authentication (SocketIO would fix this)
* Use SocketIO instead of AJAX (for streaming when searching through large pads)
* Minimize heavy lifting for large pads (by using diffs instead of entire pad context when doing regex)
* UI polishing
* Progress indicator
