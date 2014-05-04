markdown-todo-parser
====================

Markdown to Html parser using the [markdone](https://github.com/omarrr/markdone) definition.

The parser depends on [PageDown](https://code.google.com/p/pagedown/wiki/PageDown). It uses a hook to add the new elements defined in [markdone](https://github.com/omarrr/markdone) such as completed tasks, pending tasks and hashtags.

## How to use it

Include <code>markdown-todo.js</code> after <code>Markdown.Converter.js</code>. This will introduce a top level variable that you can use to parse the markdone.

```javascript
var parsedString = markdownTodo.parse('- pending task with #hashtag\n + done task with #hash2');
```

Will produce:

```html
<ul>
<li><input type="checkbox" checked class="donetask"> pending task with <span class="hashtag">#hashtag</span></li>
<li><input type="checkbox" class="pendingtask"> done task with <span class="hashtag">#hash2</span></li>
</ul>
```

Note that the classes <code>donetask</code>, <code>pendingtask</code> and <code>hashtag</code> were added to the corresponding elements.

Check this demo out: (pending).