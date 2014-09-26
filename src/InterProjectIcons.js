/**
 * Add icons linking to the current page (or [[Special:Watchlist]]) in other wikis of the same language
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
'use strict';

var	i, wikis, canonicalPageName = 'Special:Watchlist',
	lang = mw.config.get('wgContentLanguage'),
	$span = $('<span id="imgs-projetos" style="display: inline; margin-left: 1em; "></span>');
wikis = [
	{
		name: 'Wikipédia',
		url: '//' + lang + '.wikipedia.org/wiki/',
		img: '8/8b/Wikipedia-logo-35px.png/22px-Wikipedia-logo-35px.png'
	},
	{
		name: 'Wikiversidade',
		url: '//' + lang + '.wikiversity.org/wiki/',
		img: 'e/e3/Wikiversity-logo-41px.png/22px-Wikiversity-logo-41px.png'
	},
	{
		name: 'Wikisource',
		url: '//' + lang + '.wikisource.org/wiki/',
		img: 'f/fb/Wikisource-logo.png/21px-Wikisource-logo.png'
	},
	{
		name: 'Wikilivros',
		url: '//' + lang + '.wikibooks.org/wiki/',
		img: 'f/fa/Wikibooks-logo.svg/22px-Wikibooks-logo.svg.png'
	},
	{
		name: 'Wikcionário',
		url: '//' + lang + '.wiktionary.org/wiki/',
		img: 'b/bd/Wiktionary-logo-51px.gif/22px-Wiktionary-logo-51px.gif'
	},
	{
		name: 'Wikinotícias',
		url: '//' + lang + '.wikinews.org/wiki/',
		img: '6/60/Wikinews-logo-51px.png/22px-Wikinews-logo-51px.png'
	},
	{
		name: 'Wikiquote',
		url: '//' + lang + '.wikiquote.org/wiki/',
		img: '4/46/Wikiquote-logo-51px.png/22px-Wikiquote-logo-51px.png'
	},
	{
		name: 'Meta-Wiki',
		url: '//meta.wikimedia.org/wiki/',
		img: '7/75/Wikimedia_Community_Logo.svg/22px-Wikimedia_Community_Logo.svg.png'
	},
	{
		name: 'MediaWiki',
		url: '//www.mediawiki.org/wiki/',
		img: 'b/bb/MediaWiki-notext.svg/22px-MediaWiki-notext.svg.png'
	},
	{
		name: 'Wikimedia Commons',
		url: '//commons.wikimedia.org/wiki/',
		img: '4/4a/Commons-logo.svg/16px-Commons-logo.svg.png'
	},
	{
		name: 'Wikispecies',
		url: '//species.wikimedia.org/wiki/',
		img: 'd/df/Wikispecies-logo.svg/19px-Wikispecies-logo.svg.png'
	},
	{
		name: 'Translatewiki',
		url: '//translatewiki.net/wiki/',
		img: 'a/a5/N_write.svg/22px-N_write.svg.png'
	}
];

if ($.inArray(mw.config.get('wgNamespaceNumber'), [-1, 2, 3, 8, 9]) !== -1) {
	canonicalPageName = mw.config.get('wgCanonicalNamespace') + ':' +
		(
			mw.config.get('wgCanonicalSpecialPageName')
			|| mw.config.get('wgTitle').replace(' ', '_')
		);
}

for(i=0; i<wikis.length; i++){
	$span.append(
		'<a href="' + wikis[i].url + canonicalPageName + '" title="' + wikis[i].name + '">' +
		'<img src="//upload.wikimedia.org/wikipedia/commons/thumb/' +
			wikis[i].img + '"></a> '
	);
}

$(function(){
	$('#firstHeading').append( $span );
});

}( mediaWiki, jQuery ) );